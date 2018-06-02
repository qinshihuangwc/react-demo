import React,{Component} from 'react';

export default class TimeHeader extends Component{
    render(){
        let {date} = this.props;
        return(
            <h3 className="ui dividing header">
                {date}
            </h3>
        )
    }
}


