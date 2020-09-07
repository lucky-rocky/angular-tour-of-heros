import { Injectable } from '@angular/core'
import { Hero } from './hero'
import { HeroesArray } from './mock-heroes'

// 模拟异步操作
import { Observable, of } from 'rxjs'

// 注入另一个服务
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root', // 用根注入器将你的服务注册成为提供者
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  // getHeroes(): Hero[] {
  //   return HeroesArray
  // }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes')
    return of(HeroesArray)
    // of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(HeroesArray.find((hero) => hero.id === id))
  }
}
