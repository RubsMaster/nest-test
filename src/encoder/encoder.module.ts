import { Module } from '@nestjs/common';
import { EncoderController } from './encoder.controller';
import { EncoderService } from './encoder.service';
import { MongooseModule } from '@nestjs/mongoose';
import { encoderSchema } from './schemas/encoder.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Encoders', schema: encoderSchema}
  ])],
  controllers: [EncoderController],
  providers: [EncoderService]
})
export class EncoderModule {}
