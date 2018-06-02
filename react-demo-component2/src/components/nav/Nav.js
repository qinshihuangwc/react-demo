/**
 * Created by x1c on 2018/5/26.
 */

import React,{Component} from 'react';

export default class Nav extends Component{
    render(){
        return (
            <div className="ui menu">
                <div className="item">Home</div>
                <div className="item">article</div>
                <div className="item">goods</div>
            </div>
        )
    }
}