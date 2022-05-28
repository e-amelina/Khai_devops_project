import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsersTable1653741217820 implements MigrationInterface {
  private table = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        unsigned: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'first_name',
        type: 'varchar',
      },
      { name: 'created_at', type: 'timestamp', default: 'now()' },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
        onUpdate: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table, true);
  }
}
