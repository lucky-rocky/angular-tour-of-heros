import { Component, OnInit } from '@angular/core'

// 导入英雄类
import { Hero } from '../hero'

// 导入mock
// import { HeroesArray } from '../mock-heroes'

// 导入处理数据,逻辑的hero.service服务
import { HeroService } from '../hero.service'

// 导入 messageService服务
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less'],
})
export class HerosComponent implements OnInit {
  // 暴露HeroesArray
  // heroes = HeroesArray

  // 简单定义一下,数据从服务中来
  heroes: Hero[]

  // selectedHero: Hero

  // 注入 HeroService服务,需要往构造函数的参数中添加一个私有的HeroService
  // 服务注入就用不到new实例出来了
  // 这个参数同时做了两件事：1. 声明了一个私有 heroService 属性，2. 把它标记为一个 HeroService 的注入点。
  // 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // 生命周期中调用获取数据的方法,即初始化
    this.getHeroes()
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero
  //   // 点击英雄时,添加额外消息
  //   this.messageService.add(`you clicked the hero ${hero.name}`)
  // }

  // 从服务中拿到获取数据
  // getHeroes(): Hero[] {
  //   return (this.heroes = this.heroService.getHeroes())
  // }

  getHeroes(): void {
    // this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes))
    this.heroService.getHeroes().subscribe((heros) => (this.heroes = heros))
  }
}
