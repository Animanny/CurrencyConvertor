# CurrencyConvertor

This simple website takes user inputted values and instantly converts it to another currency of their choice. The conversion rates are pulled from the (Exchange Rates API)[https://exchangeratesapi.io] which uses data published by (European Central Bank)[https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html]

## Story and Challenges
This project was built to help me learn Javascript, JQuery, and API Usage. I wanted to build a simple currency converter that would get conversion rates from an API Source. The first API's documentation used JQuery AJAX Calls to retrieve information from the API. However, free calls would use HTTP (unsecured) calls. These calls are blocked by most web browsers and I had to completely re-write the code (can be seen in commit history 😅) to utilize the API linked above.
