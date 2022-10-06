import {FormControl, ValidationErrors} from "@angular/forms";

export function checkHour(control: FormControl): ValidationErrors | null {
  let time = control.value;
  let timeCheck: string[] = time.split(':');
  return ( +timeCheck[0]< 4 || +timeCheck[0] > 22)? {timeCheck:true}:null;
}


// import {AbstractControl, ValidationErrors} from "@angular/forms";
//
// export function validatorAge(control: AbstractControl): ValidationErrors | null {
//   const dateValue = new Date(control.value);
//   const dateNow = Math.floor(new Date().getFullYear());
//   const dateOfBirth = Math.floor(dateValue.getFullYear());
//   if (((dateNow - dateOfBirth) < 18) || ((dateNow - dateOfBirth) > 100)) {
//     return {dateOfBirth: true};
//   }
//   return null;
// }
