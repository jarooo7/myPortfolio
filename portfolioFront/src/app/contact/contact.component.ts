import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { stringify } from 'querystring';
import { AlertService } from '../_services/alert.service';
import { MsgService } from '../_services/msg-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private msgService: MsgService,
    private alert: AlertService,
    private translate: TranslateService) { }

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
    return this.contactForm.get('email').hasError('required') ? 'email-req' : 'error-email';
  }

  sendEmail() {
    if (!this.contactForm.valid) {
      this.translate
        .get('error.error-form')
        .subscribe(translation => { this.openError(translation); });
      return;
    }
    const msg = {
      email: '<div style="width: 100%; background-color: black; color: white; padding: 20px "><h1>Wiadomość od: ' + this.contactForm.get('name').value +
        '</h1><h3>Email : ' + this.contactForm.get('email').value +
        '</h3></div><p style="margin: 20px;">' + this.contactForm.get('message').value + '</p>'
    };
    this.msgService.senndingMessage(
      msg
    ).subscribe((res) => {
      this.translate
        .get(res.success)
        .subscribe(translation => {
          this.openSuccess(translation);
        });
    },
      (e) => {
        this.translate
          .get('error.send')
          .subscribe(translation => {
            typeof e.error === 'object' || e.error === null ? this.openError(translation) : this.openError(e.error);
          });
      }
    );
  }

  openError(msg: string) {
    this.alert.openAlertError(msg);
  }

  openSuccess(msg: string) {
    this.alert.openAlertSuccess(msg);
  }

  openPage(url: string) {
    window.open(url, '_blank');
  }

}
