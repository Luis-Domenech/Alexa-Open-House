import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, Input, InputLabel, InputAdornment, FormControl, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '20ch',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formRow: {
      display: 'flex',
    },
    submitButton: {
      marginTop: 15,
      maxWidth: '20ch'
    }
  }),
);

interface PropertyInfo {
  id: string,
  propertyName: string,
  squareFootage: string,
  price: string;
}

export default function PropertyView(props: PropertyInfo) {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [propertyInfo, setPropertyInfo] = useState({
    id: props.id,
    propertyName: props.propertyName,
    squareFootage: props.squareFootage,
    price: props.price
  });

  // useEffect(() => {
  //   fetch(`/properties/${props.id}`)
  //     .then(response => response.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setPropertyInfo(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  const handleChange = (prop: keyof PropertyInfo) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyInfo({ ...propertyInfo, [prop]: event.target.value });
  };

  const handleSubmit = () => (event: React.SyntheticEvent) => {
    event.preventDefault();

    let data = { propertyInfo };

    fetch("/properties/1", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h4">
          {props.propertyName}
        </Typography>
        <form onSubmit={handleSubmit()} className={classes.form}>
          <div className={classes.formRow}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="squareFootage">Square Footage</InputLabel>
              <Input
                id="squareFootage"
                value={props.squareFootage || ''}
                onChange={handleChange('squareFootage')}
                endAdornment={<InputAdornment position="end">ft<sup><sup>2</sup></sup></InputAdornment>}
              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="price">Asking Price</InputLabel>
              <Input
                id="price"
                value={props.price || ''}
                onChange={handleChange('price')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
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
      </div>
    </div>
  );
}