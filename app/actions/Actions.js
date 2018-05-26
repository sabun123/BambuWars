export const APP_START = 'APP_START';
export const REQUEST_STARSHIP = 'REQUEST_STARSHIP';
export const RECEIVE_STARSHIP = 'RECEIVE_STARSHIP';
export const REQUEST_ALL_PEOPLE = 'REQUEST_ALL_PEOPLE';
export const RECEIVE_ALL_PEOPLE = 'RECEIVE_ALL_PEOPLE';
import { get } from 'axios';

export function startApp() {
    return {
        type: APP_START,
        started: true
    }
}

function request_starship() {
    return {
        type: REQUEST_STARSHIP
    }
}

function receive_starship(json) {
    return {
        type: RECEIVE_STARSHIP,
        shipInfo: json
    }
}

export function fetchStarship() {
    return function (dispatch) {

        dispatch(request_starship())

        return get(`https://swapi.co/api/starships/9/?format=json`)
            .then(
                response => response.data,
                error => console.log("The SWAPI call failed! ", error)
            )
            .then(
                json => dispatch(receive_starship(json))
            )
    }
}

function request_all_people() {
    return {
        type: REQUEST_ALL_PEOPLE
    }
}

function receive_all_people(json, next) {
    return {
        type: RECEIVE_ALL_PEOPLE,
        peopleData: json,
        nextURL: next
    }
}

export function fetchAllPeople(argument) {
    return function (dispatch) {
        dispatch(request_all_people())

        // SWAPI is paginated. To get all, will need to go through multiple times.
        let URL = `https://swapi.co/api/people/?format=json`;
        if (argument) {
            URL = argument;
        }

        console.log("======== ", argument)

        return get(URL)
            .then(
                response => response.data,
                error => console.log("Failed to get ALL people from SWAPI ", error)
            )
            .then(
                json => dispatch(receive_all_people(json))
            )
    }
}