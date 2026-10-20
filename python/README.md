World Time API
============

World Time looks up the current local time, date, and timezone for any city. Search by city name to get matching locations with country codes, IANA timezone identifiers, and formatted times in 12-hour and 24-hour formats.


[![PyPI version](https://img.shields.io/pypi/v/apiverve-worldtime.svg)](https://pypi.org/project/apiverve-worldtime/)

This is a Python wrapper for the [World Time API](https://apiverve.com/marketplace/worldtime?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-worldtime
```

Using `pip3`:

```bash
pip3 install apiverve-worldtime
```

---

## Configuration

Before using the World Time API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_worldtime.apiClient import WorldtimeAPIClient

# Initialize the client with your APIVerve API key
api = WorldtimeAPIClient("[YOUR_API_KEY]")

query = { "city": "San Francisco" }

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The World Time API documentation is found here: [https://docs.apiverve.com/ref/worldtime](https://docs.apiverve.com/ref/worldtime?utm_source=pypi&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_worldtime.apiClient import WorldtimeAPIClient

# Initialize the client with your APIVerve API key
api = WorldtimeAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = { "city": "San Francisco" }
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

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

---

## Error Handling

The API client provides comprehensive error handling through the `WorldtimeAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_worldtime.apiClient import WorldtimeAPIClient, WorldtimeAPIClientError

api = WorldtimeAPIClient("[YOUR_API_KEY]")

query = { "city": "San Francisco" }

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except WorldtimeAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_worldtime.apiClient import WorldtimeAPIClient, WorldtimeAPIClientError

api = WorldtimeAPIClient("[YOUR_API_KEY]")

query = { "city": "San Francisco" }

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except WorldtimeAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_worldtime.apiClient import WorldtimeAPIClient, WorldtimeAPIClientError

query = { "city": "San Francisco" }

# Using context manager ensures proper cleanup
with WorldtimeAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except WorldtimeAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_worldtime.apiClient import WorldtimeAPIClient

# Enable debug mode
api = WorldtimeAPIClient("[YOUR_API_KEY]", debug=True)

query = { "city": "San Francisco" }

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_worldtime.apiClient import WorldtimeAPIClient

api = WorldtimeAPIClient("[YOUR_API_KEY]")

query = { "city": "San Francisco" }

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
