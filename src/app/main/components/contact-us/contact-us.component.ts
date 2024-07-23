import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import emailjs from 'emailjs-com';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, NzSpinModule],
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [NzMessageService]
})
export class ContactUsComponent implements OnInit {
  private $formBuilder = inject(FormBuilder);
  isLoading = signal<boolean>(false);

  constructor(private messageService: NzMessageService) {}

  userForm = this.$formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  ngOnInit() {}

  submit(): void {
    if (this.userForm.valid && !this.isLoading()) {
      this.isLoading.set(true);

      emailjs
        .send(
          'service_mt0biyn',
          'template_h0m0s78',
          this.userForm.value,
          'KS8xO3kZD-UCobEDo'
        )
        .then(() => {
          this.isLoading.set(false);
          this.messageService.success('Ваш запрос был успешно отправлен.');
          this.userForm.reset();
        })
        .catch(() => {
          this.isLoading.set(false);
          this.messageService.error('Произошла ошибка, пожалуйста, повторите позже.');
        });
    } else {
      this.messageService.error('Пожалуйста, заполните все поля.');
    }
  }
}
