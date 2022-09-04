import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { ThemeModule } from './theme/theme.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import knexConfig from './knexconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    KnexModule.forRoot(knexConfig),
    ThemeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
