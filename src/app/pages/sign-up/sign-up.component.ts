import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registrationForm: FormGroup;
  isPasswordMatching = true;
  step = 1;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-Z0-9]+$/),
        ],
      ],
      confirmPassword: ['', [Validators.required, this.passwordMatching(this.isPasswordMatching)]],
      code: [''],
    });

    this.registrationForm
      .get('confirmPassword')
      .valueChanges.subscribe(() => {
        this.isPasswordMatching = this.registrationForm.get('password').value === this.registrationForm.get('confirmPassword').value;
      });
  }

  passwordMatching(isPasswordMatching: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.isPasswordMatching ? { passwordMismatch: { value: true } } : null;
    };
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  goToStep(step: 1|2) {
    this.step = step;
  }

  onSubmit() {
    this.router.navigateByUrl(`/greeting`)
  }
}
