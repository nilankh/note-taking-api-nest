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

@Controller('notes')
export class NotesController {
  @Get()
  findAll(): string {
    return 'Get all Notes';
  }

  //   @Get(':id')
  //   findOne(@Param() param): string {
  //     return `Note ${param.id}`;
  //   }
  //  Another way of above
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Note ${id}`;
  }

  @Post()
  create(@Body() createNoteDto: CreateNoteDto): string {
    return `Title: ${createNoteDto.title} Content: ${createNoteDto.content}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  updae(@Body() updateNoteDto: CreateNoteDto, @Param('id') id): string {
    return `update ${id} - Title: ${updateNoteDto.title} , Content: ${updateNoteDto.content}`;
  }
}
