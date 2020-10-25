const noUserState = {
    user: {id: undefined}
}

const initialState = {
    user: {id: undefined},
};
const userReducer = (state = initialState , action) => {
    switch(action.type){
        case "SIGN_UP" :{
            return{
                ...state,
                user : action.user
            }
        }
        default:{
            return state;
        }
    }
}

export default userReducer;