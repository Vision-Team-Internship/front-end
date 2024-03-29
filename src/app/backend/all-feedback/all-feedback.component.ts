import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Message, UpdateMessage } from 'src/model';

@Component({
  selector: 'app-all-feedback',
  templateUrl: './all-feedback.component.html',
  styleUrls: ['./all-feedback.component.css'],
})
export class AllFeedbackComponent implements OnInit {
  messages: Message[] = [];
  messageID: string = '';
  approvedForm!: FormGroup;
  constructor(
    private messageService: AdminService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.messageService.getAllMessage().subscribe((data: any) => {
      console.log('All Messages', data.payload);
      this.messages = data.payload;
    });
    this.approvedForm = this.fb.group({
      _id: [''],
    });
  }
  get f() {
    return this.approvedForm.controls;
  }
  approvedMessage(data: any, id: string) {
    this.f._id.setValue(data._id);

    const msg: UpdateMessage = {
      note: 'ok',
      feedback_id: this.f._id.value,
    };
    this.messageService.approvedMessage(msg).subscribe((res) => {
      console.log(res);
      this.messages = this.messages.filter((msg) => msg._id != id);
    });
  }

  deleteMessage(id: string) {
    this.messageService.deleteMessage(id).subscribe((res) => {
      console.log(res);
      this.messages = this.messages.filter((messages) => messages._id != id);
    });
  }
  msgItem(msg_ID: string) {
    this.router.navigate(['/d/all-msg', msg_ID]);
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
