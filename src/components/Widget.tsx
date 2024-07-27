/**
 * Компонент для формирования виджета.
 */

import { FC } from 'react'
import { IWidgets } from '../models/IWidgets';
import { Widgets } from './Widgets';


interface ListData {
    items: IWidgets[]
}

export const Widget: FC<ListData> = (data) => {
    const { items } = data
   
  return (
    <div className='widget'>
        <h3>Посещаемое</h3>
        <ul>
            {items.map(item => <Widgets key={item.title} {...item} />)}
        </ul>
    </div>
  )
}