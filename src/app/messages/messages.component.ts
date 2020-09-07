import { Component, OnInit } from '@angular/core'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less'],
})
export class MessagesComponent implements OnInit {

  // 这个 messageService 属性必须是公共属性，因为你将会在模板中绑定到它
  // 换言之,私有属性无法在模板中使用
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
