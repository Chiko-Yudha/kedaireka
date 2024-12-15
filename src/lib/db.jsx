
export const db = {

    user: {
        async login(data) {
            const url = import.meta.env.VITE_API_SERVER_HOST + "/user/login";
            console.log("db.jsx",url,data)
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            const json = await response.json()
            console.log("db.jsx",response, json)
            return json
        },
        async findByToken(data) {
            const url = import.meta.env.VITE_API_SERVER_HOST + "/user/byToken";
            console.log("db.jsx",url,data)
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            const json = await response.json()
            console.log("db.jsx/user:login",response, json)
            return json
        },
    },
    command: {
        async pv(data) {
            const url = import.meta.env.VITE_API_SERVER_HOST + "/command/pv";
            console.log("db.jsx/command:pv",url,data)
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Authentication": auth().token
                },
                body: JSON.stringify(data),
            })
            const json = await response.json()
            console.log("db.jsx",response, json)
            return json
        },
    }
}