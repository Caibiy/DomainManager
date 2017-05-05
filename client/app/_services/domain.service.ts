import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class DomainService {
    constructor(private http:Http){

    }
    addDomain(domain){
        var header=new Headers();
        header.append('Content-Type','application/json');
        return this.http.post('/api/domain/new',domain,header).map(res=>res.json());
    }
    getDomains(id){
        var header =new Headers();
        header.append('Content-Type','applicaion/json');
        const idPar={
            id:id
        }
        return this.http.post('/api/domain/domains',idPar,header).map(res=>res.json());
    }
    
}