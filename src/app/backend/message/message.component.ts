import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  approvedForm!: FormGroup;
  constructor(private messageService: AdminService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.messageService.getHighMessage().subscribe((data: any) => {
      console.log('High', data.payload);
      this.highMessages = data.payload;
    });
    this.messageService.getNormalMessage().subscribe((data: any) => {
      console.log('Normal', data.payload);
      this.normalMessages = data.payload;
    });
    this.approvedForm = this.fb.group({
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
    return this.approvedForm.controls;
  }
  approvedMessage(data: any, id: string) {
    this.f.isApproved.setValue(true);
    this.f.cloudinary_id.setValue(data.cloudinary_id);
    this.f.createdDate.setValue(data.createdDate);
    this.f.feedbackLevel.setValue(data.feedbackLevel);
    this.f.feedbackLocation.setValue(data.feedbackLocation);
    this.f.feedbackType.setValue(data.feedbackType);
    this.f.isArchived.setValue(data.isArchived);
    this.f.isCompleted.setValue(data.isCompleted);
    this.f.isRejected.setValue(data.isRejected);
    this.f.managerContact.setValue(data.managerContact);
    this.f.message.setValue(data.message);
    this.f.title.setValue(data.title);
    this.f.uniqueIDs.setValue(data.uniqueIDs);
    this.f.url.setValue(data.url);
    this.f.__v.setValue(data.__v);
    this.f._id.setValue(data._id);

    const msg: any = {
      approvedDate: Date.now(),
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
    };
    this.messageService.approvedMessage(data._id, msg).subscribe((res) => {
      if (this.highFeedback) {
        this.highMessages = this.highMessages.filter(
          (highMessages) => highMessages._id != id
        );
      } else {
        this.normalMessages = this.normalMessages.filter(
          (highMessages) => highMessages._id != id
        );
      }
    });
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
  ok() {
    console.log('ok');
  }
  showAction(id: string) {
    this.messageID = id;
  }
  hideAction() {
    this.messageID = '';
  }
}
