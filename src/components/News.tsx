/**
 * Компонент для формирования конкретной новости.
 */

import React from 'react'
import { INews } from '../models/INews';


export const News: React.FC<INews> = (item) => {
    const {icon, title, link} = item
  return (
    <li>
        <img className='icon' src={icon}/>
        <a href={link}>{title}</a>
    </li>
  )
}