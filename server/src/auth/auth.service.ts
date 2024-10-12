import { DatabaseService } from '@database'
import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common'
import { User } from '@prisma/client'
import { convertUserToUserDTO, IUserDTO, UsersService } from '@users'
import * as argon2 from 'argon2'

import { createExpireTimeForCookie, generateUUID } from './auth.helper'
import { IAuthLoginData } from './auth.model'

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

  async register() {}

  async finalizeUserLogin(email: string, @Res() response) {
    const expireTimeForCookie = createExpireTimeForCookie(1)
    const token = generateUUID(6)

    const updatedUser = await this.prisma.user.update({
      where: { email },
      data: { token },
    })

    response.cookie('auth', token, {
      sameSite: 'strict',
      secure: false,
      priority: 'high',
      expires: expireTimeForCookie,
    })
    response.cookie('uid', updatedUser.id, { sameSite: 'strict', priority: 'high' })
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
    try {
      return await argon2.verify(providedPassword, savedPassword)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      throw new HttpException(
        'Proszę sprawdzić czy podano poprawny login lub hasło',
        HttpStatus.NOT_FOUND,
      )
    }
  }
}
