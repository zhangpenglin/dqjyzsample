'use strict'
const token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im5pdXpvbmdsaW5fcXQiLCJpYXQiOjE0NjkxNjg1MjYsImV4cCI6MTQ2OTM0MTMyNn0.6DOpUgZWFoek75TYlO0o4kOC75nZN5soOxfoulzaqyY"
export function get(url, data = {}) {
    Object.keys(data).forEach((param)=> {
        const k = `:${param}`;
        const v = encodeURIComponent(data[param]);
        url = url.replace(k, v)
    });
    console.log(url)
    return fetch(url,{
        headers:{
            "Authorization":token
        }
    }).then(ret=>ret.json())
        .catch(e=>{
            console.log(e)
        })
}

export function post(url, data = {}) {
    return fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization":token
        },
        body: JSON.stringify(data)
    }).then((ret)=> {
        return ret.json()
    })
}

export function del (url, data = {}){
    return fetch(url, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization":token
        },
        body: JSON.stringify(data)
    }).then((ret)=> {
        return ret.json()
    })
}
