const firstcounterReducer = (state = 1,action) => {
    switch (action.type){
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default: 
            return state
    }
}

//comment
//my comment
export default firstcounterReducer
