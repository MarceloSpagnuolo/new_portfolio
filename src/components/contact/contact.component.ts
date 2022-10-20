import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  }

  constructor() { }

  ngOnInit() {
  }

  send() {
    
  }

}
