<template>
    <main>
      <b-container>
        <div class="weather-box">
            <p>Click here to generate the weather in Singapore as of: <b>{{ moment().format('MMMM Do YYYY, h:mm:ss a') }}</b></p>
            <p><i>No matter how I tried, I couldn't access the right weather forecast data within the data.gov.sg API. I know that the data that I want is stored within the nested array of 'forecasts', and I know that I need to do something like a nested for loop (?) like 'v-for item in api_data', and then 'v-for forecasts in area.forecast' but I wasn't able to succeed in the end.</i></p>
            <p><i>It's a bit of a cop-out but I was able to fully understand the OpenWeatherApi data since the data is much simpler and I can just filter by location, so I've decided to just use that one instead :) </i></p>
            <button class="weatherbutton" v-on:click="fetchWeather">Generate weather</button>
        </div>

        <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
          <div class="location-box">
            <div class="location"><b>Location:</b> {{ weather.name }}</div>
            <br>
          </div>

          <div class="weather-box">
            <div class="temp"><b>Temperature:</b> {{ Math.round(weather.main.temp) }}°c</div>
            <div class="weather"><b>Weather forecast:</b> {{ weather.weather[0].main }}</div>
            <div class="weather"><b>Description:</b> {{ weather.weather[0].description }}</div>
          </div>
        </div>
      </b-container>
    </main>
</template>

<script>

import moment from 'moment';


export default {
  name: 'app',
  data () {
    return {
      url_base: 'http://api.openweathermap.org/data/2.5/weather?q=Singapore&units=metric&appid=570c9efbdf7955df213f72a87038e743',
      query: '',
      weather: {},
      timestamp: {},
    }
  },
  created() {
    setInterval(this.getNow,1000);
  },
  methods: {
    fetchWeather () {
        fetch(`${this.url_base}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
    },
    setResults (results) {
      this.weather = results;
    },
    say: function (message) {
      alert(message)
    },
    /* Tried to use a complicated today.getDate function but realised that it was very difficult to get the date formatted in the way that I wanted. Later realised that moment.js solves this problem very easily*/
    moment: function() {
      return moment();
    },
  }
}
</script>


<style scoped>

.weatherbutton {
  border: darkgray !important;
}

.weather-wrap {
  padding-top: 10px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
    margin-left: 0px;
    margin-top: 10px;
}



</style>