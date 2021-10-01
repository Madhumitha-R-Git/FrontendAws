import { Component, OnInit } from '@angular/core';
import { Data } from 'src/data';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name=''
  mail=''
  pass=''
  data:Data={
    name:this.name,
    mail:this.mail,
    pass:this.pass

  };
  CheckUser()
  {
    this.data={
      name:this.name,
      mail:this.mail,
      pass:this.pass
  
    };
    this.service.check_details(this.data)
    .subscribe()
    this.name=''
    this.mail=''
    this.pass=''

   
  }

  constructor(private service:HelpService) { }

  ngOnInit(): void {
  }
}
