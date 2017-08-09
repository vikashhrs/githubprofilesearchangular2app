import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService{
    private username:string;
    private clientid = "14adee0e5ce6c004a0ec";
    private clientsecret = "2b56eb363e8a90575fd1ef0238e6e646d42f247a"
    constructor(private _http:Http){
        console.log('GitHub Service Ready...');
        this.username = 'vikashhrs';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.clientid+"&client_secret="+this.clientsecret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos'+'?client_id='+this.clientid+"&client_secret="+this.clientsecret)
            .map(res => res.json());
    }
    
    updateUser(username: string){
        this.username = username;
    }
}
