import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmpty,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateThemeDto {
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
  // type: AttributeType;
  @ApiProperty({ required: false, enum: ['active', 'inactive'] })
  @IsNotEmpty()
  @IsString()
  status: string;
}
