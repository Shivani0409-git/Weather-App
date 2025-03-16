let input = document.getElementById("inputCity");
let btn = document.getElementById("get");
let city = document.getElementById("City");
let tepr = document.getElementById("ans1");
let wethr = document.getElementById("ans2");
let humi = document.getElementById("ans3");
let img = document.getElementById("Img");
let hidd = document.getElementById("hidden");
let val, count, win, tem, hum;;
let city_name = "Indore";
let URL;
let weath, desc, icon;
let image = document.createElement('img');
let flagImg = document.createElement('img');
// let URL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=5458fda5a07ce6dfa59af314ded7edb2";

btn.onclick = () => {
    val = document.getElementById("inputCity").value;
    console.log(val);
    city_name = val;
    city.textContent = city_name;
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=5458fda5a07ce6dfa59af314ded7edb2`;
    fetch(URL).then((response) => {
        return response.json();
    }).then((res) => {
        hidd.classList.remove("hide");
        city.style.backgroundColor = "rgb(11, 124, 159)";
        city.style.color = "aliceblue"
        
        console.log(res);
        weath = res.weather[0].main;//weather
        desc = res.weather[0].description;
        icon = res.weather[0].icon;
        count = res.sys.country;//country
        win = res.wind.speed;//wind
        tem = res.main.temp;//temperature
        hum = res.main.humidity;//humidity
        console.log(weath);
        console.log(desc);
        city.textContent = `${city_name}, ${count}`;
        // flagImg.src = `https://www.exchangerate-api.com/img/docs/${count}.gif`;
        flagImg.src = `https://flagsapi.com/${count}/shiny/48.png`
        flagImg.alt = 'Flag Image';
        flagImg.style.paddingLeft = "10px";
        city.appendChild(flagImg);

        tepr.textContent = `Temperature : ${(tem-273.15).toFixed(2)}°C`;
        wethr.textContent = `Weather : ${weath}`;
        humi.textContent = `Humidity : ${hum}%`;
        image.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        image.alt = 'Placeholder Image';
        image.width = 150;
        image.height = 150;
        img.appendChild(image);
    }).catch((err) => {
            city.style.backgroundColor = "#bddff3b5";
            city.style.color = "black";
            city.textContent = "city is not found";
            console.log("city is not found");
            hidd.classList.add("hide");
        })
}
// 

// let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=5458fda5a07ce6dfa59af314ded7edb2`;
