import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiRepofinderService } from 'src/app/services/github-api-repofinder.service';
import { GithubApiService } from '../../services/github-api.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  id: any = [];
  results: any = [];
  reposresults: any = [];
  constructor(private route: ActivatedRoute, private gitresults: GithubApiService, private gitreporesults: GithubApiRepofinderService) {}
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.id = id
    })
    this.gitresults.getData(this.id).subscribe((response)=>{
      this.results = response;
    });
    this.gitreporesults.getData(this.id).subscribe((response2)=>{
      this.reposresults=response2;
    });
  }
}
