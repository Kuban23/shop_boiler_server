import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'rootroot',
      database: 'boiler_app',
      // database: 'postgres',
      entities: [UserEntity],
      synchronize: true,

      // type: 'mysql',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: 'root',
      // database: 'test',
      // entities: [],
      // synchronize: true,
    }),
    UsersModule,
    UserModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
