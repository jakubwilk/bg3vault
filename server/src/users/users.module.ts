import { DatabaseService } from '@database'
import { Module } from '@nestjs/common'

import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  providers: [DatabaseService, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
