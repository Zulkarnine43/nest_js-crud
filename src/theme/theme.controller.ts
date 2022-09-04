import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ThemeService } from './theme.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { Request } from 'express';

@Controller('theme')
@ApiTags('Theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Post()
  create(@Body() createThemeDto: CreateThemeDto) {
    return this.themeService.create(createThemeDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.themeService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.themeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThemeDto: UpdateThemeDto) {
    return this.themeService.update(+id, updateThemeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.themeService.remove(+id);
  }
}
