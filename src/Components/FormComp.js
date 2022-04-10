import React from "react";
import { TextField, Button } from "@material-ui/core";
import Search from "../Logo/search.png"

const FormComp = (props) => {
   const { city, handleCityChange, handleSubmit } = props;

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <TextField
               type="text"
               placeholder="Enter the city name"
               value={city}
               onChange={handleCityChange}
               variant="standard"
            />{" "}
            <Button
               type="submit"
               variant="outlined"
               size="small"
               color="primary"
            >
               <img src={Search} alt="Search" width="20"/>
               Search
            </Button>
         </form>
      </div>
   );
};

export default FormComp;
