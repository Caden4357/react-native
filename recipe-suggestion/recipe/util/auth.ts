import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '@/firebaseConfig'
export async function authorizeUser(email: string, password: string, username:string) {
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const updatedUser = await updateProfile(userCredentials.user, {displayName:username})
        console.log(userCredentials.user);
        return userCredentials.user.getIdTokenResult()
    }
    catch(err){
        console.log(err);
    }
}

export async function loginUser(email:string, password:string){
    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        return userCredentials.user.getIdTokenResult()
    }
    catch(err){
        console.log(err);
    }
}
