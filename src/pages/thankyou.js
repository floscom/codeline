import React from 'react'
import Link from 'gatsby-link'
import _floBw from '../assets/flo-bw.jpg';

const ImpressPage = ({ data }) => {
    return (
        <div className="container thankyou">
            <div>
            <div className="row">
                <div className="col-sm-4">
                    <img src={_floBw} className="img-circle maxWidth-200px" />
                </div>
                <div className="col-sm-8">
                    <h1>Danke</h1>
                    <p>
                        Es freut mich, dass du mich kontaktiert hast.<br />
                        Ich werde mich so schnell wie möglich bei dir melden!
                    </p>
                    <p>schöne Grüße,<br />Flo</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ImpressPage
