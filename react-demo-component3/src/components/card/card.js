/**
 * Created by x1c on 2018/5/26.
 */

/*import React,{Component, propTypes} from 'react';

let propTypes = {
    imgsrc:propTypes.string,
    joined:propTypes.number
}*/

import React,{Component} from 'react';

import PropTypes from 'prop-types'

let propTypes = {
    imgsrc:PropTypes.string,
    joined:PropTypes.number
}

export default class Card extends Component{

    constructor(props){
        super(props);
        this.state = {
            isHeaderON : false,
            year : props.joined
        }
    }

    render(){

        let {imgsrc, name, meta, description, joined, num} = this.props;

        let {isHeaderON} = this.state;

        let headerClass = isHeaderON ? '' : 'empty'

        return (
            <div className="card">
                <div className="image">
                    <img src={imgsrc} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a>{meta}</a>
                    </div>
                    <div className="description">{description}</div>
                </div>
                <div className="extra content">
                    <span className="right floated">{`join in ${joined}`}</span>
                    <span>
                        <i 
                            className={`${headerClass} heart icon`}
                            onClick = {() => {
                                let {isHeaderON} = this.state;

                                console.log(isHeaderON)

                                isHeaderON = !isHeaderON;

                                this.setState({
                                    isHeaderON : isHeaderON
                                })
                            }}
                            >
                        </i> 
                        {num} Friends 
                    </span>
                </div>
            </div>
        )
    }
}

Card.propTypes = propTypes;