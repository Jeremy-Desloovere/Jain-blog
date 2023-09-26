import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_58ejm9j',
        'template_l939pnc',
        e.target as HTMLFormElement,
        '1FRgprCn7Y5RgeGQN'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
