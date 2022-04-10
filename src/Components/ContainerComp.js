import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import FormComp from "./FormComp";
import CardComp from "./CardComp";

const ContainerComp = (props) => {
   const [city, setCity] = useState("");
   const [data, setData] = useState([]);

   const handleCityChange = (e) => {
      setCity(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      axios
         .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c193e61b2ca35db656337805df9d973f`
         )
         .then((response) => {
            // console.log(response);
            setData(response.data);
         })
         .catch((err) => {
            swal(err.message);
         });

      setCity("");
   };

   return (
      <div>
         <div style={{ textAlign: "center" }}>
            <FormComp
               city={city}
               handleCityChange={handleCityChange}
               handleSubmit={handleSubmit}
            />
         </div>
         <br />
         {data.length === 0 ? null : <CardComp data={data} />}
      </div>
   );
};

export default ContainerComp;
