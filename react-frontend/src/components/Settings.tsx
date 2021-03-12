import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MyDevices from './MyDevices'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        submitButton: {
            marginTop: 15,
            maxWidth: '20ch',
            marginBottom: 20,
        },
        formFields: {
            display: 'flex',
            flexDirection: 'column'
        },
    }),
);

export default function Settings() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h4'>My Info</Typography>
            <form noValidate autoComplete="off">
                <div className={classes.formFields}>
                    <TextField required id="email" label="Email" value="example@example.com" />
                    <TextField
                        id="phone-number"
                        label="Phone Number"
                        value={7874265319}
                        type="tel"
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submitButton}
                >
                    Save
            </Button>
            </form>
            <Typography variant='h4'>My Devices</Typography>
            <MyDevices />
        </div>
    );
}