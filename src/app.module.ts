import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';
import {TypegooseModule} from 'nestjs-typegoose';
import {TaskModule} from './task/task.module';
import {DiscussionModule} from './discussion/discussion.module';
import {SprintController} from './sprint/sprint.controller';
import {SprintModule} from './sprint/sprint.module';
import {UserCollectionModule} from './user-collection/user-collection.module';
import {GroupCollectionModule} from './group-collection/group-collection.module';
import {ProjectModule} from './project/project.module';

@Module({
    imports: [
        TypegooseModule.forRootAsync({
            useFactory: async () => ({
                // uri: 'mongodb://appsphere:use588mead@cluster0-shard-00-00-fdpyz.mongodb.net:27017,cluster0-shard-00-01-fdpyz.mongodb.net:27017,cluster0-shard-00-02-fdpyz.mongodb.net:27017/AavantanCADB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
                uri: 'mongodb://localhost/test',
                retryDelay: 500,
                retryAttempts: 3,
                useNewUrlParser: true,
                useCreateIndex: true,
            }),
        }),
        SharedModule,
        UserModule,
        TaskModule,
        DiscussionModule,
        SprintModule,
        UserCollectionModule,
        GroupCollectionModule,
        ProjectModule
    ],
    controllers: [AppController, SprintController],
    providers: [AppService],
})
export class AppModule {
}
