import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  public messages: ChatMessage[] = this.messagesService.getAllMessage();

  constructor(private messagesService: MessagesService) {
   }

  ngOnInit(): void {
  }
}
