import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.sass']
})
export class ContactButtonComponent implements OnInit {
  @Input() className = '';

  constructor() { }

  ngOnInit() {
  }

}
