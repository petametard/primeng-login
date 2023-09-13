import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  // selectedState: any = null;

  // states: any[] = [
  //   { name: 'Arizona', code: 'Arizona' },
  //   { name: 'California', value: 'California' },
  //   { name: 'Florida', code: 'Florida' },
  //   { name: 'Ohio', code: 'Ohio' },
  //   { name: 'Washington', code: 'Washington' },
  // ];

  // cities1: any[] = [];

  // cities2: any[] = [];

  // city1: any = null;

  // city2: any = null;

  onSubmit() {
    this.submitted = true;
    alert(JSON.stringify(this.loginForm.value));
  }
}
