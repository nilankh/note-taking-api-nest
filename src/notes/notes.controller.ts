import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Note } from './interfaces/note.interface';

@Controller('notes')
export class NotesController {
  // Before i can use service i have to inject it as a dependency
  constructor(private readonly notesService: NotesService) {}

  @Get()
  findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }

  //   @Get(':id')
  //   findOne(@Param() param): string {
  //     return `Note ${param.id}`;
  //   }
  //  Another way of above
  @Get(':id')
  findOne(@Param('id') id): Promise<Note> {
    return this.notesService.findOne(id);
  }

  @Post()
  create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
    return this.notesService.create(createNoteDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Note>{
    return this.notesService.delete(id);
  }

  @Put(':id')
  updae(@Body() updateNoteDto: CreateNoteDto, @Param('id') id): Promise<Note> {
    return this.notesService.update(id, updateNoteDto);
  }
}
