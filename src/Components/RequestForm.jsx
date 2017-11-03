import React from 'react'

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent, CardActions } from 'material-ui/Card';

export default class RequestForm extends React.Component {
    render() {
        return (
            <Card className="form">
                <CardContent>
                    <div className="row">
                        <div className="col-xs-12">
                            <TextField
                                label="Name"
                                placeholder="Vorname & Nachname"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <TextField
                                label="Telefonnummer"
                                placeholder="+43 676 9710112"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            <TextField
                                label="Mail Adresse"
                                placeholder="flo@codeline.co"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                    </div>
                </CardContent>
                <hr />
                <CardContent>
                    <TextField
                        label="Anfrage"
                        placeholder=""
                        rows="5"
                        margin="normal"
                        fullWidth
                        multiline
                    />
                </CardContent>
                <CardActions className="text-right">
                    <Button raised fullWidth>
                        Absenden
                    </Button>
                </CardActions>
            </Card>
        )
    }
}
