import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'

import { IAuthLoginData, IAuthRegisterData } from './auth.model'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() authLoginData: IAuthLoginData, @Res() response) {
    const user = await this.authService.login(authLoginData)
    const { authToken, uid } = await this.authService.finalizeUserLogin(authLoginData.email)

    return response.json({ status: HttpStatus.OK, data: { user, authToken, uid } })
  }

  @Post('/register')
  async register(@Body() authRegisterData: IAuthRegisterData, @Res() response) {
    await this.authService.register(authRegisterData)

    return response.json({ status: HttpStatus.CREATED })
  }
}
