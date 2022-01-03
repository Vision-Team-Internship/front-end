import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Message } from 'src/model';

@Component({
  selector: 'app-completed-message',
  templateUrl: './completed-message.component.html',
  styleUrls: ['./completed-message.component.css'],
})
export class CompletedMessageComponent implements OnInit {
  completedMessage: Message[] = [];
  messageID: string = '';
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getCompletedMessage().subscribe((data: any) => {
      console.log('Completed Message', data.payload);
      this.completedMessage = data.payload;
    });
  }
  deleteMessage(id: string) {
    this.adminService.deleteMessage(id).subscribe((res) => {
      console.log(res);
      this.completedMessage = this.completedMessage.filter(
        (completedMessage) => completedMessage._id != id
      );
    });
  }
  showAction(id: string) {
    this.messageID = id;
  }
  hideAction() {
    this.messageID = '';
  }
}
