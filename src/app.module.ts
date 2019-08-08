import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';
import {TypegooseModule} from 'nestjs-typegoose';
import { ProjectModule } from './project/project.module';

@Module({
    imports: [
        TypegooseModule.forRootAsync({
            useFactory: async () => ({
                uri: 'mongodb://localhost/test',
                // uri: 'mongodb://appsphere:use588mead@cluster0-shard-00-00-fdpyz.mongodb.net:27017,cluster0-shard-00-01-fdpyz.mongodb.net:27017,cluster0-shard-00-02-fdpyz.mongodb.net:27017/AavantanCADB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
                retryDelay: 500,
                retryAttempts: 3,
                useNewUrlParser: true,
                useCreateIndex: true,
            }),
        }),
        SharedModule,
        UserModule,
        ProjectModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
