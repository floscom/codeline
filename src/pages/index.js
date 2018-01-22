import React from 'react'
import $ from 'jquery'
import Link from 'gatsby-link'

import logo from '../assets/codeline-white-think-big@0.5x.png';
import expert from '../assets/w-expert-30px.png';
import bracket from '../assets/w-bracket-100px.png';

import _video from '../assets/video_preview_h264.mp4';

import Skill from '../Components/Skill';
import "material-design-icons";

import RequestForm from '../Components/RequestForm';
import Recommend from '../Components/Recommend';

// import {SectionsContainer, Section, ScrollToTopOnMount} from 'react-fullpage';

/*
<div className="container">
    <h1>CODELINE.co</h1>
    <h2>full-stack development</h2>
</div>
 */

const IndexPage = ({ data }) => {

    var skills = {
        key: [],
        more: []
    }

    data.allContentfulSkillContainer.edges.forEach((item) => {
        var node = item.node
        if(node.title === "Key Skills") {
            console.log("node.skills", node.skills)
            skills.key = node.skills
        }
        if(node.title === "More Skills") {
            skills.more = node.skills
        }
    })

    console.log("data", data)
    //const recommend = data.allContentfulRecommended.edges
    const logos = data.allContentfulGallery.edges[0].node.images

    //console.log("logos", logos)

    return (
    <div>

        <div className="flexView top">
            <div className="mainFlex logo"><img src={logo} alt="Logo" className="img-responsive" /></div>
            <div className="scroll">
                <div className='icon-scroll'></div>
            </div>
        </div>

        <div className="flexView hero">

            <div className="video-container">
                <div className="overlay"></div>
                <video poster={_video} id="bgvid" playsInline autoPlay muted loop>
                    <source src={_video} type="video/mp4" />
                </video>
            </div>

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
                <div className="col-sm-6">
                    <p className="bl">
                        Ansprechendes Design ist schön und gut. Für gelungene Kommunikation braucht es aber mehr. Als Multi-Channel-Werbeagentur mit mehr als 15 Jahren Erfahrung verbinden wir unseren Anspruch an gehobenes Design mit fundiertem Know-how für alle Kanäle und bieten Ihnen Online- und Offline Marketing-Konzepte, die alles abdecken, was Werbung zu bieten hat. Von der Kreation bis hin zur Positionierung Ihrer Marke.
                    </p>
                    <p className="bl">
                        lorem
                    </p>
                </div>
            </div>
        </div>

        <div className="">
            <h2 className="logo-header">
                Ein Auszug meines <span className="hero-text">#Erfolges</span>
            </h2>
            <div className="logos">
                {logos.map((item) => (
                    <img src={item.file.url} title />
                ))}
            </div>
        </div>

        <div className="skills">
            <div className="container">
                <h1 className="text-center">
                    <span className="hidden">Software Entwicklung</span>
                </h1>
                <div className="row gray">
                    {skills.key.map( (item, k) => <Skill key={(k+1)+"moreskill"} number={k+1} {...item} />)}
                </div>
            </div>
        </div>

        <div className="container contact">
            <h2 className="contact-header">Kontakt</h2>
            <hr />
            <div className="row">
                <div className="col-xs-6">
                    <p>
                        <b>CODELINE.co</b><br />
                        <b>Flo</b> Narr<br />
                        Ramsau 442<br />
                        A-6284 Ramsau
                    </p>
                    <p>
                        UID: AT-U69098889
                    </p>
                </div>
                <div className="col-xs-6 text-right">
                    <p><b>Social Media</b></p>
                    <p>
                        <a href="https://facebook.com/codeline.co" target="_blank">Facebook</a><br />
                        <a href="https://twitter.com/codelineco" target="_blank">Twitter</a><br />
                        <a href="https://medium.com/@flonarr" target="_blank">Medium.com</a>
                    </p>
                </div>
            </div>
            <hr />
            <div className="row contact-meta">
                <div className="col-xs-12 col-sm-6 text-center">
                    <a href="tel:00436769710112">
                        <span className="info">+43 676 971 01 12</span>
                        <span className="hidden">Anrufen</span>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 text-center">
                    <a href="mailto:flo@codeline.co">
                        <span className="info">flo@codeline.co</span>
                        <span className="hidden">Schreiben</span>
                    </a>
                </div>
            </div>
        </div>

    </div>
    )
}

export const query = graphql`
    query IndexQuery {
        allContentfulSkillContainer {
            edges {
                node {
                    title
                    skills {
                        title
                        cols
                        text {
                            childMarkdownRemark {
                                html
                            }
                        }
                    }
                }
            }
        }
        allContentfulGallery {
            edges {
                node {
                    id
                    title
                    images {
                        file {
                            url
                            fileName
                            contentType
                        }
                    }
                }
            }
        }
    }
`

export default IndexPage
