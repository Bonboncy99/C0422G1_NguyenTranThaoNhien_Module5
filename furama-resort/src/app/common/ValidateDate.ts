import {AbstractControl, ValidationErrors} from '@angular/forms';

export function checkAge(control: AbstractControl): ValidationErrors | null {
  const yearOfBirth = Math.floor(new Date(control.value).getFullYear());
  const now = Math.floor(new Date().getFullYear());
  const age = now - yearOfBirth;
  return (age < 18 || age > 100) ? {ageValid: true} : null;
}
export function checkDateStart(contractDate: AbstractControl) {
  const now = new Date();

  const dateStart = new Date(contractDate.value);
  return dateDiff(dateStart, now) > 0 ? null : {dateStartError: true};
}

export function checkDateStop(contractDate: AbstractControl) {
  const now = new Date();
  const dateStop = new Date(contractDate.value);
  return dateDiff(dateStop, now) > 0 ? null : {dateStopError: true};
}

export function checkDate(contractDate: AbstractControl) {
  const dateStart = new Date(contractDate.value.startDate);

  const dateStop = new Date(contractDate.value.endDate);
  return dateDiff(dateStart, dateStop) > 0 ? null : {dateContractError: true};
}

function dateDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
