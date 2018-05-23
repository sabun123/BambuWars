export const APP_START = 'APP_START';

export function startApp(){
    return {
        type: APP_START,
        started: true
    }
}