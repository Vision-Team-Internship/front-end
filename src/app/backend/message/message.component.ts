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
  displayActionBtn = false;
  messageID: string = '';
  constructor(private messageService: AdminService) {}

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((data: any) => {
      console.log(data.payload);
      this.messages = data.payload;
    });
  }
  ok() {
    console.log('ok');
  }
  showAction(id: string) {
    this.messageID = id;
  }
  hideAction(id: string) {
    this.messageID = '';
  }

  deleteMessage(id: string) {
    this.messageService.deleteMessage(id).subscribe((res) => {
      console.log(res);
      this.messages = this.messages.filter((messages) => messages._id != id);
    });
  }
}
