import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

   nodeMailerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private emailService : EmailService) {
    
   }

  ngOnInit(): void {
    this.nodeMailerForm = this.formBuilder.group({
      email:[null,[Validators.required]],
      name:[null],
      message:[null]

    });
  }

  sendEmail(){
    let email = this.nodeMailerForm.value.email;
    let name = this.nodeMailerForm.value.name;
    let message= this.nodeMailerForm.value.message;

    let reqObj = {
      email:email,
      name:name,
      message:message
    }

    this.emailService.sendMessage(reqObj).subscribe((data: any)=>{
      console.log(data);
    })
  }

}
