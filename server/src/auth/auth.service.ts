import { DatabaseService } from '@database'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { convertUserToUserDTO, IUserDTO, UsersService } from '@users'
import * as argon2 from 'argon2'

import { generateUUID } from './auth.helper'
import { IAuthFinalizeLoginData, IAuthLoginData, IAuthRegisterData } from './auth.model'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly usersService: UsersService,
  ) {}

  async login(authLoginData: IAuthLoginData): Promise<IUserDTO> {
    const { email, password } = authLoginData

    const user: User = await this.usersService.getUserByEmailAddress(email)

    await this.verifyUserPassword(password, user.password)

    return convertUserToUserDTO(user)
  }

  async register(authRegisterData: IAuthRegisterData): Promise<void> {
    const { email, username, password } = authRegisterData

    await this.usersService.getUserByEmailAddress(email, true)
    const hashedPassword = await this.hashUserPassword(password)

    await this.prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        createTime: new Date(),
      },
    })
  }

  async finalizeUserLogin(email: string): Promise<IAuthFinalizeLoginData> {
    const token = generateUUID(6)

    const updatedUser = await this.prisma.user.update({
      where: { email },
      data: { token },
    })

    return { authToken: token, uid: updatedUser.id }
  }

  async hashUserPassword(password: string) {
    try {
      return await argon2.hash(password)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      throw new HttpException(
        'ERROR_A_01: Wystąpił wewnętrzny problem, skontaktuj się z administratorem serwisu',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async verifyUserPassword(providedPassword: string, savedPassword: string) {
    const result = await argon2.verify(savedPassword, providedPassword)

    if (result) {
      return true
    }

    throw new HttpException(
      'Proszę sprawdzić czy podano poprawny login lub hasło',
      HttpStatus.NOT_FOUND,
    )
  }
}
