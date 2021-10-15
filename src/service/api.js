const API = 'https://vpic.nhtsa.dot.gov/api'

export function getVin(vin) {
    return fetch(`${API}/vehicles/decodevin/${vin}?format=json `).then((res) => {
        return res.json();
    })
}

export function getList() {
    return fetch(`${API}/vehicles/getvehiclevariablelist?format=json `).then((res) => {
        return res.json();
    })
}