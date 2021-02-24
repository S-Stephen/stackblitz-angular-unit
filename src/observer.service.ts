import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

/**
 * The sole pupose of this service
 * is to provide an Observable we
 * can use to investigate how to
 * spy with it in a test
 */
@Injectable()
export class ObserverService {
  
  private mySubject = new BehaviorSubject<number>(1);

  get myObs$() {
    return this.mySubject.asObservable();
  }
  constructor() {}
}
