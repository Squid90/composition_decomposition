/**
 * Компонент для формирования элемента навигации.
 */

import React from 'react'
import { IMenuItem } from '../models/IMenuItem';

export const MenuItem: React.FC<IMenuItem> = (item) => {
    const {title, link} = item
  return (
    <li>
        <a href={link}>{title}</a>
    </li>
  )
}