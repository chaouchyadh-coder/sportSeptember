import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TeamsComponent } from './components/teams/teams.component';

export const routes: Routes = [
 // http://localhost:4200 => home components will be displayed
{path:"",component:HomeComponent},
// http://localhost:4200/signin => login components will be displayed
{path:"signin",component:LoginComponent},
// http://localhost:4200/inscription => signup components will be displayed
{path:"inscription",component:SignupComponent},
// http://localhost:4200/admin => admin components will be displayed
{path:"admin",component:AdminComponent},
{path:"addMatch",component:AddMatchComponent},
{path:"addplayer",component:AddPlayerComponent},
{path:"addTeam",component:AddTeamComponent},
{path:"matches",component:MatchesComponent},
{path:"Teams",component:TeamsComponent}

];
