import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyBP8qMDcds7DtBvos7ROtIn2j69-lFu0gM",
   authDomain: "tasksapp-d206c.firebaseapp.com",
   databaseURL: "https://tasksapp-d206c-default-rtdb.firebaseio.com",
   projectId: "tasksapp-d206c",
   storageBucket: "tasksapp-d206c.appspot.com",
   messagingSenderId: "391833667376",
   appId: "1:391833667376:web:86dcc7857cb25d00342af5"
 };
 
 

 const app = initializeApp(firebaseConfig);
 export const db = getDatabase(app);