import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import emailjs from 'emailjs-com';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective],
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  private $formBuilder = inject(FormBuilder);
  constructor() {}
  userForm = this.$formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  ngOnInit() {}

  submit(): void {
    if (this.userForm.valid) {
      emailjs
        .send(
          'service_mt0biyn',
          'template_h0m0s78',
          this.userForm.value,
          'KS8xO3kZD-UCobEDo'
        )
        .then(() => {})
        .catch(() => {});
    }
  }
}
