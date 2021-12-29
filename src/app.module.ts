import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncoderModule } from './encoder/encoder.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [EncoderModule, MongooseModule.forRoot('mongodb+srv://root:root@urlshortener.vphtu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
