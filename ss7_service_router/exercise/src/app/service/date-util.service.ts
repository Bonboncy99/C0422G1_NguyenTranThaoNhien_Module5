import {Injectable} from '@angular/core';
import {addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears} from 'date-fns';
@Injectable({
  providedIn: 'root'
})
export class DateUtilService {
  getDiffToNow(diff: string | number | Date): string {
    const result: String[] = [];
    const now = new Date();
    diff = new Date(diff);
    const year = differenceInYears(now, diff);
    if (year > 0) {
      result.push(`${year} years`)
      diff = addYears(diff, year);
    }
    const months = differenceInMonths(now, diff);
    result.push(`${months} months`)
    if (months > 0) {
      diff = addMonths(diff, months);
    }
    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`)
    }
    return result.join(' ')
  }



  constructor() {
  }
}
