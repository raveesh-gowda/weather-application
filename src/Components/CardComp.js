import React from "react";
import {
   Card,
   Table,
   TableBody,
   TableRow,
   TableHead,
   CardContent,
   Typography,
} from "@material-ui/core";

import Sunny from "../Logo/sunny.png";

const CardComp = (props) => {
   const { data } = props;
   //   console.log(data);

   return (
      <Card>
         <CardContent>
            <Typography variant="h3" color="textSecondary" gutterBottom>
               {data.name}
            </Typography>
            <div>
               <img src={Sunny} alt="Sunny" width="100" />
               <Typography variant="h5">
                  {(data.main.temp - 273.15).toFixed(2)}°C{" "}
                  <Typography variant="h6">
                     {data.weather[0].description}
                  </Typography>
               </Typography>
               <Typography variant="h6">
                  Latitude: {data.coord.lat.toFixed(2)}°
               </Typography>
               <Typography variant="h6">
                  Longitude:
                  {data.coord.lon.toFixed(2)}°
               </Typography>
            </div>
            <br />
            <hr />
            <Typography variant="h3">Condition</Typography>
            <Table>
               <TableBody>
                  <TableRow>
                     <TableHead>High/Low</TableHead>
                     <td>
                        {(data.main.temp_max - 273.15).toFixed(2)} °C/
                        {(data.main.temp_min - 273.15).toFixed(2)} °C
                     </td>
                  </TableRow>
                  <TableRow>
                     <TableHead>Pressue</TableHead>
                     <td>{(data.main.pressure * 0.1).toFixed(2)} kPa</td>
                  </TableRow>
                  <TableRow>
                     <TableHead>Humidity</TableHead>
                     <td>{data.main.humidity} %</td>
                  </TableRow>
                  <TableRow>
                     <TableHead>Visibility</TableHead>
                     <td>{data.visibility * 0.001} km</td>
                  </TableRow>
                  <TableRow>
                     <TableHead>Wind Speed</TableHead>
                     <td>{data.wind.speed} km/hr</td>
                  </TableRow>
               </TableBody>
            </Table>
         </CardContent>
      </Card>
   );
};

export default CardComp;
