import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:string[] = []

  // 消息添加的方法
  add(message: string) {
  this.messages.push(message);
  }

  // 消息清空的方法
  clear() {
    this.messages = []
  }

  constructor() { }
}
