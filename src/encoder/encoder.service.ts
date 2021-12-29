import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Encoder } from './interface/encoder.interface';
import { CodeUrlDTO } from './dto/encoder.dto';

@Injectable()
export class EncoderService {

    constructor(@InjectModel('Links') encoderModel: Model<Encoder>) {}
    
    encodeURL (){
        
    }

    decodeURL(){
    }
}
