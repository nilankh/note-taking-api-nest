import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('notes')
export class NotesController {
    @Get()
    findAll():string{
        return 'Get all items'
    }

    @Post()
    create(): string{
        return 'Create items'
    }
}
