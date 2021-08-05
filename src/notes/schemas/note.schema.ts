// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';




// @Schema({
//   timestamps: true,
// })
// class Note {
//   @Prop({ required: true })
//   id: string;

//   @Prop()
//   title: string;

//   @Prop()
//   content: string;
// }

// export type NoteDocument = Note & Document;
// export const NoteSchema = SchemaFactory.createForClass(Note);


import * as mongoose from 'mongoose';
export const NoteSchema = new mongoose.Schema({
  title: String,
  content: String,
});