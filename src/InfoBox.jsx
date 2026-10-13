import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function InfoBox({info}) {
    const INIT_URL=
    "https://images.unsplash.com/photo-1733528321366-5f6c40e6178c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxEdXN0eSUyMHdhZXRoZXJ8ZW58MHx8MHx8fDA%3D";
   
    const HOT_URL="https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg=";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHNlYXNvbiUyMGltYWdlfGVufDB8fDB8fHww";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1733259850070-90f3823659c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHJhaW55JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";


  return (
    <div className='InfoBox'>

<div className='Cardcontainer'>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 75 ? RAIN_URL: info.temp > 25 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {/* {info.humidity > 75 ? ThunderstormIcon: info.temp > 25 ? SunnyIcon:AcUnitIcon} */}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
         <div>Temperature:{info.temp}&deg;C </div>
         <div>Humidity:{info.humidity} </div>
         <div>Min Temp:{info.tempMin}&deg;C </div>
         <div>Max Temp:{info.tempMax}&deg;C </div>
          <div>The Weather can be described as <i>{info.weather}</i> feels Like:{info.feels_like}&deg;C </div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}

export default InfoBox