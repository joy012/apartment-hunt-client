export const ADD_SERVICE = 'ADD_SERVICE';

export const addService = (service)=>{ // currently no action is set
    return{
        type: ADD_SERVICE,
        service
    }
}