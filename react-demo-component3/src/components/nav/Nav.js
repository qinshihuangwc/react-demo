/**
 * Created by x1c on 2018/5/26.
 */

import React,{Component} from 'react';

export default class Nav extends Component{
    render(){

    	console.log(this.props)
    	let {changeView} = this.props;

        return (
            <div className="ui menu">
                <div className="item" 
                	onClick = { () => {
                		changeView('home')	
                	}
                }
	                >Home
	            </div>
                <div className="item" 
	                onClick = { () => {
	                		changeView('list')	
	                	}
	                }
	                >List
	            </div>
                <div className="item">Other</div>
            </div>
        )
    }
}