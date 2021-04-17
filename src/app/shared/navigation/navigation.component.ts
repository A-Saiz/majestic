import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { EmailService } from 'src/app/services/mail.service';

import { environment } from "../../../environments/environment";

import { MatDialog, MatDialogRef } from  '@angular/material/dialog';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  siteKey: string = environment.SITE_KEY;

  formData = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    subject: ['', Validators.required],
    message: ['', Validators.required],
    recaptcha: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private emailService: EmailService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  //Get form fields
  get email() {
    return this.formData.get("email");
  }

  get subject() {
    return this.formData.get("subject");
  }

  get message() {
    return this.formData.get("message");
  }

  get recaptcha() {
    return this.formData.get("recaptcha");
  }

  resolved(captchaResponse: any) {
   this.sendTokenToBackend(captchaResponse);
  }

  //Send token to backend to get verified
  sendTokenToBackend(token: any) {
    this.emailService.sendToken(token).subscribe({
      next: (result: any) => {
        return result;
      },
      error: (err: any) => {
        console.log(err.message);
      },
      complete: () => {
        return;
      }
    });
  }

  onSubmit() {
    let user = {
      email: this.formData.get('email')?.value,
      subject: this.formData.get('subject')?.value,
      message: this.formData.get('message')?.value
    };

    this.emailService.sendEmail(user).subscribe({
      next: (result: any) => {
        this.formData.reset();
        this.dialog.open(MessageComponent, {data: {
          message: "Your email has been sent. A copy has been sent to you for your records."
        }});
        return;
      },
      error: (err: any) => {
        this.dialog.open(MessageComponent, {data: {
          message: `Oops, something went wrong. ERROR: ${err.message}`
        }});
        this.formData.reset();
      }
    });
  }

  resetFields() {
    this.formData.reset();
  }
}
