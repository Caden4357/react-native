import axios from 'axios'
const API_KEY='AIzaSyCvneac5I2nSG-kpoug4a4zzDwhIWXCrzI'

export async function createUser(email, password){
    try{
        const result = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
            {
                email,
                password,
                returnSecureToken: true
            }
        )
        // console.log('RESULT: ',result);
        return result
    }
    catch(error){
        console.log('ERROR: ',error.response.data.error.message); // handles email existing, duplicate and weak password > 6 
        throw new Error(error.response.data.error.message)
    }
}

export async function loginUser(email, password){
    try{
        const result = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
            {
                email,
                password,
                returnSecureToken: true
            }
        )
        return result
    }
    catch(error){
        console.log('ERROR: ',error.response.data.error.message); 
        throw new Error(error.response.data.error.message)
    }
}