# easyCookies.js
easyCookies.js is a small library that simplifies using cookies in browser.  
Hope you like it :)

**current version** 1.0.0

----------

## Featuress

### cookies
- get
- set
* expires (future)


## Documentation

### Reading cookie

```javascript
// document.cookie -> "1x1=foo;foo=%5B1,2,3,4%5D"
cookies.name // -> undefined
cookies["1x1"] // -> "foo"
cookies.foo[0] // -> 1
```

If cookie does not exist value would be `undefined`.

### Saving cookie

You can save any javascript object that can be stringified by `JSON`.

```javascript
// document.cookie -> ""
cookies.name = {
    foo: "bar"
} // -> vale is returned confirming save
// document.cookie -> "name=%7B%22foo%22:%22bar%22%7D"
cookies.name = [1,2,3,4,5]
// document.cookie -> "name=%5B1,2,3,4,5%5D"
cookies.name = 1
// document.cookie -> "name=1"
```

Objects are converted to `JSON` and than encoded ( by `encodeURIComponent()` )
