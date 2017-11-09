import React, { Component } from 'react'

export default class Skill extends Component {

    render() {

        const {
            title, text, number, icon
        } = this.props

        var {
            cols
        } = this.props

        if(cols===undefined) {
            cols = 6
        }

        return(
            <div className={"col-xs-12 col-sm-"+cols+" skill color"+number}>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>{title}</h2>
                        <p>{text.text}</p>
                    </div>
                </div>
            </div>
        )
    }

}
