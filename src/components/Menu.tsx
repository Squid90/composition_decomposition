/**
 * Компонент для формирования списка навигации.
 */

import { FC } from 'react'
import { IMenuItem } from '../models/IMenuItem';
import { MenuItem } from './MenuItem.tsx';


interface ListData {
    items: IMenuItem[]
}

export const Menu: FC<ListData> = (data) => {
    const { items } =data
   
  return (
    <nav>
        <ul className="nav-list">
            {items.map(item => <MenuItem key={item.title} {...item} />)}
        </ul>
    </nav>
  )
}
