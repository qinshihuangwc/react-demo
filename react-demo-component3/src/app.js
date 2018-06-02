import React,{Component} from 'react';
import ReactDOM from 'react-dom';

require('../semantic/dist/semantic.css');
require('./common/style/main.css');

import Nav from 'nav/Nav.js';
import CardWrap from 'cardWrapper/cardWrapper.js';
import Home from 'home/home';

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


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            view : 'home'
        }
        this.changeView = this.changeView.bind(this)
    }

    changeView(view){
        this.setState({
            view : view
        })
    }

    render(){

        let {view} = this.state;

        let {data} = this.props;

        let viewComp = null;

        switch (view) {
            case 'list':
                viewComp = <CardWrap data={data} />
                break;
            case 'home':
                viewComp = <Home />
            default:
        }


        return(
            <div className="ui container">
                <Nav changeView={this.changeView}/>
                {viewComp}
            </div>   
        )
    }
}

ReactDOM.render(
    <App data={data} />,
    document.getElementById('root')
);



if(module.hot){
    module.hot.accept()
}