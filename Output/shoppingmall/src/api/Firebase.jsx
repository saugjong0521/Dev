import { initializeApp } from "firebase/app" ;
import { get, getDatabase, ref } from "firebase/database" ;
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";



const firebaseConfig = {
    apiKey : process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain : process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId : process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket : process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    databaseURL : process.env.REACT_APP_FIREBASE_DB_URL,
}

/*
process.env = 환경변수 node.js에 전역객체
환경변수: 실행중인 프로세스에 사용할 수 있고, 애플리케이션을 구현하는 키값으로 이루어진 변수
외부에서 값을 받아와서 설정할 수 있게 코드를 직접 하드코딩하지 않고, 설정, 개인정보와 같은 민감한 정보들을 매개변수로 분리해서 관리하는 용도로 사용

process = 현재 node.js에서 프로세스의 전역객체로 실행중인 프로세스에 접근해서 정보를 받아옴
.env = process에서 사용할 수 있는 모든 환경변수를 포함하는 객체(기본 환경파일)

*/

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()
const database = getDatabase(app);


//구글 자동로그인 방지
provider.setCustomParameters({
    prompt: 'select_account',
})

//구글 로그인
export async function googleLogin(){
    try {
        const res = await signInWithPopup(auth, provider);
        const user = res.user;
        console.log(user);

        return user;
    } catch(error){
        console.error(error);
    }
}

//리 로드에도 로그인 상태 유지
export function onUserState(callback){
    onAuthStateChanged(auth, async(user)=>{
        if (user) {
                const updateUser = user;
                callback(updateUser);
        }
    })
}
// onAuthStateChanged = 사용자 인증 상태의 변화를 체크하는 훅

// 관리자 계정 추가
async function adminUser(user){
    try {
        const snapshot = await get(ref(database, 'admin'))
    }
}

// 구글 로그아웃
export async function googleLogout (){
    try{
        await signOut(auth)
    } catch (error){
        console.error(error)
    }
}