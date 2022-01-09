const initialState = {
    age: 8,
    history:[]
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    // if(action.type === 'AGE_UP'){
    //     newState.age = state.age + action.val;

    // }
    // if(action.type === 'AGE_DOWN'){
    //     newState.age = state.age - action.val;
    // }


    // return newState;
    
    switch(action.type){
        case 'AGE_UP_ASYNC':
            return {
                ...state,
                age: state.age + action.val,
                history: state.history.concat({age:state.age + action.val, id:Math.random() })
            }
        case 'AGE_DOWN_ASYNC':
            return {
                ...state,
                age: state.age - action.val,
                history: state.history.concat({age:state.age - action.val, id:Math.random() })
            }
        case 'DELETE_HISTORY':
            return {
                ...state,
                history: state.history.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
}

export default reducer;