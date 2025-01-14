import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

interface EnvironmentVariables {
  PORT: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService =
    app.get<ConfigService<EnvironmentVariables>>(ConfigService);
  const port = configService.get<number>('PORT') || 3000; // 환경 변수에서 PORT 값을 가져옵니다. 없으면 기본값 3000 사용

  await app.listen(port);
}
bootstrap();
