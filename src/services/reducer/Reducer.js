export default function cartData(state=[],action){
    switch(action.type){
        case "ADD_DATA":
            console.log("adding data");
            console.log(action.data);
            console.log(state);
            return[...state,action.data]
        default : 
            return state
    }
}