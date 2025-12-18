The Collection of Catholic Prayers API
======================================

A comprehensive **REST API** providing access to a wide collection of traditional Catholic prayers, devotions, and liturgical resources in JSON format.

This open-source project offers unauthenticated endpoints for basic prayers, the Stations of the Cross, and lists of saints with their feast days. Content is available in **English** and **French**.

Ideal for developers building Catholic apps, websites, devotion tools, or personal prayer applications.

**Live API**: [https://the-collection-of-catholic-prayers-api.vercel.app](https://the-collection-of-catholic-prayers-api.vercel.app/?referrer=grok.com)

Features
--------

*   Easy-to-use RESTful endpoints returning structured JSON
    
*   No authentication required
    
*   Bilingual support (English and French for saints)
    
*   Core Catholic content:
    
    *   Common basic prayers
        
    *   Stations of the Cross
        
    *   Complete list of saints and feast days
        
*   Deployed on Vercel for high availability
    
*   Built with Node.js
    

API Endpoints
-------------

All endpoints are under the /v1 path and return JSON data.

EndpointDescriptionLanguageGET /v1/basic\_prayersList of common Catholic prayersEnglishGET /v1/stations\_of\_crossThe 14 Stations of the CrossEnglishGET /v1/saintsList of saints with feast daysEnglishGET /v1/saints\_frList of saints with feast daysFrench

### Example Usage

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   // Fetch basic prayers in English  fetch('https://the-collection-of-catholic-prayers-api.vercel.app/v1/basic_prayers')    .then(response => response.json())    .then(data => console.log(data))    .catch(error => console.error('Error:', error));   `

Root endpoint (/) provides a welcome message and overview of available routes.

Local Installation (Optional)
-----------------------------

To run the API locally:

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com/erickouassi/The-Collection-of-Catholic-Prayers-Api.git  cd The-Collection-of-Catholic-Prayers-Api  npm install  npm start   `

The server will run on http://localhost:3000.

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
  
  

Method: GET: [https://the-collection-of-catholic-prayers-api.vercel.app](https://the-collection-of-catholic-prayers-api.vercel.app)

✅ Basic Catholic Prayers

👉 [https://the-collection-of-catholic-prayers-api.vercel.app/v1/basic\_prayers](https://the-collection-of-catholic-prayers-api.vercel.app/v1/basic_prayers)

✅ Stations of the Cross

👉 [https://the-collection-of-catholic-prayers-api.vercel.app/v1/stations\_of\_cross](https://the-collection-of-catholic-prayers-api.vercel.app/v1/stations_of_cross)

✅ Saints And Feast Day List

👉 [https://the-collection-of-catholic-prayers-api.vercel.app/v1/saints](https://the-collection-of-catholic-prayers-api.vercel.app/v1/saints)

✅ Saints And Feast Day List (French)

👉 [https://the-collection-of-catholic-prayers-api.vercel.app/v1/saints_fr](https://the-collection-of-catholic-prayers-api.vercel.app/v1/saints_fr)




Contributing
------------

Contributions are welcome! Feel free to:

*   Report issues
    
*   Suggest new prayers or features
    
*   Submit pull requests with improvements
    

Please fork the repository, create a feature branch, and open a PR.

License
-------

This project is licensed under the **MIT License** - see the LICENSE file for details.

About
-----

Built and maintained by [@erickouassi](https://github.com/erickouassi).Part of a series of open-source Catholic APIs for developers and faithful alike.

Thank you for using this resource to spread authentic Catholic content! 🙏


