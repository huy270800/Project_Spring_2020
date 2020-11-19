import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import RestorePw from "./RestorePw";
import Account from "./Account";
import ChangeEmail from "./ChangeEmail";
import ChangePw from "./ChangePw";

export default function User(props) {
  const routeName = "/user";
  return (
    <div>
      <Route exact path={routeName + "/login"} component={Login} />
      <Route exact path={routeName + "/register"} component={Register} />
      <Route exact path={routeName + "/restorePw"} component={RestorePw} />
      <Route exact path={routeName + "/account"} component={Account} />
      <Route exact path={routeName + "/changeEmail"} component={ChangeEmail} />
      <Route exact path={routeName + "/changePw"} component={ChangePw} />
    </div>
  );
}
