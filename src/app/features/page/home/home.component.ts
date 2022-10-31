import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title:string ="Sx admin";
  menus:Menu[] = [
    {title: 'Users', img: 'assets/images/users.png', route: '/users'},
    {title: 'Account', img: 'assets/images/accounts.png', route: '/account'},
    {title: 'Cards', img: 'assets/images/cards.png', route: '/cards'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
