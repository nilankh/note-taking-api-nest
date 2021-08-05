// It allow us to inject this as dependency into a constructor
import { Injectable } from '@nestjs/common';
import { Note } from './interfaces/note.interface';

@Injectable()
export class NotesService {
  // Inside this NoteService we will have bunch of functions that we are gonna call from the constructor.
  private readonly notes: Note[] = [
    {
      id: '12345',
      title: 'Note One',
      content: 'This is hi from Note One',
    },
    {
      id: '12341',
      title: 'Note Two',
      content: 'This is hi from Note Two',
    },
  ];
  findAll(): Note[] {
      return this.notes;
  }

  findOne(id: string): Note{
      return this.notes.find(note => note.id === id);
  }
}
