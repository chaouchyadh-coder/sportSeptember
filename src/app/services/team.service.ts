import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  
    // adresse de base de destination (app BE)
    teamUrl: string = "http://localhost:3000";
  
  
    // httpclient: bostagi , livreur
    // permet d'envoyer des requettes http vers un serveur (app BE)
    // fair rétourner des réponses http

    constructor(private httpClient: HttpClient) { }
  
    // Req1
    getAllteam() {
      
      return this.httpClient.get(this.teamUrl);
    }
  
    // Req2
    getteamById(id: number) {
  
      return this.httpClient.get(this.teamUrl + "/" + id)
    }
    // Req3
    deleteteamById(id: number) {
  
      return this.httpClient.delete(this.teamUrl + "/" + id)
  
    }
    // Req4
    // team = {scoreone:2,scoreTwo:0,teamOn:"fcb",teamTwo "om"}
    addteam(team: any) {
  
      return this.httpClient.post(this.teamUrl, team);
  
    }
    // Req5
  
    editteam(newteam: any) {
  
      return this.httpClient.put(this.teamUrl, newteam);
  
  
    }
  





}
