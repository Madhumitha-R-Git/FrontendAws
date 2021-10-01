import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/data';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name=''
  mail=''
  pass=''
  data:Data={
    name:this.name,
    mail:this.mail,
    pass:this.pass

  };
  AddUser()
  {
    this.data={
      name:this.name,
      mail:this.mail,
      pass:this.pass
  
    };
    console.log(this.data)
    this.service.add_details(this.data)
    .subscribe((res)=>
      {
         console.log(res);
         localStorage.setItem('token',res.accessToken)
         this.router.navigate(['/display'])

      })
    this.name=''
    this.mail=''
    this.pass=''
  }

  constructor(private service : HelpService,
    private router : Router) { }

  ngOnInit(): void {
  }


}
