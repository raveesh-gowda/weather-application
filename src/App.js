import React from "react";
import { Typography, Container } from "@material-ui/core";

import ContainerComp from "./Components/ContainerComp";

const App = (props) => {
   return (
      <Container fixed>
         <Typography variant="h2">Weather App</Typography>
         <br />
         <ContainerComp />
      </Container>
   );
};

export default App;
