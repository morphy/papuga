import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratedMigration1702684907262 implements MigrationInterface {
    name = 'GeneratedMigration1702684907262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "UQ_ee4429a8fe2b5758456617e1ef6" UNIQUE ("code")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "UQ_ee4429a8fe2b5758456617e1ef6"`);
    }

}
