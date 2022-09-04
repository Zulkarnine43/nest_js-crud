import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('theme', function (table) {
    table.increments('id');
    table.string('name', 30).notNullable();
    table.string('detail', 255).nullable();
    table.boolean('require').defaultTo(false);
    table
      .enum('type', [
        'text',
        'number',
        'date',
        'boolean',
        'select',
        'multiselect',
        'image',
      ])
      .notNullable();
    table.integer('default_variation').unsigned().nullable();
    table.boolean('variation').defaultTo(false);
    table.boolean('image').defaultTo(false);
    table.boolean('status').defaultTo(false);
    table.timestamps();
    table.dateTime('deleted_at').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('theme');
}
