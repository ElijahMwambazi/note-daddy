import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  Link,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Link to="/">Home</Link>
        <Link to="create-note">Create</Link>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
