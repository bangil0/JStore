import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
})

class PaymentOptionsCheckboxes extends Component {
  state = {
    cash: true,
    bank_transfer: false,
    paypal: false,
    meal_plan: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked  
    }, () => {

      let checked = []
      const state_copy = Object.assign({}, this.state)
      for (let key in state_copy) {
        let value = state_copy[key]
        if (value) {
          checked.push(key)
        }
      }
      
      this.props.parentCallBack (this.props.data_name, checked)
    })
  }
  
  render() {
    const { classes, error } = this.props
    const { cash, bank_transfer, paypal, meal_plan } = this.state

    return (
      <div className={classes.root}>
        <FormControl error={error} component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Preferred Payment Options</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={cash} onChange={this.handleChange} name="cash" />}
              label="Cash"
            />
            <FormControlLabel
              control={<Checkbox checked={bank_transfer} onChange={this.handleChange} name="bank_transfer" />}
              label="Bank Transfer"
            />
            <FormControlLabel
              control={
                <Checkbox checked={paypal} onChange={this.handleChange} name="paypal" />
              }
              label="Paypal"
            />
            <FormControlLabel
              control={
                <Checkbox checked={meal_plan} onChange={this.handleChange} name="meal_plan" />
              }
              label="Meal Plan"
            />
          </FormGroup>
        </FormControl>
      </div>
    )
  }
}

export default withStyles(useStyles)(PaymentOptionsCheckboxes)
