import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdTokenResult, getAuth } from "firebase/auth";
import {auth} from '@/firebaseConfig'
export async function authorizeUser(email: string, password: string, username:string) {
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const updatedUser = await updateProfile(userCredentials.user, {displayName:username})
        return userCredentials.user.getIdTokenResult()
    }
    catch(error:unknown){
        if (error instanceof Error) {
			throw new Error(error.message);
		}
		throw new Error("An unknown error occurred");
    }
}

export async function loginUser(email:string, password:string){
    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        return userCredentials.user.getIdTokenResult()
    }
    catch(error:unknown){
        if (error instanceof Error) {
			throw new Error(error.message);
		}
		throw new Error("An unknown error occurred");
    }
}

export async function getCurrentUser() {
    try{
        const user = getAuth();
        if(user){
            return user.currentUser?.displayName
        }
        return 'User';
    }
    catch(err){
        console.log('ERR Fetching User ', err);
    }
}