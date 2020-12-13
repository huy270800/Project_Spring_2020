import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import RestorePw from "./RestorePw";
import Account from "./Account";
import ChangeEmail from "./ChangeEmail";
import ChangePw from "./ChangePw";
import History from "./History";
import ProtectedRoute from "../components/ProtectedRoute";

export default function User(props) {
  const routeName = "/user";
  return (
    <div>
      <Route exact path={routeName + "/login"} component={Login} />
      <Route exact path={routeName + "/register"} component={Register} />
      <ProtectedRoute exact path={routeName + "/restorePw"} component={RestorePw} />
      <ProtectedRoute exact path={routeName + "/account"} component={Account} />
      <ProtectedRoute exact path={routeName + "/changeEmail"} component={ChangeEmail} />
      <ProtectedRoute exact path={routeName + "/changePw"} component={ChangePw} />
      <ProtectedRoute exact path={routeName + "/history"} component={History} />
    </div>
  );
}
