const cookies = new Proxy({
    readCookie(name) {
        const cookies = document.cookie.split("; ")
        if (cookies[0] == "") return undefined
        for (let i = 0; i < cookies.length; i++) {
            let temp = cookies[i].split("=")
            if (temp[0] != name) continue
            try {
                return JSON.parse(decodeURIComponent(temp[1]))
            } catch (error) {
                return decodeURIComponent(temp[1])
            }
        }
        return undefined
    },
    saveCookie(name, obj, expires) {
        if (name == undefined) return
        if (typeof obj == "object") obj = JSON.stringify(obj)
        expires = expires ? "expires=" + expires.toUTCString() : ""
        document.cookie = name + "=" + encodeURIComponent(obj) + ";" + expires
    }

}, {
        get(obj, name) {
            return obj.readCookie(name)
        },
        set(obj, name, val) {
            obj.saveCookie(name, val)
        }
    })