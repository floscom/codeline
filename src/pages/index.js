import React from 'react'
import $ from 'jquery'
import Link from 'gatsby-link'

import logo from '../assets/codeline-white-think-big@0.5x.png';
import expert from '../assets/w-expert-30px.png';
import bracket from '../assets/w-bracket-100px.png';

import _video from '../assets/typing.mp4';
import _floBw from '../assets/flo-bw.jpg';
import _signature from '../assets/signature-fake.png';

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

        <div className="flexView hero video-hero">

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
                        Beratung, Konzeption & Entwicklung!
                    </p>
                    <p className="bl">
                        Mit mehr als 10 Jahren Erfahrung in der Entwicklung von Spezialanwendungen und einer ausgeprägten Software-Affinität kann ich auf ein fundiertes Wissen und ein sehr großes Netzwerk, in diesem Bereich, zurückgreifen.
                    </p>
                    <p className="bl">
                        Ich bin spezialisiert auf die Entwicklung mobiler Apps (iOS & Android), Betriebslösungen und die Anbindung von Software an jegliche Art von Schnittstellen. Des Weiteren sollte ein cloudbasiertes Hosting und somit die Skalierung von Softwarelösungen kein Problem sein ;)
                    </p>
                </div>
            </div>
        </div>
        <div className="signature">
            <div className="row">
                <div className="col-sm-6 text-right imageblock">
                    <img src={_floBw} className="img-circle maxWidth-200px" />
                </div>
                <div className="col-sm-6 text-left">
                    <p>
                        Wie auch Hipp, für seine Produkte steht,<br />
                        stehe ich mit meinem Namen für mein Können <br />
                        und meine Leistungen im Bereich der Softwareentwicklung.
                    </p>
                    <p>
                        Bei uns in <span className="hero-text">Tirol & Zillertal</span> hat das noch Wert!
                    </p>
                    <img src={_signature} />
                </div>
            </div>
        </div>

        <div className="">
            <h2 className="logo-header">
                Meine <span className="hero-text">#Kunden</span>
            </h2>
            <div className="logos">
                {logos.map((item) => (
                    <img src={item.file.url} title />
                ))}
            </div>
            <p className="text-center">und noch weitere ...</p>
        </div>

        <div className="skills">
            <div className="container">
                <h1 className="text-center">
                    <span className="hidden">Softwareentwicklung</span>
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
                <div className="col-xs-12 col-sm-6">
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
                <div className="col-xs-12 col-sm-6 text-right">
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
            <hr />
            <p className="text-right">
                <Link to="/impress">Impressum</Link>
            </p>
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
