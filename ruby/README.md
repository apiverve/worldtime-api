# World Time API - Ruby Gem

World Time looks up the current local time, date, and timezone for any city. Search by city name to get matching locations with country codes, IANA timezone identifiers, and formatted times in 12-hour and 24-hour formats.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_worldtime'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_worldtime
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_worldtime'

# Initialize the client
client = APIVerve::Worldtime::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ city: "San Francisco" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ city: "San Francisco" })
  puts response["data"]
rescue APIVerve::Worldtime::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Worldtime::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Worldtime::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/worldtime?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/worldtime?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/worldtime?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
