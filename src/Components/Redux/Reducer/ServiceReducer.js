const { ADD_SERVICE } = require("../Actions/ServiceAction");

const initialState = {
    service: [
        {
            'id' : 0,
            'name' : 'Wide Range of Properties',
            'details': 'With a robust selection of popular properties on hand, as well as leading properties from experts.',
            'img' : 'https://i.ibb.co/6yVxdPZ/apartment-1.png',
                
        },
        {
            'id' : 1,
            'name' : 'Financing Made Easy',
            'details': 'Our stress-free finance department that can find financial solutions to save you money.',
            'img' : 'https://i.ibb.co/JKv8nxf/affordable-1.png',
                
        },
        {
            'id' : 2,
            'name' : 'Trusted by Thousands',
            'details': '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.',
            'img' : 'https://i.ibb.co/1TJkJ8C/lessee-1.png',
                
        }
    ]
}

const serviceReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_SERVICE:
            return {
                service:[...state.service] // actually add service is not applied in code , we have add this test perpous
            }
        default:
            return state;
    }
}

export default serviceReducer; 
