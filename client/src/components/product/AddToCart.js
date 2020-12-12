import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
export default function AddToCart(props) {
  return (
    <div>
      <Button fullWidth onClick={props.buttonOnClick}>
        Add to cart
      </Button>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your item has added to cart!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Ok!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
