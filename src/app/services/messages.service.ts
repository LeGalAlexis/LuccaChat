import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chat-message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages: Array<ChatMessage>;

  constructor() {
    this.messages = new Array<ChatMessage>();
   }

   public addToMessages(message: ChatMessage) : void {
     this.messages.push(message);
   }

   public getAllMessage(): Array<ChatMessage> {
     return this.messages;
   }
}
