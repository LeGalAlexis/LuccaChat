import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-message';
import { MessagesService } from 'src/app/services/messages.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-typingbox',
  templateUrl: './chat-typingbox.component.html',
  styleUrls: ['./chat-typingbox.component.scss']
})
export class ChatTypingboxComponent implements OnInit {

  messageText: string = "";
  @Input()
  writer: string = "";

  constructor(private messageService: MessagesService, private userService: UserService) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    if(this.messageText != "") {
      let message: ChatMessage = new ChatMessage();
      message.message = this.messageText;
      message.writer = this.writer;
      message.date = new Date();
      this.messageService.addToMessages(message);
      this.messageText = ""
    }
  }

  disconnectUser() {
    this.userService.disconnectUser(this.writer);
  }
}
