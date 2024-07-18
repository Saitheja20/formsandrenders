import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormDataService {

private formdataSubject=new BehaviorSubject<any>({
  familyId:null,
  personId:null,
  firstName:null,
  lastName:null,
  homePhone:null
});

formData$= this.formdataSubject.asObservable();

  UpdateFormdata(formdata:any){
this.formdataSubject.next(formdata);
  }
}
