import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  userInfo: User = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfo().subscribe((userInfo) => {
      this.userInfo = userInfo;
    });
  }

  getPrettifiedName() {
    return `${this.userInfo.name.title}. ${this.userInfo.name.first} ${this.userInfo.name.last}`
  }
}
