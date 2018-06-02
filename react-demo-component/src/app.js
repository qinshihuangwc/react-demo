import React,{Component} from 'react';
import ReactDOM from 'react-dom';

require('../semantic/dist/semantic.css');
require('./common/style/main.css');


class Nav extends Component{
    render(){
        return (
            <div className="ui menu">
                <div className="item">Noods</div>
                <div className="item">Home</div>
                <div className="item">List</div>
            </div>
        )
    }
}

class CommentWrap extends Component{
    render(){
        return (
            <div className="CommentWrap">
                <h2>评论列表</h2>
                <CommentDate />
            </div>
        )
    }
}
class CommentDate extends Component{
    render(){
        return (
            <div>
                <h4>2018-5-25</h4>
                <CommentItem />
            </div>
        )
    }
}

class CommentItem extends Component{
    render(){
        return(
            <div>
                <span>avatar</span>
                <span>name</span>
                <span>content</span>
            </div>
        )
    }
}

ReactDOM.render(
    <div className="ui container">
        <Nav/>
        <p>Hello World good-name</p>
        <CommentWrap />
    </div>,
    document.getElementById('root')
);



if(module.hot){
    module.hot.accept()
}