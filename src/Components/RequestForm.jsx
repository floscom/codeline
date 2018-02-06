import React from 'react'

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import grey from 'material-ui/colors/grey';

import { withStyles } from 'material-ui/styles';
const styles = theme => ({

});

class RequestForm extends React.Component {
    render() {
        return (
            <form netlify action="/thankyou">
            <Card className="form">
                <CardContent>
                    <div className="row">
                        <div className="col-xs-12">
                            <TextField
                                label="Dein Name"
                                name="name"
                                placeholder="Vorname & Nachname"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <TextField
                                name="phone"
                                label="Telefonnummer"
                                placeholder="+43 676 9710112"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            <TextField
                                name="mail"
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
                        name="text"
                        label="Anfrage"
                        placeholder=""
                        rows="5"
                        margin="normal"
                        fullWidth
                        multiline
                    />
                </CardContent>
                <CardActions className="text-right">
                    <Button fullWidth>
                        Nachricht senden!
                    </Button>
                </CardActions>
            </Card>
            </form>
        )
    }
}

export default withStyles(styles)(RequestForm);
