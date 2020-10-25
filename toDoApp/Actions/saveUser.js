export const saveUser = (userDets) =>(
    {
        type:"SIGN_UP",
        userDets: {
            name: userDets.name,
            password: userDets.password,
            email: userDets.email
    }
});