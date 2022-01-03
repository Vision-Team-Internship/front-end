import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  completeMessageForm!: FormGroup;

  constructor(private adminService: AdminService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.adminService.getInProccessMessage().subscribe((data: any) => {
      console.log('In Processing', data.payload);
      this.inProcessMessage = data.payload;
    });
    this.completeMessageForm = this.fb.group({
      cloudinary_id: [''],
      createdDate: [''],
      feedbackLevel: [''],
      feedbackLocation: [{ room: [''], floor: [''], department: [''] }],
      feedbackType: [''],
      isApproved: false,
      isArchived: false,
      isCompleted: false,
      isRejected: false,
      managerContact: [''],
      message: [''],
      title: [''],
      uniqueIDs: [''],
      url: [''],
      __v: 0,
      _id: [''],
    });
  }

  get f() {
    return this.completeMessageForm.controls;
  }

  completeMessage(data: any, id: string) {
    this.f.isCompleted.setValue(true);
    this.f.isApproved.setValue(data.isApproved);
    this.f.cloudinary_id.setValue(data.cloudinary_id);
    this.f.createdDate.setValue(data.createdDate);
    this.f.feedbackLevel.setValue(data.feedbackLevel);
    this.f.feedbackLocation.setValue(data.feedbackLocation);
    this.f.feedbackType.setValue(data.feedbackType);
    this.f.isArchived.setValue(data.isArchived);
    this.f.isRejected.setValue(data.isRejected);
    this.f.managerContact.setValue(data.managerContact);
    this.f.message.setValue(data.message);
    this.f.title.setValue(data.title);
    this.f.uniqueIDs.setValue(data.uniqueIDs);
    this.f.url.setValue(data.url);
    this.f.__v.setValue(data.__v);
    this.f._id.setValue(data._id);

    const msg: any = {
      isApproved: this.f.isApproved.value,
      cloudinary_id: this.f.cloudinary_id.value,
      createdDate: this.f.createdDate.value,
      feedbackLevel: this.f.feedbackLevel.value,
      feedbackLocation: this.f.feedbackLocation.value,
      feedbackType: this.f.feedbackType.value,
      isArchived: this.f.isArchived.value,
      isCompleted: this.f.isCompleted.value,
      isRejected: this.f.isRejected.value,
      managerContact: this.f.managerContact.value,
      message: this.f.message.value,
      title: this.f.title.value,
      uniqueIDs: this.f.uniqueIDs.value,
      url: this.f.url.value,
      __v: this.f.__v.value,
      _id: this.f._id.value,
    };

    this.adminService.completeMessage(msg._id, msg).subscribe((res) => {
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
