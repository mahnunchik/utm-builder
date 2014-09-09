# utm-builder

`utm-builder` adds custom campaign parameters to your URLs.

## Installation

```
$ npm install utm-builder --save
```

## API

`utm-builder` exports one function with the following signature:

### builder(link, source, medium, campaign, content, term)

* **link** *String* - original URL
* **source** *String* - campaign source, will be `utm_source` parameter
* **medium** *String* - campaign medium, will be `utm_medium` parameter
* **campaign** *String* - campaign name, will be `utm_campaign` parameter
* **content** *String* - campaign content, will be `utm_content` parameter (optional)
* **term** *String* - campaign term, will be `utm_term` parameter (optional)

## More information for each parameter

[Google URL builder](https://support.google.com/analytics/answer/1033867?hl=en)

### Campaign Source (utm_source)

Required. Use utm_source to identify a search engine, newsletter name, or other source.

Example: utm_source=google

### Campaign Medium (utm_medium)

Required. Use utm_medium to identify a medium such as email or cost-per-click.

Example: utm_medium=cpc

### Campaign Name (utm_campaign)

Used for keyword analysis. Use utm_campaign to identify a specific product promotion or strategic campaign.

Example: utm_campaign=spring_sale

### Campaign Content (utm_content)

Optional. Used for A/B testing and content-targeted ads. Use utm_content to differentiate ads or links that point to the same URL.

Examples: utm_content=logolink or utm_content=textlink

### Campaign Term (utm_term)

Optional. Used for paid search. Use utm_term to note the keywords for this ad.

Example: utm_term=running+shoes

## License

[MIT](https://github.com/mahnunchik/utm-builder/blob/master/LICENSE)
