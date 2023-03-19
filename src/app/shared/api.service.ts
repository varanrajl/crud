import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from  '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  noapiurl="http://localhost:3400";
  constructor(private http: HttpClient) { }

  postEmployee(data:any){
   return this.http.post<any>("http://localhost:3000/posts",data)
     .pipe(map((res:any)=>{
      return res;
     }))
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res:any)=>{
       return res;
      }))
   }

   updateEmployee(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
      .pipe(map((res:any)=>{
       return res;
      }))
   }

   deleteEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
       return res;
      }))
   }

   postdata(data:any){
    const header={headers:new HttpHeaders({'content-type':'application/json'})};
    return this.http.post(this.noapiurl+'/api/Employee/create',data,header)
   }

   getdata(){
    return this.http.get(this.noapiurl+'/api/Employee/retrieve');
   }
   deletedata(id:any){
    const header={headers:new HttpHeaders({'content-type':'application/json'}),
     body:{_id:id}
  };
    return this.http.delete(this.noapiurl+'/api/Employee/delete',header);
  }
  /* UpdateProducts(data :any,id:number){
    const header={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<any>(this.noapiurl+'/api/Employee/update',data,header);
  }
 */
Updateproducts(data:any,id:any){
  const header={headers:new HttpHeaders({'Content-Type':'application/json'})};
  return this.http.put<any>(this.noapiurl+'/api/Employee/update',data,header)
}

}
