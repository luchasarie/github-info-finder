import { Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-repobox',
  templateUrl: './repobox.component.html',
  styleUrls: ['./repobox.component.scss']
})
export class RepoboxComponent {
  @Input() repoinfo: any;

  constructor(){}
  ngOnInit(): void {

  }
}
