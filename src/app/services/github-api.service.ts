import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  constructor(private http: HttpClient) {}
  getData(id: string) {
    return this.http.get(`https://api.github.com/users/${id}`)
  }
}
