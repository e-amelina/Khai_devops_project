import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getAll() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async getOne(@Param('id', ParseIntPipe) id: number) {
    const res = await this.usersService.findById(id);
    if (!res) {
      throw new NotFoundException();
    }

    return res;
  }
}
