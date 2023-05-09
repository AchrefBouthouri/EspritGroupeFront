import { Component, OnInit } from '@angular/core';
import { ReclamationService } from './reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.reclamationService.getAllReclamation()
    .subscribe(response => {
      console.log('AllReclamations',response);
    }, () =>{
      console.error("Refused");
    }
    );
  }
}
