import React from 'react'
import $ from 'jquery'
import Link from 'gatsby-link'

import logo from '../assets/codeline-white-think-big@0.5x.png';
import expert from '../assets/expert-30px.png';
import bracket from '../assets/bracket-100px.png';
import _keyskills from '../assets/keyskills-100px.png';
import _more from '../assets/more-100px.png';

import Skill from '../Components/Skill';

import TextField from 'material-ui/TextField';

// import {SectionsContainer, Section, ScrollToTopOnMount} from 'react-fullpage';

/*
<div className="container">
    <h1>CODELINE.co</h1>
    <h2>full-stack development</h2>
</div>
 */

const IndexPage = ({ data }) => {

    const { edges: skills } = data.allMarkdownRemark;

    const more = skills.filter(({node}) => {
        if(node.fields.slug.indexOf("more")<0) {
            return false
        }
        return true
    })

    const keyskills = skills.filter(({node}) => {
        if(node.fields.slug.indexOf("more")<0) {
            return true
        }
        return false
    })

    return (
    <div>

        <div className="flexView top">
            <div className="mainFlex logo"><img src={logo} alt="Logo" className="img-responsive" /></div>
            <div className="scroll">
                <div className='icon-scroll'></div>
            </div>
        </div>

        <div className="flexView hero">
            <div className="hidden-xs mainFlex rowFlex">
                <ul>
                    <li>Develop</li>
                    <li>Distribute</li>
                    <li>Monitor</li>
                    <li>Extend</li>
                    <li>Modernize</li>
                    <li>Secure</li>
                    <li>Manage</li>
                </ul>
                <div className="icon"><img src={bracket} /></div>
                <div><b>Software.</b> This is where I am an</div>
                <div className="icon"><img src={expert} /></div>
            </div>
            <div className="visible-xs text-center">
                <ul>
                    <li>Develop</li>
                    <li>Distribute</li>
                    <li>Monitor</li>
                    <li>Extend</li>
                    <li>Modernize</li>
                    <li>Secure</li>
                    <li>Manage</li>
                </ul>
                <img src={bracket} className="rotate90deg" />
                <div><b>Software.</b><br />This is where I am an <img src={expert} /></div>
            </div>
        </div>

        <div className="container broad hero">
            <div className="row">
                <div className="col-sm-6 text-big bb">
                    Entscheidend<br/>für deinen <span className="hero-text">Erfolg</span><br />sind deine <span className="hero-text">Handlungen</span>!
                </div>
                <div className="col-sm-6 bl">
                    Ansprechendes Design ist schön und gut. Für gelungene Kommunikation braucht es aber mehr. Als Multi-Channel-Werbeagentur mit mehr als 15 Jahren Erfahrung verbinden wir unseren Anspruch an gehobenes Design mit fundiertem Know-how für alle Kanäle und bieten Ihnen Online- und Offline Marketing-Konzepte, die alles abdecken, was Werbung zu bieten hat. Von der Kreation bis hin zur Positionierung Ihrer Marke.
                </div>
            </div>
        </div>

        <div className="skills">
            <div className="container">
                <h1 className="text-center">
                    <span className="hidden">Software Entwicklung</span>
                </h1>
                <div className="row gray">
                    {keyskills.map( ({ node }, key) => {
                        return <Skill number={key + 1} {...node} />
                    })}
                </div>
            </div>
        </div>

        <div className="skills more">
            <div className="container">
                <h1 className="text-center">
                    <span className="hidden">Marketing</span>
                </h1>
                <div className="row red">
                    {more.map( ({ node }, key) => {
                        return <Skill number={key + 1} {...node} />
                    })}
                </div>
            </div>
        </div>

        <div className="container" style={{padding: "50px"}}>
            <TextField
                label="With placeholder"
                placeholder="Placeholder"
                margin="normal"
            />
        </div>

    </div>
    )
}

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex:"/skills/i"}}) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        col
                    }
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 1000)
                }
            }
        }

    }

`

export default IndexPage
