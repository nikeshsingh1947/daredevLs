// EventCalendar.js
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import "./Eventcalender.css";
import EventImage1 from "./Assets/DSC_0761 - Copy - Copy.jpg";
import EventImage2 from "./Assets/DSC_0819.jpg";
import EventImage3 from "./Assets/DSC_0889.jpg";
import EventImage4 from "./Assets/DSC_1143.jpg";
import EventImage5 from "./Assets/Jashn-E- Azaadi Ride.jpg";
import EventImage6 from "./Assets/Jawala  Disha Ride.jpg";
import EventImage7 from "./Assets/Rotary Ride.jpg";
import EventImage8 from "./Assets/Hero Lectro Green Bonta Ride.jpg";
import EventImage9 from "./Assets/Teacher’s Day Half Marathon.jpg";
import EventImage10 from "./Assets/Beyond Limit Ultra Run.jpg";
import EventImage11 from "./Assets/21 Day’s Workout Challenge (Virtual).jpg";
import EventImage12 from "./Assets/Dil Ki Baat Ride.jpg";
const EventCalendar = () => {
  const Eventdata = [
    {image:EventImage1, title: "DELHI-PANIPAT-DELHI Endurance Ride", participants: "200+", sponsor: "MAX HEALTHCARE", categories: "50KM,100KM,150KM & 200KM" },
    {image:EventImage2, title: "EURONIC'S INDEPENDENCE Ride", participants: "200+", sponsor: "EURONICS", categories: "50KM" },
    { image:EventImage3,title: "HELIPAD Canal Rider's Group Jersey lounch Ride", participants: "100+", sponsor: "HELIPAD CANAL RIDERS", categories: "50KM & 100KM" },
    { image:EventImage4,title: "PEDAL OUT STROKES Cyclothone", participants: "250+", sponsor: "FORTIS HOSPITAL", categories: "50KM" },
    { image:EventImage5,title: "Jashn-e Azadi Ride", participants: "200+", sponsor: "Ninety One & Jubliant Food Works", categories: "50KM/100KM" },
    { image:EventImage6,title: "Jawala Disha Ride", participants: "400+", sponsor: "Renu Malhotra & DC Studios", categories: "50KM" },
    { image:EventImage7,title: "Rotary Ride", participants: "600+", sponsor: "Rotary Club", categories: "50KM" },
    { image:EventImage8,title: "Hero Lectro Green Bonta Ride", participants: "250+", sponsor: "Hero Lectro", categories: "25KM" },
    { image:EventImage9,title: "Teacher's Day Half Marathon", participants: "400+", sponsor: "GL Bajaj University", categories: "5KM,10KM,& Half Marathon" },
    { image:EventImage10,title: "Beyond Limit Ultra Run", participants: "100+", sponsor: "Bahadurgarh Runners", categories: "5KM,10KM,21.1KM,42.2KM,& 50KM" },
    { image:EventImage11,title: "21 Day's Workout Challenge (Virtual)", participants: "600+", sponsor: "SampoornMe", categories: "Workout For 21 Days" },
    { image:EventImage12,title: "Dil Ki Bat Ride", participants: "1200+", sponsor: "Max Healthcare", categories: "50KM" },
    
  ];

  return (
    <Box>
      <Box>
        {/* <Text> UPCOMING EVENTS</Text> */}
        <Box></Box>
      </Box>
      <Box>
        <Text>PREVIOUS EVENTS</Text>
        <Box className="event-container">
        {Eventdata.map((e)=>(
          
            <Box className="event-card-box">
              <Box><Image src={e.image}/></Box>
              <Text style={{"fontWeight":"bold"}}>{e.title}</Text><Text><span style={{"fontWeight":"bold"}}>Participants:</span> <span className={"ans-blue"}>{e.participants}</span></Text><Text><span style={{"fontWeight":"bold"}}>Sponsor:</span> <span >{e.sponsor}</span></Text><Text><span style={{"fontWeight":"bold"}} >Categories:</span> <span >{e.categories}</span></Text></Box>
          
        ))}
        </Box>
      </Box>
     </Box>
  );
};

export default EventCalendar
