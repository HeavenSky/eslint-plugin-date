

# eslint-plugin-date
eslint plugin to handle safely date usage.

## Features
This eslint plugin is meant to be used to avoid explicit usage/manupulation of date in JS, so to avoid issues with timezones.

## Installation
```
$ npm install --save-dev eslint-plugin-date
```

## Usage
Add to the `.eslintrc` file inside the root folder of a linted project:

```
{
  "extends": "plugin:date/recommended",
  "plugins": ["date"]
}
```

```
{
  "extends": "plugin:date/error",
  "plugins": ["date"]
}
```

```
{
  "extends": "plugin:date/warn",
  "plugins": ["date"]
}
```

```
{
  "plugins": ["date"],
  "rules": {
    "date/no-date-fns": "warn",
    "date/no-moment-dayjs": "off",
    "date/no-new-date-with-args": "error",
    "date/no-new-date-without-args": "warn"
  }
}
```

## Contributing
Source Code Reference from https://github.com/Skyscanner/eslint-plugin-skyscanner-dates
But there are specical changes for Business Scenarios and eslint 7.x.
