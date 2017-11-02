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
                <h2>{title}</h2>
                <p>{excerpt}</p>
            </div>
        )
    }

}
