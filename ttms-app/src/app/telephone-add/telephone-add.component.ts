import { Component, OnInit } from '@angular/core';
import { TelephoneService } from '../telephone.service';
import { Telephone } from '../Telephone';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-telephone-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './telephone-add.component.html',
  styleUrl: './telephone-add.component.css'
})
export class TelephoneAddComponent implements OnInit {

  constructor(private service:TelephoneService,private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  private isEditing : boolean = false;

  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe((res) =>{
       const id = res.get('id')
       if(id != null)
       {
        this.isEditing = true
        this.service.getTelephone(Number(id)).subscribe({
          next: (res) => {
            if(res != null)
            {
                this.telephone = res;
            }
          },
          error: (err) => {
            console.log(err)
            //this.route.navigate(['/'])
          }
        })


       }
      
     })
  }

  telephone : Telephone = {
    id:0,
    name :'',
    number:'',
  }


  onSubmit() :void{
    if(this.isEditing)
    {
      this.service.updateTelephone(this.telephone).subscribe({
      next:() =>{
          this.route.navigate(['/'])
      },
      error: (err) => console.log(err)
     })
    }
    else{
      this.service.createTelephone(this.telephone).subscribe({
      next:() =>{
          this.route.navigate(['/'])
      },
      error: (err) => console.log(err)
     })
    }
     
  }


  


}
