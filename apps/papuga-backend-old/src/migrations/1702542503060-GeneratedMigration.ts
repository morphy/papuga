import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratedMigration1702542503060 implements MigrationInterface {
  name = "GeneratedMigration1702542503060";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "item" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "name" character varying, "value" integer, "serialNumber" character varying, "productionDate" TIMESTAMP, "expirationDate" TIMESTAMP, "deletedAt" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "itemInspection" ("id" SERIAL NOT NULL, "itemId" integer NOT NULL, "userId" character varying NOT NULL, "name" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "type" character varying NOT NULL, "status" character varying NOT NULL, "result" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_37e550d1ba2550c05766a4d50d9" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" character varying NOT NULL, "email" character varying NOT NULL, "createdTimestamp" TIMESTAMP NOT NULL, "enabled" boolean NOT NULL, "avatar" character varying, "firstName" character varying, "lastName" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "vehicle" ("id" SERIAL NOT NULL, "make" character varying NOT NULL, "model" character varying NOT NULL, "plate" character varying NOT NULL, "value" integer, "vin" character varying NOT NULL, "year" integer NOT NULL, "deletedAt" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "vehicleInspection" ("id" SERIAL NOT NULL, "vehicleId" integer NOT NULL, "userId" character varying NOT NULL, "name" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "type" character varying NOT NULL, "status" character varying NOT NULL, "result" character varying NOT NULL, "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7ead69f2537803cf88073aabe08" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "vehicleInspection"`);
    await queryRunner.query(`DROP TABLE "vehicle"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "itemInspection"`);
    await queryRunner.query(`DROP TABLE "item"`);
  }
}
