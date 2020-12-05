import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function ConfirmEmail() {
  return (
    <div>
      <h2> You have been sent a confirmation email from Pizza Palace</h2>
      <p>
        Please follow the link in that email. Remember to check the spam folder!
      </p>
      <p>
        Unfortunately some (many) email providers will block this automatically
        generated mail.
      </p>
      <p>
        It might take some time (up to 1h when I tested it) or not arrive at
        all.
      </p>
      <p>
        Until I figure this out, please use gmail (that one should work well).
      </p>
      <Button>
        <Link to="/">OK!</Link>
      </Button>
    </div>
  );
}
