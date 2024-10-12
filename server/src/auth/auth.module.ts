import { DatabaseService } from '@database'
import { Module } from '@nestjs/common'
import { UsersService } from '@users'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  providers: [DatabaseService, UsersService, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
