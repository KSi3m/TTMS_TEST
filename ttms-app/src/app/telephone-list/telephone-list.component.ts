import { Component, OnInit } from '@angular/core';
import { Telephone } from '../Telephone';
import { Router } from '@angular/router';
import { TelephoneService } from '../telephone.service';

@Component({
  selector: 'app-telephone-list',
  standalone: true,
  imports: [],
  templateUrl: './telephone-list.component.html',
  styleUrl: './telephone-list.component.css'
})
export class TelephoneListComponent implements OnInit{

  telephones : Telephone[] = []

  constructor(private service:TelephoneService, private router: Router){}

  ngOnInit(): void {
    this.getTelephones();
  }


  getTelephones() :void {
    this.service.getTelephones().subscribe({
      next: (res) =>{
        this.telephones = res
      },
      error: (err) => console.log(err)
    })
  }

  deleteTelephone(id:number): void {

      this.service.deleteTelephone(id).subscribe({
        next: ()=>{
          this.telephones = this.telephones.filter(e => e.id !== id)
        },
        error: (err) => console.log(err)
      })

  }

  editTelephone(id:number): void {
     this.router.navigate(['/edit',id])
  }



}
