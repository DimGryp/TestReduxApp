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
//my comment 2
//my comment 6
export default firstcounterReducer
