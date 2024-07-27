/**
 * Компонент для формирования списка новостей.
 */

import { FC } from 'react'
import { INews } from '../models/INews';
import { News } from './News.tsx';


interface ListData {
    items: INews[]
}

export const Headline: FC<ListData> = (data) => {
    const { items } =data
   
  return (
    <div className='headline'>
        <ul>
            {items.map(item => <News key={item.title} {...item} />)}
        </ul>
    </div>
  )
}
