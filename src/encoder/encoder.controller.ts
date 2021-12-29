import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CodeUrlDTO } from './dto/encoder.dto';

@Controller('encoder')
export class EncoderController {

    @Post('/create')
    createPost(@Res() res, @Body() codeUrlDTO: CodeUrlDTO) {
        console.log(codeUrlDTO);
        
        return res.status(HttpStatus.OK).json({
            message: 'recieved'
        })
    }

}
