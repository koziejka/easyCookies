# easyCookies.js
easyCookies.js is a small library that simplifies using cookies in browser.
Hope you like it :)

**current version** 1.1.0

----------

## Featuress

### cookies
- get
- set
- expires
- path


## Documentation

### Reading cookie

```javascript
// document.cookie -> '1x1="foo";foo=%5B1,2,3,4%5D'
cookie.name // -> null
cookie["1x1"] // -> "foo"
cookie.foo[0] // -> 1
cookies // -> {"1x1": "foo", foo: [1,2,3,4]}
```

If cookie does not exist value would be `undefined`.

### Saving cookie

You can save any javascript object that can be stringified by `JSON.stringify()`.

```javascript
// document.cookie -> ""
cookie.name = { foo: "bar" } // -> value is returned confirming save
// document.cookie -> "name=%7B%22foo%22:%22bar%22%7D"
cookie.name = [1, 2, 3, 4, 5]
// document.cookie -> "name=%5B1,2,3,4,5%5D"
cookie.name = 1
// document.cookie -> "name=1"
cookie.name = new Cookie("foo", new Date("1-1-2020"), "/")
// document.cookie -> "name=%22foo%22;expires=Fri, 31 Dec 1999 23:00:00 GMT;path=/;"
cookie.name = new Cookie(1)
// document.cookie -> "name=1"
```

Objects are converted to `JSON` and than encoded ( by `encodeURIComponent()` )

## Changelog

### 1.1.0
- Renamed `cookies` to `cookie`
- Rewrite geting cookies using regex
- Added Cookie class used to set all properites of cookie