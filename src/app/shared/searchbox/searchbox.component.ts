import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
  Search:any;
  constructor(private router: Router) { }

  search2() {
    this.router.navigate(['/results/', this.Search]);
    //call the service and get the results
  }
}
