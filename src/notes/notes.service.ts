// It allow us to inject this as dependency into a constructor
import { Injectable } from '@nestjs/common';
import { Note } from './interfaces/note.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NotesService {
  // Inside this NoteService we will have bunch of functions that we are gonna call from the constructor.

  constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}
  async findAll(): Promise<Note[]> {
    return await this.noteModel.find();
  }

  async findOne(id: string): Promise<Note> {
    return await this.noteModel.findOne({ _id: id });
  }

  async create(note: Note): Promise<Note> {
    const newNote = new this.noteModel(note);
    return await newNote.save();
  }

  async delete(id: string): Promise<Note> {
    return await this.noteModel.findByIdAndRemove(id);
  }

  async update(id: string, note: Note): Promise<Note> {
    return await this.noteModel.findByIdAndUpdate(id, note, { new: true });
  }
}
