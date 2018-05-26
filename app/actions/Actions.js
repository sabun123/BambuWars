export const REQUEST_ALL_PEOPLE = 'REQUEST_ALL_PEOPLE';
export const RECEIVE_ALL_PEOPLE = 'RECEIVE_ALL_PEOPLE';
export const REQUEST_PERSON_DETAILS = 'REQUEST_PERSON_DETAILS';
export const RECEIVE_PERSON_DETAILS = 'RECEIVE_PERSON_DETAILS';
import { get } from 'axios';

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

function request_person_details(person,datakey) {

    return {
        type: REQUEST_PERSON_DETAILS,
        loadingDetails: true,
        loadingStatus: datakey? "Now loading " + datakey: "loading details for " + person.name
    }
}

function receive_person_details(json) {
    return {
        type: RECEIVE_PERSON_DETAILS,
        personData: json,
        loadingDetails: false
    }
}

export function fetchPersonDetails(person, datakey) {
    return function (dispatch) {
        dispatch(request_person_details(person, datakey))

        let URL = '';
        let dataKey = '';
        let arrayPos = 0;
        let wasAnArray = false;

        // Check if the details contains any left over API references
        // except for the url key
        for (var key in person) {
            if (key != 'url' && typeof person[key] === 'string' && person[key].includes('https://swapi.co/api/')) {
                URL = person[key];
                dataKey = key;
                wasAnArray = false;
                break;
            } else if (key != 'url' && typeof person[key] === 'object') {
                // presumably it's an array based on API rules, so loop through it
                for (var [index,value] of person[key].entries()) {
                    if (value.includes("https://swapi.co/api/")) {
                        URL = value;
                        dataKey = key;
                        arrayPos = index
                        wasAnArray = true;
                        break;
                    }
                }
            } 
        }

        if(URL && URL.length > 0){
            return get(URL)
                .then(
                    response => response.data,
                    error => console.log("Failed to homeworld from SWAPI ", error)
                )
                .then(
                    json => {
                        // modify the person object, until there's no API URL's left.
                        // We only want final name data
                        if(wasAnArray && dataKey != 'films'){
                            person[dataKey][arrayPos] = json.name;
                        } else if (wasAnArray && dataKey == 'films'){
                            // why did SWAPI break their format? everything else is "name" except films which is "title"...
                            person[dataKey][arrayPos] = json.title;
                        } else {
                            person[dataKey] = json.name;
                        }

                        
                        dispatch(fetchPersonDetails(person,dataKey))
                    }
                )
        } else {
            // We've resolved all API calls, so just return complete person details
            dispatch(receive_person_details(person))
        }
    }
}
