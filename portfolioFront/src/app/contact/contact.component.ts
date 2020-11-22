import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../_services/alert.service';
import { MsgService } from '../_services/msg-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private msgService: MsgService, private alert: AlertService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  isError(element: string): boolean {
    return this.contactForm.get(element).errors && this.contactForm.get(element).touched;
  }

  testEmailError(): string {
    return this.contactForm.get('email').hasError('required') ? 'Adres email wymagany' : 'Nieprawidłowy adres email';
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const msg = {
        email: '<div style="width: 100%; background-color: black; color: white; padding: 20px "><h1>Wiadomość od: ' + this.contactForm.get('name').value +
          '</h1><h3>Email : ' + this.contactForm.get('email').value +
          '</h3></div><p style="margin: 20px;">' + this.contactForm.get('message').value + '</p>'
      };
      this.msgService.senndingMessage(
        msg
      ).subscribe((res) => {
        this.openSuccess(res.success);
      },
        (e) => {
          this.openError(e.error);
        }
      );
    }
  }

  openError(msg: string) {
    this.alert.openAlertError(msg);
  }

  openSuccess(msg: string) {
    this.alert.openAlertSuccess(msg);
  }

}
