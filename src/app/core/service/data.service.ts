/**
 * Created by goran.pavlovski on 11/10/2016.
 */


import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {IUsers} from "../../shared/interfaces";
import {Observable} from "rxjs";
import 'rxjs/Rx'

@Injectable()
export class DataService{

    usersUrl:string = 'http://localhost:3000/users';
    users: IUsers[];

    constructor(private http: Http){}

    getUsers(): Observable<IUsers[]>{
        return this.http.get(this.usersUrl)
            .map((res: Response) => {
                this.users = res.json();
                return this.users;
            })
            .catch(this.handleError);
    }

    getUser(id: number): Observable<IUsers>{

        return this.http.get(this.usersUrl + '/' + id)
            .map((res: Response) => res.json())

    }

    updateUser(user: IUsers): Observable<boolean>{
        return this.http.put(this.usersUrl + '/' + user.id, user)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    addUser (body: Object): Observable<IUsers[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.usersUrl, body, options) // ...using post request
            .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    public deleteUser = (id: number): Observable<Response> => {
        return this.http.delete(this.usersUrl + '/' + id)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch(err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }


}
