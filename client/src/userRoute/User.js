import React from "react";
import { Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route
          exact
          path={routeName + "/login"}
          render={(routeProps) => (
            <Login
              {...routeProps}
              setUsername={props.setUsername}
              setPassword={props.setPassword}
            />
          )}
        />
        <Route exact path={routeName + "/register"} component={Register} />
        <Route exact path={routeName + "/restorePw"} component={RestorePw} />
        <Route
          exact
          path={routeName + "/account"}
          render={(routeProps) => (
            <Account
              {...routeProps}
              username={props.username}
              password={props.password}
            />
          )}
        />
        <Route
          exact
          path={routeName + "/changeEmail"}
          render={(routeProps) => (
            <ChangeEmail
              {...routeProps}
              password={props.password}
              username={props.username}
            />
          )}
        />
        <Route
          exact
          path={routeName + "/changePw"}
          render={(routeProps) => (
            <ChangePw
              {...routeProps}
              password={props.password}
              username={props.username}
              setPassword={props.setPassword}
            />
          )}
        />
      </Switch>
    </div>
  );
}
