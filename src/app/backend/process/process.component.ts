import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Message, UpdateMessage } from 'src/model';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
})
export class ProcessComponent implements OnInit {
  inProcessMessage: Message[] = [];
  messageID: string = '';
  completeMessageForm!: FormGroup;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminService.getInProccessMessage().subscribe((data: any) => {
      console.log('In Processing', data.payload);
      this.inProcessMessage = data.payload;
    });
    this.completeMessageForm = this.fb.group({
      _id: [''],
    });
  }

  get f() {
    return this.completeMessageForm.controls;
  }

  completeMessage(data: any, id: string) {
    this.f._id.setValue(data._id);

    const msg: UpdateMessage = {
      note: 'Completed',
      feedback_id: this.f._id.value,
    };

    this.adminService.completeMessage(msg).subscribe((res) => {
      console.log(res);
      this.inProcessMessage = this.inProcessMessage.filter(
        (inProcessMessage) => inProcessMessage._id != id
      );
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
  msgItem(msg_ID: string) {
    this.router.navigate(['/d/msg-process', msg_ID]);
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
