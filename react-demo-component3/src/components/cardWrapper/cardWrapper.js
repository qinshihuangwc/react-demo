/**
 * Created by x1c on 2018/5/26.
 */

import React,{Component} from 'react';
import Card from 'card/card';

/*let data = [
    {
        imgsrc : require('img/matthew.png'),
        name : 'Matter',
        meta : 'friends',
        description : 'Matter is an art director living in New York.',
        joined : '2011',
        num : 300
    },
    {
        imgsrc : require('img/elyse.png'),
        name : 'Jenny Hess',
        meta : 'friends',
        description : 'Jenny Hess is an art director living in New York.',
        joined : '2011',
        num : 389
    },
    {
        imgsrc : require('img/molly.png'),
        name : 'Elyse',
        meta : 'friends',
        description : 'Elyse is an art director living in New York.',
        joined : '2011',
        num : 240
    }
]*/

export default class CardWrap extends Component{
    render(){

        let {data} = this.props;

        let cards = data.map( (elt,i) => {
            return (<Card {...elt} key={i}/>)
        })

        return (
            <div className="ui cards">
                {cards}
            </div>
        )
    }
}