import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateItem1701936118116 implements MigrationInterface {
  name = "CreateItem1701936118116";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "item" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "deletedAt" TIMESTAMP, "name" character varying, "value" integer, "serialNumber" character varying, "productionDate" TIMESTAMP, "expirationDate" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "item"`);
  }
}
