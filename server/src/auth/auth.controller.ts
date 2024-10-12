import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'

import { IAuthLoginData } from './auth.model'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() authLoginData: IAuthLoginData, @Res() response) {
    // try {
    //   const user = await this.authService.login(authLoginData)
    //   await this.authService.finalizeUserLogin(authLoginData.email, response)

    //   return response.json({ status: HttpStatus.OK, data: user })
    // } catch (error) {
    //   return response.json(error)
    // }
    const user = await this.authService.login(authLoginData)
    await this.authService.finalizeUserLogin(authLoginData.email, response)

    return response.json({ status: HttpStatus.OK, data: user })
  }

  @Post('/register')
  async register() {
    return this.authService.register()
  }
}
