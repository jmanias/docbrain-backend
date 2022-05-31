import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import appConfig from './app.config';

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: appConfig().jwtSecretAt,
      signOptions: { expiresIn: '30d' },
    };
  },
};
