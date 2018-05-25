export const APP_START = 'APP_START';
export const REQUEST_STARSHIP = 'REQUEST_STARSHIP';
export const RECEIVE_STARSHIP = 'RECEIVE_STARSHIP';
import { get } from 'axios';

export function startApp() {
    return {
        type: APP_START,
        started: true
    }
}

function request_starship() {
    console.log("REQUESTING STARSHIP")
    return {
        type: REQUEST_STARSHIP
    }
}

function receive_starship(json) {
    console.log("RECEIVED JSON: ", json)
    return {
        type: RECEIVE_STARSHIP,
        shipInfo: json
    }
}

export function fetchStarship() {
    console.log("fetchStarship called!")
    return function (dispatch) {

        dispatch(request_starship())

        return get(`http https://swapi.co/api/starships/9/`)
        .then(
            response => response.json(),
            error => console.log("The SWAPI call failed! ", error)
        )
        .then(
            json => dispatch(receive_starship(json))
        )
    }
}