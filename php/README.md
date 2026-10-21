# World Time API - PHP Package

World Time looks up the current local time, date, and timezone for any city. Search by city name to get matching locations with country codes, IANA timezone identifiers, and formatted times in 12-hour and 24-hour formats.

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
        "time": "19:33",
        "time24": "19:33:04",
        "time12": "07:33:04 PM",
        "date": "2025-12-16",
        "day": "Tuesday",
        "month": "December",
        "year": "2025",
        "unix": "1765924384",
        "dst": false,
        "dst_start": "2025-12-16 19:33:04",
        "dst_end": "2025-12-16 19:33:04",
        "dst_name": "-03"
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
        "time": "14:33",
        "time24": "14:33:04",
        "time12": "02:33:04 PM",
        "date": "2025-12-16",
        "day": "Tuesday",
        "month": "December",
        "year": "2025",
        "unix": "1765924384",
        "dst": false,
        "dst_start": "2025-12-16 14:33:04",
        "dst_end": "2025-12-16 14:33:04",
        "dst_name": "PST"
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
