/**
 * Файл данных.
 */

import { IWidgets } from '../models/IWidgets';
import { INews } from '../models/INews';
import { IMenuItem } from '../models/IMenuItem';

export const data: IWidgets[] = [
    {title: 'Недвижимость', article: 'о сталинках',},
    {title: 'Маркет', article: 'люстры и светильники',},
    {title: 'Авто.ру', article: 'привод 4х4 до 500 000',}
]

export const dataNews: INews[] = [
    {icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfG-47LWosOrVZayxHbVkBjsxaH-m0FzejVw&s', title: 'Новость №1', link: '#',},
    {icon: 'https://dpage.ru/media/k2/items/cache/c9b002fe1bb0320831a8ae78670fdb6f_L.jpg', title: 'Новость №2', link: '#',},
    {icon: 'https://kassa.bifit.com/wiki/images/1/1b/%D0%9F%D0%BE%D1%87%D1%82%D0%B0_%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0.png', title: 'Новость №3', link: '#',}
]

export const dataMenu: IMenuItem[] = [
    {title: 'Поиск', link: '#',},
    {title: 'Новости', link: '#',},
    {title: 'Картинки', link: '#',}
]