import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { EmailService } from 'src/app/services/mail.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  email = new FormControl;
  subject = new FormControl;
  message = new FormControl;



  formData = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    let user = {
      email: this.email.value,
      subject: this.subject.value,
      message: this.message.value
    };
    this.emailService.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res: any = data;
        alert("Email has been sent");
      },
      err => {
        console.log(err);
      }
    );
  }

}
