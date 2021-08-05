import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { Request, Response } from 'express';

@Controller('notes')
export class NotesController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Hello world');
  }

  @Post()
  create(@Body() createNoteDto: CreateNoteDto): string {
    return `Title: ${createNoteDto.title} Content: ${createNoteDto.content}`;
  }
}
