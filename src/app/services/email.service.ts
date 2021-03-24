import { Injectable } from '@angular/core';

import * as nodeMailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor() { }

  transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      //Move these to a more secure area that is not compiled
      user: 'pedro@yourutahlandscaper.com',
      pass: 'M@jesticL@ndscaping1'
    }
  });

  /**
   * Get copy of user email and send it to the user
   * @param userEmail User that is ending the email
   * @param usertext User Text that is sent
   * @returns The users mail options for a copy of the email that is sent to MAJESTIC LANDSCAPING
   */
  getUserMailOptions(userEmail: string, usertext: string) {
    const mailOptions = {
      from: userEmail,
      to: userEmail,
      subject: `This is a copy of the email that you sent to MAJESTIC LANDSCAPING`,
      text: usertext
    };
    return mailOptions;
  };

  getMailOptions(userEmail: string, userSubject: string, userText: string) {
    const mailOptions = {
      from: userEmail,
      to: 'pedro@yourutahlandscaper.com',
      subject: userSubject,
      text: userText
    };
    return mailOptions;
  }

  sendEmail(userEmail: string, usertext?: any, userSubject?: any) {
    const userOptions = this.getUserMailOptions(userEmail, usertext);
    const options = this.getMailOptions(userEmail, userSubject, usertext);
    if (userEmail) {
      this.transporter.sendMail(userOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          alert(`Email sent: ${info.response}`);
        }
      });
    } else if (!userEmail) {
      this.transporter.sendMail(options, function(error, info){
        if (error) {
          console.log(error);
        } else {
          alert(`Email sent: ${info.response}`);
        }
      });
    }
  }
}
