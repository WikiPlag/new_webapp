import {Injectable} from "@angular/core"
import {Http} from "@angular/http"
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService {
  constructor(private http: Http){
    console.log("init...")
  }

  getPosts(){
    return this.http.get('http://localhost:3004/posts')
      .map(res => res.json());
  }
}
