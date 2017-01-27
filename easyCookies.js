/*! easyCookies v1.1.0 | (c) Maciej Kozieja | https://github.com/koziejka/easyCookies */
class Cookie {
    constructor(value, expires, path) {
        this.value = value || value
        if (expires) {
            if (typeof expires == "string") this.expires = expires
            else this.expires = expires.toUTCString()
        }
        this.path = path || null
        this.isCookie = true
    }
}
const cookie = new Proxy({}, {
    get(obj, name) {
        const cookie = RegExp(`${name}=(.*?);`).exec(document.cookie + ';')
        if (cookie == null) return null
        return JSON.parse(decodeURIComponent(cookie[1]))
    },
    set(obj, name, val) {
        let extra = ""
        if (val.isCookie) {
            if (val.expires) extra += `expires=${val.expires};`
            if (val.path) extra += `path=${val.path};`
            val = val.value
        }
        if (typeof val == 'object') {
            val = JSON.stringify(val)
        } else if (typeof val == 'string') {
            val = `"${val}"`
        }
        document.cookie = `${name}=${encodeURIComponent(val)};${extra}`
    },
    deleteProperty(obj, name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
    }
})
Object.defineProperty(window, 'cookies', {
    get() {
        const obj = {}, regex = RegExp(/(\w)+=(.*?);/g), documentCookie = document.cookie + ';'
        let cookie
        while (cookie = regex.exec(documentCookie)) {
            obj[cookie[1]] = JSON.parse(decodeURIComponent(cookie[2]))
        }
        return obj
    }
})