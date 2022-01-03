import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Message } from 'src/model';

@Component({
  selector: 'app-all-feedback',
  templateUrl: './all-feedback.component.html',
  styleUrls: ['./all-feedback.component.css'],
})
export class AllFeedbackComponent implements OnInit {
  messages: Message[] = [];
  messageID: string = '';
  constructor(private messageService: AdminService) {}

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((data: any) => {
      console.log(data.payload);
      this.messages = data.payload;
    });
  }
  ok() {
    alert('ok');
  }
  showAction(id: string) {
    this.messageID = id;
  }
  hideAction() {
    this.messageID = '';
  }
  deleteMessage(id: string) {}
}
