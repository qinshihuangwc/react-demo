/**
 * Created by x1c on 2018/5/28.
 */
import React,{Component} from 'react';
import Comment from 'Comment/Comment';

import TimeHeader from '../TimeHeader/TimeHeader';

export default class CommentBox extends Component{
    render(){

        // let {data} = this.props;
        //
        // let commentItem = data.map( (elt,i) => {
        //     return (<Comment {...elt} key={i}/>)
        // });
        //
        // return (
        //     <div>
        //         {commentItem}
        //     </div>
        // )

        let array = [],
            lastDate = null;

        let {data} = this.props;



        data.forEach( (comment,i) => {
            let {date,time,name,content,avatar,subComment} = comment;
            if(lastDate !== date){

                array.push(<TimeHeader date={date}/>)
            }
            array.push(<Comment {...comment}/>);
            lastDate = date;
        });
        console.log(array)

        return(
            <div className="ui grid container centered">
                <div className="ui nine wide column">
                    <div className="ui comments">
                        <h1 className="ui dividing header">Comments</h1>
                        {array}
                    </div>
                </div>
            </div>
        )
    }
}