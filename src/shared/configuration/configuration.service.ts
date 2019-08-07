import {Injectable} from '@nestjs/common';

@Injectable()
export class ConfigurationService {
    private environment: string = process.env.NODE_ENV || 'development';

    get isDevelopment(): boolean {
        return this.environment === 'development';
    }

    get(name: string): string {
        return process.env[name];
    }
}
