import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {


  // adresse de base de destination (app BE)
  matchUrl: string = "http://localhost:3000";


  // httpclient: bostagi , livreur
  // permet d'envoyer des requettes http vers un serveur (app BE)
  // fair rétourner des réponses http
  constructor(private httpClient: HttpClient) { }

  // Req1
  getAllMatch() {

    return this.httpClient.get(this.matchUrl);
  }

  // Req2
  getMatchById(id: number) {

    return this.httpClient.get(this.matchUrl + "/" + id)
  }
  // Req3
  deleteMatchById(id: number) {

    return this.httpClient.delete(this.matchUrl + "/" + id)

  }
  // Req4
  // match = {scoreone:2,scoreTwo:0,teamOn:"fcb",teamTwo "om"}
  addMatch(match: any) {

    return this.httpClient.post(this.matchUrl, match);

  }
  // Req5

  editMatch(newMatch: any) {

    return this.httpClient.put(this.matchUrl, newMatch);


  }






}
