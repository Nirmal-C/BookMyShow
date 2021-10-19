

//Transforms component into another component
//Adding additional functionalities to the existing components.

import React from "react";
import { Route } from "react-router-dom";

//Layouts
import DeLayout from "../layouts/default.layout";


const DefaultHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
    <Route
    {...rest}

    component = {(props) => (
      <DeLayout>
       <Component {...props} />
      </DeLayout>
    )

    }
     />
    </>
  );
};

export default DefaultHOC;