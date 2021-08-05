import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('notes')
export class NotesController {
    @Get()
    findAll():string{
        return 'Get all items'
    }

    @Post()
    create(@Body() createNoteDto: CreateNoteDto): string{
        return `Titile: ${createNoteDto.title} Content: ${createNoteDto.content}`;
    }
}
