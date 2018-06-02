import React,{Component} from 'react';
import ReactDOM from 'react-dom';


require('../semantic/dist/semantic.css');
require('./common/style/main.css');

import Nav from 'nav/Nav.js';
import CommentBox from 'CommentBox/CommentBox';

let data = [
    {date: '今天', time: '11:20', name: 'Matt', content: '你好', avatar: require("img/matt.jpg")},
    {
        date: '今天', time: '11:20', name: 'Jenny', content: '你好', avatar: require("img/molly.jpg"),
        subComment: [
            { time: '11:20',name: 'Sal', content: '你好', avatar: require("img/molly.jpg")},
            { time: '11:20',name: 'Jenny', content: '你好', avatar: require("img/jenny.jpg")},
            { time: '11:20',name: 'Elliot', content: '你好', avatar: require("img/elliot.jpg")},
            { time: '11:20',name: 'Molly', content: '你好', avatar: require("img/molly.jpg")}
        ]
    },
    {date: '今天', time: '11:20', name: 'Molly', content: '你好', avatar: require("img/molly.jpg")},
    {date: '今天', time: '11:20', name: 'Elliot', content: '你好', avatar: require("img/matt.jpg")},
    {date: '昨天', time: '11:20', name: 'Sal', content: '你好', avatar: require("img/molly.jpg")},
    {date: '昨天', time: '11:20', name: 'Mike', content: '你好', avatar: require("img/matt.jpg")},
    {date: '前天', time: '11:20', name: 'Sal', content: '你好', avatar: require("img/molly.jpg")},
    {
        date: '前天', time: '11:20', name: 'Hurley', content: '你好', avatar: require("img/matt.jpg"),
        subComment: [
            {
                time: '11:20',name: 'Sal', content: '你好', avatar: require("img/molly.jpg"),
                subComment: [
                    {
                        time: '11:20',name: 'Sal', content: '你好', avatar: require("img/molly.jpg"),
                        subComment: [
                            { time: '11:20',name: 'Molly', content: '你好', avatar: require("img/molly.jpg")}
                        ]
                    },
                    { time: '11:20',name: 'Jenny', content: '你好', avatar: require("img/jenny.jpg")},
                    { time: '11:20',name: 'Elliot', content: '你好', avatar: require("img/elliot.jpg")},
                    { time: '11:20',name: 'Molly', content: '你好', avatar: require("img/molly.jpg")}
                ]
            }
        ]
    },
    {date: '前天',  time: '11:20', name: 'Ben', content: '你好', avatar: require("img/matt.jpg")},
    {date: '前天',  time: '11:20', name: 'Jane', content: '你好', avatar: require("img/molly.jpg")}
];

ReactDOM.render(
    <div className="ui container">
        <Nav />
        <CommentBox data={data} />
    </div>,
    document.getElementById('root')
);



if(module.hot){
    module.hot.accept()
}