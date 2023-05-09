import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UserService} from "../../../../../core/service/user/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-role-to-user',
  templateUrl: './role-to-user.component.html',
  styleUrls: ['./role-to-user.component.css']
})
export class RoleToUserComponent implements OnInit {
  roleToUserForm: FormGroup;
  constructor(private router:Router,
              private userService: UserService,
              private fb: FormBuilder
  ) {
    this.roleToUserForm = this.createForm()
  }

  createForm(): FormGroup {
    return this.fb.group({
      userName: ['', Validators.required],
      roleName: ['', Validators.required]
    });
  }

  roleToUser(){
    console.log(this.roleToUserForm)
    this.userService.roleToUser(this.roleToUserForm.getRawValue()).subscribe(() =>{
      console.log('saved');
      this.roleToUserForm.reset();
      // this.router.navigate(['/login']);
    })
  }
  ngOnInit(): void {

  }


}
