import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  loginForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;
    alert(JSON.stringify(this.loginForm.value));
  }
}
