/**
 * Created by x1c on 2018/5/28.
 */
import React,{Component} from 'react';

export default class Comment extends Component{
    render(){
        let {data,time,name,content,avatar,subComment} = this.props;

        return (
            <div className="comment">
                <a className="avatar">
                    <img src={avatar} />
                </a>
                <div className="content">
                    <a className="author">Matt</a>
                    <div className="metadata">
                        <span className="date">今天下午 5:42</span>
                    </div>
                    <div className="text">太赞了！ </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                </div>
                {subComment ? (
                    subComment.map((elt,i) => {
                        return <Comment {...elt}/>
                    })
                ): (null)}
            </div>
        )
    }
}