import React from 'react';
import ReactDOM from 'react-dom';

require('./common/style/main.css');


ReactDOM.render(
    <div style={{color:"red"}}>Hello World good-name</div>,
    document.getElementById('root')
);



if(module.hot){
    module.hot.accept()
}