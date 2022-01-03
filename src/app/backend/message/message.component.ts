import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Message } from 'src/model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  messages: Message[] = [];
  highMessages: Message[] = [];
  normalMessages: Message[] = [];
  location: string[] = [];
  displayActionBtn = false;
  messageID: string = '';
  highFeedback = true;
  normalFeedback = false;
  constructor(private messageService: AdminService) {}

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((data: any) => {
      console.log(data.payload);
      this.messages = data.payload;
    });
    this.messageService.getHighMessage().subscribe((data: any) => {
      console.log(data.payload);
      this.highMessages = data.payload;
    });
    this.messageService.getLormalMessage().subscribe((data: any) => {
      console.log('low', data.payload);
      this.normalMessages = data.payload;
    });
  }
  ok() {
    console.log('ok');
  }
  showAction(id: string) {
    this.messageID = id;
  }
  hideAction() {
    this.messageID = '';
  }

  deleteMessage(id: string) {
    this.messageService.deleteMessage(id).subscribe((res) => {
      console.log(res);
      if (this.highFeedback) {
        this.highMessages = this.highMessages.filter(
          (messages) => messages._id != id
        );
      }
      if (this.normalMessages) {
        this.normalMessages = this.normalMessages.filter(
          (messages) => messages._id != id
        );
      }
    });
  }
  showNormal() {
    this.normalFeedback = true;
    this.highFeedback = false;
  }
  showHigh() {
    this.highFeedback = true;
    this.normalFeedback = false;
  }
}
