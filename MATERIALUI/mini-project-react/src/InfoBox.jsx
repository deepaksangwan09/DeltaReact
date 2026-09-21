import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox(){

    let INIT_URL = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    let info = {
        city : "Delhi", 
        feelsLike: 38.08, 
        temp : 34.96,
        tempMin : 34.05,
        tempMax : 34.96,
        humidity : 47,
        weather : "haze"
    }

    return(
        <div className="InfoBox">
            <h1>Weather Info - {info.weather}</h1>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={INIT_URL}
                title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">{info.city}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}</p>
                <p>Max Temp = {info.tempMax}</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}</p>
            </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}