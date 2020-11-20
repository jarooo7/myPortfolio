import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  isError(element: string): boolean{
    return this.contactForm.get(element).errors && this.contactForm.get(element).touched;
  }

  testEmailError(): string{
    return this.contactForm.get('email').hasError('required') ? 'Adres email wymagany' : 'Nieprawidłowy adres email';
  }

  sendEmail(){
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // this.user = Object.assign({}, this.registerForm.value);

      // this.authService.register(this.user).subscribe(() => {
      //   this.alertify.success('rejestracja udana');
      // }, error => {
      //   this.alertify.error(error);
      // }, () => {
      //   this.authService.login(this.user).subscribe(() => {
      //     this.router.navigate(['/uzytkownicy']);
      //   });
      // });
    }
  }

}
