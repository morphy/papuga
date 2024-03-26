import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";

import { AppModule } from "./app.module";

const PORT = 4000;

async function bootstrap() {
  const logger = new Logger("Bootstrap");

  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();
  await app.listen(PORT);

  logger.log(`Listening on port ${PORT}`);
}

bootstrap();
