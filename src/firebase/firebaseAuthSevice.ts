import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import {auth} from "../configurations/firebase-config.ts";
import type {LoginData, SignupData} from "../utils/shop-types.ts";


const loginWithEmail = async (data: LoginData) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log(auth.currentUser);

    return auth.currentUser;
}

const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(auth.currentUser);
    return Promise.resolve(user);
}

export const login = async (data: LoginData) => {
    return data.email === "GOOGLE" ? loginWithGoogle() : loginWithEmail(data);
}

export const registerWithEmailAndPassword = async (data: SignupData) => {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    return await updateProfile(userCredential.user, {displayName: data.fullName});
}


export const exit = async () => {
    await signOut(auth);
}

export const nameUser = () => {
    return auth.currentUser?.displayName || 'Anonymous';
}