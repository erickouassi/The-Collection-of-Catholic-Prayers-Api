# The Collection of Catholic Prayers API

A comprehensive **REST API** providing access to traditional Catholic prayers, devotions, and liturgical resources in structured JSON format.

This open-source project features unauthenticated endpoints for common prayers, the Stations of the Cross, and a complete list of saints with their feast days (including leap day entries for a total of 366 days). Content is available in **English** and **French** (for the saints list).

Ideal for developers creating Catholic apps, websites, rosary or devotion tools, daily saint reminders, or personal prayer applications.

**Live API**: [https://the-collection-of-catholic-prayers-api.vercel.app](https://the-collection-of-catholic-prayers-api.vercel.app/)  
(Root endpoint returns: `{"message":"App is active!"}`)

**GitHub Repository**: [https://github.com/erickouassi/The-Collection-of-Catholic-Prayers-Api](https://github.com/erickouassi/The-Collection-of-Catholic-Prayers-Api)

## Features

- Simple RESTful endpoints with clean JSON responses
- No authentication or API keys required
- Bilingual saints list (English and French)
- Core content includes:
  - Common basic prayers (e.g., Our Father, Hail Mary, Glory Be)
  - The 14 Stations of the Cross with meditations and prayers
  - Full liturgical calendar of saints and feast days (366 entries)
- High availability via Vercel deployment
- Built with Node.js

## API Endpoints

All endpoints are prefixed with `/v1` and return JSON.

| Method | Endpoint                | Description                                | Language |
|--------|-------------------------|--------------------------------------------|----------|
| GET    | `/v1/basic_prayers`     | Array of common Catholic prayers (with text and HTML versions) | English |
| GET    | `/v1/stations_of_cross` | Array of the 14 Stations of the Cross (with title, adoration, meditation, and prayer) | English |
| GET    | `/v1/saints`            | Array of 366 saints/feast days (chronological by month/day) | English |
| GET    | `/v1/saints_fr`         | Array of 366 saints/feast days                      | French  |

**Direct Links**:
- [Basic Prayers](https://the-collection-of-catholic-prayers-api.vercel.app/v1/basic_prayers)
- [Stations of the Cross](https://the-collection-of-catholic-prayers-api.vercel.app/v1/stations_of_cross)
- [Saints (English)](https://the-collection-of-catholic-prayers-api.vercel.app/v1/saints)
- [Saints (French)](https://the-collection-of-catholic-prayers-api.vercel.app/v1/saints_fr)

## Example Usage

```javascript
// Fetch and display basic prayers
fetch('https://the-collection-of-catholic-prayers-api.vercel.app/v1/basic_prayers')
  .then(response => response.json())
  .then(data => {
    data.forEach(prayer => {
      console.log(prayer.title); // Note: field is "tilte" in JSON (typo)
      console.log(prayer.prayerText);
    });
  })
  .catch(error => console.error('Error:', error));
```

All responses are pure JSON — easy to integrate into any frontend or mobile app.

## Local Development

To run locally:

```bash
git clone https://github.com/erickouassi/The-Collection-of-Catholic-Prayers-Api.git
cd The-Collection-of-Catholic-Prayers-Api
npm install
npm start
```

Server runs at `http://localhost:3000`.

## Contributing

Contributions are encouraged! You can:
- Report bugs or request features
- Suggest additional prayers, devotions, or translations
- Improve data accuracy or add new endpoints
- Submit pull requests

Fork the repo, create a branch, and open a PR.

## License

Licensed under the **MIT License**. See the [LICENSE file](https://github.com/erickouassi/The-Collection-of-Catholic-Prayers-Api/blob/main/LICENSE) for details.

## About

Created and maintained by [@erickouassi](https://github.com/erickouassi).  
Part of a collection of open-source tools to support Catholic faith and development.

Thank you for helping spread authentic Catholic resources! 🙏




