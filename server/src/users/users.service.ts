import { DatabaseService } from '@database'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { User } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: DatabaseService) {}

  async getUserByEmailAddress(value: string, isRegisterStep: boolean = false): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email: value },
    })

    if (!user && !isRegisterStep) {
      throw new HttpException(
        'Proszę sprawdzić czy podano poprawny login lub hasło',
        HttpStatus.NOT_FOUND,
      )
    }

    console.log('user && isRegisterStep', user && isRegisterStep)

    if (user && isRegisterStep) {
      throw new HttpException(
        'Użytkownik o podanym adresie email już istnieje',
        HttpStatus.CONFLICT,
      )
    }

    return user
  }
}
