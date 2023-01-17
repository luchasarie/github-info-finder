import { A11yModule } from '@angular/cdk/a11y';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userbox',
  templateUrl: './userbox.component.html',
  styleUrls: ['./userbox.component.scss']
})
export class UserboxComponent implements OnInit{
  @Input() userinfos: any;

  constructor(){}
  ngOnInit(): void {
    document.body.style.backgroundPosition = "bottom";
    document.body.style.backgroundSize = "cover";
  }

}
