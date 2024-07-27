/**
 * Общий компонент для навигации и поиска.
 */

import React from 'react';
import { Menu } from './Menu';
import { dataMenu } from '../data/data';

export const SearchBar: React.FC = () => {
    return (
        <>
            <Menu items = {dataMenu} />
                        
            <div className="search-bar">
            <input type="text" placeholder="Поиск..." />
            <button>Найти</button>
            </div>
        </>
        
    );
};