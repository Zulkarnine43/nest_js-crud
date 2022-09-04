import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CreateThemeDto } from './create-theme.dto';

export class UpdateThemeDto extends PartialType(CreateThemeDto) {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  detail: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  require: boolean;

  @ApiProperty({
    required: true,
    enum: ['text', 'number', 'date', 'boolean', 'select', 'multiselect'],
  })
  @IsNotEmpty()
  // @IsEnum(AttributeType)
  // type: AttributeType;
  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  status: string;
}
