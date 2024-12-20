import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    firstName: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(public contactService: ApiService){

  }


  submitForm(){
    this.contactService.submitContact(this.contact).subscribe({
      next:(res) =>{
        console.log(res);
        alert('Message sent successfully!');
        this.contact = { firstName: '', email: '', subject: '', message: '' }; 
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Failed to send the message. Please try again.');
      }
    })
  }

}
