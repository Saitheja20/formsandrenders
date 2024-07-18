import { Router } from '@angular/router';
import { Component , Output, EventEmitter} from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../form-data.service';
// import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
@Component({
  selector: 'app-searchform',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './searchform.component.html',
  styleUrl: './searchform.component.css'
})
export class SearchformComponent {
  @Output() formdata=new EventEmitter<any>();
  form:FormGroup;
familyId="";
personId="";
firstName="";
lastName="";
homePhone="";
  constructor(private fb: FormBuilder, private formDataService: FormDataService, private router:Router) {
    this.form = this.fb.group({
      familyId: [''],
      personId: [''],
      firstName: [''],
      lastName: [''],
      homePhone: ['']
    });
  }

submit(){

  const formValues = this.form.value;
  this.formdata.emit(formValues);
  this.formDataService.UpdateFormdata(this.form.value);
  this.familyId=this.form.value.familyId;
  this.personId=formValues.personId;
  this.firstName=formValues.firstName;
  this.lastName=formValues.lastName;
  this.homePhone=formValues.homePhone;
  console.log("the form is submitted"+"form was submitted successfully"+"\n and the data is"+" family id"+this.familyId+"person Id"+this.personId+" firstname "+
    this.firstName+" last name "+this.lastName+" homephone "+this.homePhone+" .");
  alert("form was submitted successfully"+"\n and the data is"+" family id"+this.familyId+"person Id"+this.personId+" firstname "+
    this.firstName+" last name "+this.lastName+" homephone "+this.homePhone+" ."
  );

  this.router.navigate(['resulttable']);


}
}
