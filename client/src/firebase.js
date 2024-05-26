import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDcgASFGHV4-VEMoQvCxZgMvdl5zf5uLtI",
	authDomain: "cogniassess-auth.firebaseapp.com",
	projectId: "cogniassess-auth",
	storageBucket: "cogniassess-auth.appspot.com",
	messagingSenderId: "331870902098",
	appId: "1:331870902098:web:48b7c547afc672dc984c8b",
};

export const app = initializeApp(firebaseConfig);
