import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable()
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product) {
    console.log(product)
    this.subject.next(product) // this means we are triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }

}
