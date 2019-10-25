import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class AlertDialogSlide extends Component {
    constructor() {
        super();
        
        this.state = {
            open: false,
            message: "",
            header: "",
        }
    }

    componentWillReceiveProps (incomingProps) {
        this.setState({ 
            open:incomingProps.showMe,
            header: incomingProps.header,
            message: incomingProps.message })
    }
  
  render() {
  return (
    <div>
      <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{this.state.header}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {this.state.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.handleClose()} color="primary">
            CANCEL
          </Button>
          <Button onClick={() => this.props.actionIfTrue(this.props.subToDelete)} color="primary">
            CONFIRM
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}}

export default AlertDialogSlide