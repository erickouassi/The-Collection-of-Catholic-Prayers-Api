# The-Collection-of-Catholic-Prayers-Api
The Collection of Catholic Prayers Api (TCCP)

General Usage
-------------

_All of our API calls return a JSON response. No authentication required_  

_This example uses fetch, a modern built-in way to make HTTP requests with JavaScript._

  ```
  fetch(".../v1/basic_prayers")
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  ```
  
  

Method: GET: [https://tccp-api.vercel.app](https://tccp-api.vercel.app)

✅ Basic Catholic Prayers

👉 [https://tccp-api.vercel.app/v1/basic\_prayers](https://tccp-api.vercel.app/v1/basic_prayers)

✅ Stations of the Cross

👉 [https://tccp-api.vercel.app/v1/stations\_of\_cross](https://tccp-api.vercel.app/v1/stations_of_cross)

✅ Saints And Feast Day List

👉 [https://tccp-api.vercel.app/v1/saints](https://tccp-api.vercel.app/v1/saints)

✅ Saints And Feast Day List (French)

👉 [https://tccp-project.erickouassi.repl.co/v1/saints\_fr](https://tccp-api.vercel.app/v1/saints_fr)
