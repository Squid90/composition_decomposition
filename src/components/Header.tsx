/**
 * Общий компонент для заголовка новостей.
 */

import React from 'react';
import { Headline } from './Headline';
import { dataNews } from '../data/data.ts'

export const Header: React.FC = () => {
    return (
        <header>
            <Headline items = { dataNews }/>
        </header>
    );
};

