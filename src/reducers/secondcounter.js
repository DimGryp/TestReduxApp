const secondcounterReducer = (state = 1,action) => {
    switch (action.type){
        case "SECONDCOUNTERINCREMENT":
            return state + 1
        case "SECONDCOUNTERDECREMENT":
            return state - 1
        default: 
            return state
    }
}

//DimGryp comment
//JGryp comment

export default secondcounterReducer
