import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Message } from 'src/model';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
})
export class ProcessComponent implements OnInit {
  inProcessMessage: Message[] = [];
  messageID: string = '';
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getInProccessMessage().subscribe((data: any) => {
      console.log('In Processing', data.payload);
      this.inProcessMessage = data.payload;
    });
  }
  deleteMessage(id: string) {
    this.adminService.deleteMessage(id).subscribe((res) => {
      console.log(res);
      this.inProcessMessage = this.inProcessMessage.filter(
        (inProcessMessage) => inProcessMessage._id != id
      );
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
}
