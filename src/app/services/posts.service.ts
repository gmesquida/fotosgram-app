import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ResppuestaPosts } from '../intefaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;

  constructor( private http: HttpClient) { }

  getPosts(pull: boolean = false){
    if (pull){
      this.paginaPosts = 1;
    } else {
      this.paginaPosts ++;
    }
    return this.http.get<ResppuestaPosts>(`${URL}/posts/?pagina=${this.paginaPosts}`)
  }
}
