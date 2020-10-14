import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602696255136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'entity_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    name: 'imageEntities',
                    columnNames: ['entity_id'],
                    referencedTableName: 'entities',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            ],
        }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
