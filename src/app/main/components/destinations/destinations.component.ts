import { NgFor } from '@angular/common';
import { Component, HostListener, OnInit, signal } from '@angular/core';

interface Destinations {
  placeName: string,
  image: string
  description: string
  id: number,
  detailImg: string
}

interface Accardion extends Destinations {
  open: boolean,
  column: number
}

@Component({
  standalone: true,
  imports: [],
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  // #region destinationList
  destinationList: Destinations[] = [
    {
      placeName: 'ДУБАЙ',
      image: 'assets/images/dubai.png',
      description: `Город и эмират на побережье Персидского заливав Объединенных Арабских Эмиратах, который славится своими роскошными магазинами, ультрасовременной архитектурой, ресторанами и ночными клубами.Силуэт города формируют бесчисленные небоскребы,в том числе Бурдж- Халифа высотой 830 метров.У его основания расположен музыкальный фонтан "Дубай", подсвеченный прожекторами. На искусственном острове рядом с побережьем находится курорт Atlantis The Palm с аквапарком и парком морских животных.`,
      id: 0,
      detailImg: 'assets/images/dubai_desc.png'
    },
    {
      placeName: 'АНТАЛИЯ',
      image: 'assets/images/antalia.png',
      description: `Kурортный и 
портовый город  на юге Турции 
на берегу Средиземного  моря, административный 
центр провинций Анталья.Постоянное население
города — 1,5 миллиона человек при этом в летний 
период число  фактически находящихся в
городе людей может превышать 2 миллиона 
из-за Активного туристического
потока`,
      id: 1,
      detailImg: 'assets/images/antalia_desc.png'
    },
    {
      placeName: 'ТАИЛАНД',
      image: 'assets/images/tailand.png',
      description: `Oфициальное
название —  Короле́вство Таила́нд, до 193
9 и в 1945—1949 годах Сиам —государство
в Юго-Восточной-Азии расположен
ное в юго-западной части полуострова Индокитай 
и в северной части полуостров а Малакка.`,
      id: 2,
      detailImg: 'assets/images/tayland_desc.png'
    },
    {
      placeName: 'МАЛЬДИВЫ',
      image: 'assets/images/maldiviya.png',
      description: `
          Тропическое государство в Индийском океане, расположенное 
          на 26 кольцевидных атоллах, которые состоят из более чем
          тысячи коралловых островов. Оно славится своими пляжами,
          голубыми лагунами и огромными рифами. В столице страны 
          Мале стоит посетить оживленный рыбный рынок, 
          рестораны и магазины на главной дороге Меджеде-Магу,
          з также мечеть Хукуру-Миский
          (Пятничная мечеть), фундамент и стены которой украшены
          резьбой по белому кораллу.`,
      id: 3,
      detailImg: 'assets/images/maldiva_desc.png'
    },
    {
      placeName: 'ГОА',
      image: 'assets/images/goa.png',
      description: `
Хотя фраза "отдых на пляжах Индии"
может прозвучать как парадокс,  песчаное побережье 
Гоа просто создано для того, чтобы полежать 
на берегу моря. Устройтесь поудобнее 
в мягком кресле у закусочной на пляже и
посмакуйте блюдо, приправленное соусом карри, 
запивая его пивом "Кингфишер" и любуясь
тем, как солнце лениво ползет к горизонту. Собор
Бон-Жесус, расположенный в Старом Гоа, входит в 
список Всемирного Наследия ЮНЕСКО и является 
прекрасным примером барочной архитектуры.
`,
      id: 4,
      detailImg: 'assets/images/goa_desc.png'
    },
    {
      placeName: 'БАКУ',
      image: 'assets/images/baku.png',
      description: `
Исторический центр Баку напоминает о его
бурном прошлом — от периода, когда город 
был портом Великого шелкового пути, до нефтяного 
бума советских времен. Старый город представляет
собой лабиринт аллей, мечетей, исторических зданий и
остатков укреплений, включая дворец ширваншахов и
Девичью башню, которая теперь входит в список объектов 
Всемирного наследия ЮНЕСКО. Это не просто историческая
достопримечательность: город известен своим 
изобразительным искусством и культурными развлечениями
а также оживленным предпринимательским сектором.`,
      id: 5,
      detailImg: 'assets/images/baku_desc.png'
    },
    {
      placeName: 'ШАРМ-ЭШ-ШЕЙХ',
      image: 'assets/images/sharm-esh-shayx.png',
      description: `
Курортный город в Египте, расположенный между пустыней 
Синайского полуострова и Красным морем. Шарм-эль-Шейх
славится своими тихими песчаными пляжами, чистой водой
и коралловыми рифами. Среди туристов популярен залив 
Наама, вдоль которого тянется окаймленная пальмами 
набережная с множеством баров и ресторанов. 
Ещё одно известное место - парк Рас-Мохаммед, 
который особенно привлекает любителей дайвинга.
Здесь можно поплавать рядом с ватонувшим 
кораблем "Тистлегорм" и посмотреть на рифы Шарк и Иоланда.`,
      id: 6,
      detailImg: 'assets/images/sharm_desc.png'
    },
    {
      placeName: 'ИСТАНБУЛ',
      image: 'assets/images/istanbul.png',
      description: `Kрупнейший город Турции,
 экономический, исторический и культурный центр
страны. Является также центром 
Мраморноморского региона —  самого западного из 
географических cтраны..  Стамбул, где проживают 
свыше 15 млн человек, является одним 
из самых населённых городов мира.
В 1923 году, после Войны за независимость 
Турции новой столицей страны стала Анкара`,
      id: 7,
      detailImg: 'assets/images/istanbul_desc.png'
    },
    {
      placeName: 'ГРУЗИЯ',
      image: 'assets/images/gruziya.png',
      description: `Государство, расположенное в западной 
частиЗакавказья навосточном побережье Чёрного 
моря. Относится к Восточной Европе и  Передней
Азии;Население, по итогам официальнойпереписи
2014 года, составляет 3 7138 04 человека
(по оценочным данным  на начало 
2023 года — 3 736 400 человека  территория — 69 700км².
Занимает130-е место в мире по численности
населения и  119-е по территории. Столица —Тбилиси.`,
      id: 8,
      detailImg: 'assets/images/gruziya_desc.png'
    },
  ]
  // #endregion

  isMobile = signal(false)
  accardion: any[] = [];
  activeAccardion: Record<string, boolean> = {
  }
  activeAccardionList: Accardion[] = []
  columnCount = this.isMobile() ? 2 : 3

  constructor() {
    if (window.innerWidth < 700) {
      this.destinationList.pop()
    }
    this.isMobile.set(window.innerWidth < 700)
    this.columnCount = this.isMobile() ? 2 : 3
  }

  ngOnInit() {
    this.handleAccardionShowing()
  }

  getDescriptionData(column: number) {
    return this.activeAccardionList.find(act => act.column == column)
  }
  handleAccardionShowing() {
    let arr: any = [];
    this.destinationList.forEach((description, index) => {
      let obj: Accardion = {
        open: false,
        id: description.id,
        column: this.getArrayIndexOfAccardion(index),
        placeName: description.placeName,
        detailImg: description.detailImg,
        description: description.description,
        image: description.image
      }

      if (!(description.id in this.activeAccardion)) {
        this.activeAccardion[description.id] = false
      }

      arr.push(obj)
      if (arr.length === this.columnCount) {
        this.accardion.push(arr)
        arr = [];
      }
    })
  }

  getArrayIndexOfAccardion(index: number): number {
    return Math.ceil(Math.floor((index + 1)) / this.columnCount)
  }

  showDescription(id: number): void {
    if (this.accardion.length) {
      for (let acc of this.accardion[this.getArrayIndexOfAccardion(id) - 1]) {
        if (id == acc.id) {
          acc.open = !acc.open;
          if (acc.id in this.activeAccardion) {
            this.activeAccardion[acc.id] = !this.activeAccardion[acc.id]
          }
          if (this.activeAccardionList.length && this.activeAccardionList.find((ac) => ac.column == acc.column)) {
            this.activeAccardionList = this.activeAccardionList.filter((ac) => ac.column != acc.column);
            this.activeAccardionList.push(acc)
          } else {
            this.activeAccardionList.push(acc)
          }
        } else {
          acc.open = false
          if (acc.id in this.activeAccardion) {
            this.activeAccardion[acc.id] = false
          }
        }
      }
    }
  }

  getOpenedCardId(id: number) {
    for (let acc of this.accardion[this.getArrayIndexOfAccardion(id) - 1]) {
      if (acc.open) {
        return acc.id
      }
    }

  }

}
