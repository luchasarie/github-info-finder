import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minisearchbox',
  templateUrl: './minisearchbox.component.html',
  styleUrls: ['./minisearchbox.component.scss']
})
export class MinisearchboxComponent {
  Search:any;
  constructor(private router: Router) { }

  search() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/results/', this.Search]));
    //call the service and get the results
  }
}
