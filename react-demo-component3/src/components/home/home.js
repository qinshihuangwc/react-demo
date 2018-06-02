import React,{Component} from 'react';

export default class Home extends Component{
	render(){
		return (
			<div>
				<img className="ui fluid image "
                src={require('img/molly.png')}
                alt=""/>
			</div>
		)
	}
}