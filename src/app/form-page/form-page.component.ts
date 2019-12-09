import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifyMailDuplicateService } from 'verify-mail-duplicate';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  @ViewChild('mailMes') mess: ElementRef;

  form1: FormGroup;
  mailMessage;
  constructor(private fb: FormBuilder, private verifyMail: VerifyMailDuplicateService) { }

  ngOnInit() {
    this.form1 = this.fb.group({
      pwd: ['', Validators.required],
      pwd2: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  duplicateMail() {
    if (this.form1.get('email').value.trim()) {
      this.verifyMail.verifyMail(this.form1.get('email').value).then(res => {
        if (res.result) {
          this.mailMessage = '信箱允許申請';
        } else {
          this.mailMessage = '此信箱已被使用過';
        }
        this.mess.nativeElement.style.color = res.color;

      });
    } else {
      this.mailMessage = '請輸入信箱';
    }

  }

}
