# World Time API - PHP Package

World Time looks up the current local time, date, and timezone for any city, or for any latitude and longitude. Search by city name to get matching locations with country codes, IANA timezone identifiers, UTC offsets, and formatted times in 12-hour, 24-hour, and ISO 8601 formats.

## Installation

Install via Composer:

```bash
composer require apiverve/worldtime
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Worldtime\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['city' => 'San Francisco']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Worldtime\Client;
use APIVerve\Worldtime\Exceptions\APIException;
use APIVerve\Worldtime\Exceptions\ValidationException;

try {
    $response = $client->execute(['city' => 'San Francisco']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/worldtime?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/worldtime?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/worldtime?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
