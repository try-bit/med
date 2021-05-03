import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export function ContactInfo(props) {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      "phoneNumber": 0,
      "address": "string",
      "email": "string"
    }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    fetch("https://localhost:3000/contact-infos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();

  console.log(props);

  return (
    <div>
       <h1>Contact Info</h1>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form >
          <TextField
            label="ADDRESS"
            id="margin-normal"
            name="phoneNumber"
            defaultValue={formInput.email}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="EMAIL ID"
            id="margin-normal"
            name="email"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="NUMBER"
            id="margin-normal"
            name="address"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            onSubmit={handleSubmit}
          >
            SAVE
          </Button>
        </form>
      </Paper>
    </div>
  );
}


