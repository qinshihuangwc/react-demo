import React,{Component} from 'react';
import ReactDOM from 'react-dom';

require('../semantic/dist/semantic.css');
require('./common/style/main.css');

import Nav from 'nav/Nav.js';
import CardWrap from 'cardWrapper/cardWrapper.js';

let data = [
    {
        imgsrc : require('img/matthew.png'),
        name : 'Matter',
        meta : 'friends',
        description : 'Matter is an art director living in New York.',
        joined : 2011,
        num : 300
    },
    {
        imgsrc : require('img/elyse.png'),
        name : 'Jenny Hess',
        meta : 'friends',
        description : 'Jenny Hess is an art director living in New York.',
        joined : 2011,
        num : 389
    },
    {
        imgsrc : require('img/molly.png'),
        name : 'Elyse',
        meta : 'friends',
        description : 'Elyse is an art director living in New York.',
        joined : 2011,
        num : 240
    }
]


ReactDOM.render(
    <div className="ui container">
        <Nav/>
        <CardWrap data={data}/>
    </div>,
    document.getElementById('root')
);



if(module.hot){
    module.hot.accept()
}