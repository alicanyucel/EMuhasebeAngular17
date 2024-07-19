import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirm-email',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.css'
})
export class ConfirmEmailComponent {
  email:string="";
  response:string="mail onayı";
constructor(private actiavted:ActivatedRoute,private http:HttpService)
{
  this.actiavted.params.subscribe(res=>{
    this.email=res["email"];
    this.confirm();
  })
}
confirm(){
  this.http.post<string>("Auth/ConfirmEmail",{email:this.email},(res)=>{
    this.response=res;
  })
}
}
