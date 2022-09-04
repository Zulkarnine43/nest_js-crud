import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { attachPaginate } from 'knex-paginate';
import { InjectModel } from 'nest-knexjs';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
attachPaginate();

@Injectable()
export class ThemeService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  create(createThemeDto: CreateThemeDto) {
    return this.knex('theme').insert(createThemeDto);
  }

  findAll(req) {
    try {
      const db = this.knex('theme');
      if(req.query.s) {
        db.where('name', 'like', '%' + req.query.s + '%');
      }
      const sort: any = req.query.sort;
      if(sort) {
          db.orderBy('id', sort);
      }
      const page: number = parseInt(req.query.page as any) || 1;
      const perPage = parseInt(req.query.perPage as any);
      db.select('*');
      if(perPage) {
        return db.paginate({ perPage: perPage, currentPage: page })
      }else {
        return db;
      }
    } catch (error) {
      return error;
    }
  }

  findOne(id: number) {
    return this.knex('theme').where({'id': id}).first();
  }

  update(id: number, updateThemeDto: UpdateThemeDto) {
    return this.knex.table('theme').where('id', id).update(updateThemeDto);
  }

  remove(id: number) {
    return this.knex.table('theme').where('id', id).del();
  }
}
