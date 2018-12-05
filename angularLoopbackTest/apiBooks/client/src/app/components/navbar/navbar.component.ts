import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public isLogged: boolean = false;
  public app_name = "Books Store";

  ngOnInit() {
    this.onCheckUser();
  }

  onLogout(): void {
    this.authService.logOutUser();
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }

  }
}