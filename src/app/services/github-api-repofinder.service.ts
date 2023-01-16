import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiRepofinderService {

  constructor(private http: HttpClient) {}
  getData(id: any) {
    return this.http.get(`https://api.github.com/users/${id}/repos`)
  }
}
