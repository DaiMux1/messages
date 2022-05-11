import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        console.log(body);
    }

    @Get("/:id")
    getMessages(@Param('id') id: string ) {
        console.log(id);
        
    }
}
