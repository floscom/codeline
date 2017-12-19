import React, { Component } from 'react'

export default class Recommend extends Component {

    render() {

        var {
            title, childContentfulRecommendedImageTextNode, childContentfulRecommendedTagsTextNode, childContentfulRecommendedLinkTextNode
        } = this.props.node
        console.log("this.props", this.props)
        const image = childContentfulRecommendedImageTextNode.image
        const tags = childContentfulRecommendedTagsTextNode.tags
        const link = childContentfulRecommendedLinkTextNode.link

        return(
            <a href={link} target="_blank" className="recommend-item">
                <div className="image" style={{backgroundImage: `url(${image})`}}></div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{tags}</p>
                </div>
            </a>
        )
    }

}
