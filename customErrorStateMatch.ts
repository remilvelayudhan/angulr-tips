import { AbstractControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";



export class CustomErrorStateMatcher implements ErrorStateMatcher{


  isErrorState(control: AbstractControl<any, any> | null, form: FormGroupDirective | NgForm | null): boolean {

    return !!(form && control && control?.invalid && (control.dirty || control.touched || form?.submitted));

  }

}


//  customErrorStateMatcher = new  CustomErrorStateMatcher()
