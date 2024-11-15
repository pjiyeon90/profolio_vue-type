// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// firebase 설정
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIRE_APIKEY,
  authDomain: process.env.VUE_APP_FIRE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIRE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIRE_MESSAGE_ID,
  appId: process.env.VUE_APP_FIRE_APP_ID
};

// firebase 초기화
const app = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(app);


// 이메일 저장 함수
export const saveEmailToFirestore = async (email:string) => {
  console.log(email)
    try {
      // 'email' 컬렉션에 이메일 저장
      const docRef = await addDoc(collection(firebaseDb, "email"), {
        email: email,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e; // 오류를 상위로 전달하여 처리
    }
  };

export default firebaseDb;
