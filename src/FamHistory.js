import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export function FamHistory(props) {
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
      "f_name": "string",
      "f_relation": "string",
      "f_description": "string"
      //V IMP: WRITE DOWN VARIABLES NAME HERE AS IN YOUR BACK END, THESE SAME VARS SHOULD BE IN THE NAME ATTRIBUTE OF THIS FORM,
    }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    fetch("http://localhost:3000/family-histories", { //CHECK THE URL WITH YOUR BACK END
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
       <h1>Family History</h1>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="NAME"
            id="margin-normal"
            name="f_name" //CHECK NAME
            defaultValue={formInput.email}
            className={classes.textField}
            helperText="Enter name"
            onChange={handleInput}
          />
          <TextField
            label="RELATION"
            id="margin-normal"
            name="f_relation" //CHECK NAME
            defaultValue={formInput.email}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="DESCRIPTION"
            id="margin-normal"
            name="f_description"//CHECK
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="Write notes"
            onChange={handleInput}
          /><br/>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            SAVE
          </Button>
        </form>
      </Paper>
    </div>
  );
}


