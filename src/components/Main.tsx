/**
 * Общий компонент для виджетов внизу страницы.
 */

import React from 'react';
import { Widget } from './Widget';
import { data } from '../data/data.ts'

export const Main: React.FC = () => {
    return (
        <>
            <div className="main-content">
                <div className='banner-container'>
                    <img src="https://mgoprof.ru/wp-content/uploads/2020/05/news-pic-95.jpg" className='banner-img'></img>
                </div>
                <Widget items={ data }/>
            </div>
        </>
    );
};


