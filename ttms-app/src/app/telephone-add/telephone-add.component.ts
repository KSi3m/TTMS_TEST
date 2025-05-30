import { Component } from '@angular/core';
import { TelephoneService } from '../telephone.service';
import { Telephone } from '../Telephone';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telephone-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './telephone-add.component.html',
  styleUrl: './telephone-add.component.css'
})
export class TelephoneAddComponent {

  constructor(private service:TelephoneService,private route: Router) {}

  telephone : Telephone = {
    id:0,
    name :'',
    number:'',
  }


  onSubmit() :void{
     this.service.createTelephone(this.telephone).subscribe({
      next:() =>{
          this.route.navigate(['/'])
      },
      error: (err) => console.log(err)
     })
  }
  


}
