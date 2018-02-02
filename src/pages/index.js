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
                    Entscheidend<br/>für deinen Erfolg<br />sind deine Handlungen!
                </div>
                <div className="col-sm-6">
                    <p className="bl">
                        Beratung, Konzeption & Entwicklung!
                    </p>
                    <p className="bl">
                        Mit mehr als 10 Jahren Erfahrung in der Entwicklung von Spezialanwendungen und mit einer ausgeprägten Software-Affinität kann ich auf eine fundierte Basis und ein sehr großes Wissen in diesem Bereich zurückgreifen.
                    </p>
                    <p className="bl">
                        Ich bin spezialisiert auf die Entwicklung mobiler Apps (iOS & Android), Betriebslösungen und die Anbindung von Software an jegliche Art von Schnittstellen. Des Weiteren sollte ein cloudbasiertes Hosting und die Skalierung von Softwarelösungen kein Problem sein ;)
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
                        Wie auch Hipp für seine Produkte steht,<br />
                        stehe ich mit meinem Namen für mein Können <br />
                        und meine Leistungen in der Softwareentwicklung.
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
            <div className="text-small">
                <p>Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz siehe oben</p>

                <p>Angaben zur Online-Streitbeilegung: Verbraucher haben die Möglichkeit, Beschwerden an die OnlineStreitbeilegungsplattform der EU zu richten: http://ec.europa.eu/odr. Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.</p>

                <p><b>Datenschutzerklärung für die Nutzung von Google Analytics</b><br />
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link (http://tools.google.com/dlpage/gaoptout?hl=de) verfügbare Browser-Plugin herunterladen und installieren.
                Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter http://www.google.com/analytics/terms/de.html bzw. unter https://support.google.com/analytics/answer/6004245?hl=de. Wir weisen Sie darauf hin, dass auf dieser Webseite Google Analytics um den Code „gat._anonymizeIp();“ erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten.</p>

                <p><b>Datenschutzerklärung</b><br />
                Angaben zur Online-Streitbeilegung: Verbraucher haben die Möglichkeit, Beschwerden an die OnlineStreitbeilegungsplattform der EU zu richten: http://ec.europa.eu/odr. Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.</p>

                <p>Wir legen großen Wert auf den Schutz Ihrer Daten. Um Sie in vollem Umfang über die Verwendung personenbezogener Daten zu informieren, bitten wir Sie die folgenden Datenschutzhinweise zur Kenntnis zu nehmen.</p>

                <p><b>Persönliche Daten</b><br />
                Persönliche Daten, die Sie auf dieser Website elektronisch übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben, werden von uns nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben. Der Provider erhebt und speichert automatisch Informationen am Webserver wie verwendeter Browser, Betriebssystem, Verweisseite, IP-Adresse, Uhrzeit des Zugriffs usw. Diese Daten können ohne Prüfung weiterer Datenquellen keinen bestimmten Personen zugeordnet werden und wir werten diese Daten auch nicht weiter aus solange keine rechtswidrige Nutzung unserer Webseite vorliegt.</p>
                <p><b>Formulardaten und Kommentare</b><br />
                Wenn Webseitenbesucher Kommentare oder Formulareinträge hinterlassen, werden die eingegebenen Daten und ihre IP-Adressen gespeichert. Das erfolgt zur Sicherheit, falls jemand widerrechtliche Inhalte verfasst (Beleidigungen, links- oder rechtsextreme Propaganda, Hasspostings usw.). In diesem Fall sind wir an der Identität des Verfassers interessiert.</p>
                <p><b>Cookies</b><br />
                Cookies sind kleine Dateien, die es dieser Webseite ermöglichen auf dem Computer des Besuchers spezifische, auf den Nutzer bezogene Informationen zu speichern, während unsere Website besucht wird. Cookies helfen uns dabei, die Nutzungshäufigkeit und die Anzahl der Nutzer unserer Internetseiten zu ermitteln, sowie unsere Angebote für Sie komfortabel und effizient zu gestalten. Wir verwenden einerseits Session-Cookies, die ausschließlich für die Dauer Ihrer Nutzung unserer Website zwischengespeichert werden und zum anderen permanente Cookies, um Informationen über Besucher festzuhalten, die wiederholt auf unsere Website zugreifen. Der Zweck des Einsatzes dieser Cookies besteht darin, eine optimale Benutzerführung anbieten zu können sowie Besucher wiederzuerkennen und bei wiederholter Nutzung eine möglichst attraktive Website und interessante Inhalte präsentieren zu können. Der Inhalt eines permanenten Cookies beschränkt sich auf eine Identifikationsnummer. Name, IP-Adresse usw. werden nicht gespeichert. Eine Einzelprofilbildung über Ihr Nutzungsverhalten findet nicht statt. Eine Nutzung unserer Angebote ist auch ohne Cookies möglich. Sie können in Ihrem Browser das Speichern von Cookies deaktivieren, auf bestimmte Webseiten beschränken oder Ihren Webbrowser (Chrome, IE, Firefox,…) so einstellen, dass er sie benachrichtigt, sobald ein Cookie gesendet wird. Sie können Cookies auch jederzeit von der Festplatte ihres PC löschen. Bitte beachten Sie aber, dass Sie in diesem Fall mit einer eingeschränkten Darstellung der Seite und mit einer eingeschränkten Benutzerführung rechnen müssen.</p>

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
