import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {
 imageIndex : number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
