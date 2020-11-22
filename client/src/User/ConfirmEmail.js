import React from "react";
import { Link } from "react-router-dom";

export default function ConfirmEmail() {
  return (
    <div>
      <h2> You have been sent a confirmation email.</h2>
      <div>
        Please follow the link in that email. Remember to check the spam folder.
      </div>
      <div>
        Unfortunately some (many) email providers will block this automatically
        generated mail.
      </div>
      <div>
        It might take some time (up to 1h when I tested it) or not arrive at
        all.
      </div>
      <div>
        Until I figure this out, please use gmail (that one should work well).
      </div>
      <Link to="/">
        <button>OK!</button>
      </Link>
    </div>
  );
}
