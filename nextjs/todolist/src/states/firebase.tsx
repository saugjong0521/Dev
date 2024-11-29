// 파이어베이스 config 설정

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCGmTIb1iveCTFU_RQHSnvaph2sXe5YLE0",
  authDomain: "todolist-3cd95.firebaseapp.com",
  databaseURL: "https://todolist-3cd95-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todolist-3cd95",
  storageBucket: "todolist-3cd95.firebasestorage.app",
  messagingSenderId: "481970756686",
  appId: "1:481970756686:web:2849471a530c92266b371f"
};

  const app = initializeApp(firebaseConfig)
  const db = getDatabase(app)


  export {db}