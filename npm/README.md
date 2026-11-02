# World Time API

World Time looks up the current local time, date, and timezone for any city, or for any latitude and longitude. Search by city name to get matching locations with country codes, IANA timezone identifiers, UTC offsets, and formatted times in 12-hour, 24-hour, and ISO 8601 formats.

[![npm version](https://img.shields.io/npm/v/@apiverve/worldtime.svg)](https://www.npmjs.com/package/@apiverve/worldtime)

This is a JavaScript wrapper for the [World Time API](https://apiverve.com/marketplace/worldtime?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/worldtime
```

Using yarn:
```shell
yarn add @apiverve/worldtime
```

---

## Configuration

Before using the World Time API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The World Time API documentation is found here: [https://docs.apiverve.com/ref/worldtime](https://docs.apiverve.com/ref/worldtime?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const worldtimeAPI = require('@apiverve/worldtime');
const api = new worldtimeAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  city: "San Francisco"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  city: "San Francisco"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  city: "San Francisco"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "search": "San Francisco",
    "foundCities": [
      {
        "city": "San Francisco",
        "city_ascii": "San Francisco",
        "country": "Argentina",
        "iso2": "AR",
        "iso3": "ARG",
        "province": "Córdoba",
        "timezone": "America/Argentina/Cordoba",
        "time": "17:51",
        "time24": "17:51:13",
        "time12": "05:51:13 PM",
        "date": "2026-10-26",
        "day": "Monday",
        "month": "October",
        "year": "2026",
        "unix": "1793047873",
        "dst": false,
        "dst_start": null,
        "dst_end": null,
        "dst_name": "-03",
        "utc_offset": "-03:00",
        "datetime": "2026-10-26T17:51:13-03:00",
        "utc_datetime": "2026-10-26T20:51:13Z",
        "day_of_year": 299,
        "week_number": 44
      },
      {
        "city": "San Francisco",
        "city_ascii": "San Francisco",
        "country": "United States of America",
        "iso2": "US",
        "iso3": "USA",
        "province": "California",
        "state_ansi": "CA",
        "timezone": "America/Los_Angeles",
        "time": "13:51",
        "time24": "13:51:13",
        "time12": "01:51:13 PM",
        "date": "2026-10-26",
        "day": "Monday",
        "month": "October",
        "year": "2026",
        "unix": "1793047873",
        "dst": true,
        "dst_start": "2026-03-08 03:00:00",
        "dst_end": "2026-11-01 01:00:00",
        "dst_name": "PDT",
        "utc_offset": "-07:00",
        "datetime": "2026-10-26T13:51:13-07:00",
        "utc_datetime": "2026-10-26T20:51:13Z",
        "day_of_year": 299,
        "week_number": 44
      }
    ]
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
