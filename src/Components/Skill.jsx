import React, { Component } from 'react'

export default class Skill extends Component {

    render() {

        const {
            number, excerpt, frontmatter
        } = this.props

        var {
            title, col
        } = frontmatter

        if(col===undefined) {
            col = 6
        }

        return(
            <div className={"col-xs-12 col-sm-"+col+" skill color"+number}>
                <div className="row">
                    <div className="col-xs-2">icon</div>
                    <div className="col-xs-10">
                        <h2>{title}</h2>
                        <p>{excerpt}</p>
                    </div>
                </div>
            </div>
        )
    }

}
