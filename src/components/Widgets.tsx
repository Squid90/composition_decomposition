/**
 * Компонент для формирования элементов в виджете.
 */

import React from 'react'
import { IWidgets } from '../models/IWidgets';


export const Widgets: React.FC<IWidgets> = (item) => {
    const {title, article} = item
  return (
    <li><b>{title}</b> - {article}</li>
  )
}
