//weather application
let searchInputBox=document.getElementById("city_name_input_box");
let searchIcon=document.getElementById("search_icon");
let weatherAPIURL;
searchIcon.addEventListener("click",async()=>{
   let cityName=searchInputBox.value;
    weatherAPIURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7672c8696043e4a18dbe073d4b472504`;
    let weatherAPIResponse=await fetch(weatherAPIURL);
    let weatherReport=await  weatherAPIResponse.json();
    console.log(weatherReport);

    document.getElementById("cityName").textContent=weatherReport.name;
    document.getElementById("weather_name").textContent=weatherReport.weather[0].description;
    document.getElementById("degree_celsius").textContent=`${parseInt( weatherReport.main.temp-273.15)}°C `;
    document.getElementById("humidity_value").textContent=`${weatherReport.main.humidity}%`;
     document.getElementById("windspeed_value").textContent=`${weatherReport.wind.speed}km/hr`;

     let weatherID=weatherReport.weather[0].id;
     let weatherImage=document.getElementById("weather_image")
     
     if(weatherID>=200 && weatherID<=232){
        weatherImage.src="./assets/weather_thunderstormy.jpg" ;
     }
    else if(weatherID>=300 && weatherID<=321){
        weatherImage.src="./assets/weather_drizzly.png";
     }
     else if(weatherID>=500 && weatherID<=532){
        weatherImage.src="./assets/weather_rainy.png";
     }
     else if(weatherID>=600 && weatherID<=622){
        weatherImage.src="./assets/weather_snow.png";
     }
     else if(weatherID>=701 && weatherID<=781){
        weatherImage.src="./assets/weather_atmosphere.png";
     }
     else if(weatherID>=800){
        weatherImage.src="./assets/weather_sunny.png";
     }
    else if(weatherID>=801 && weatherID<=804){
        weatherImage.src="./assets/weather_cloudy.png";
     }
    //  weatherImage.style.width="150px";
     searchInputBox.value="";
     document.getElementById("degree_celsius").style.display="inline";


    
})