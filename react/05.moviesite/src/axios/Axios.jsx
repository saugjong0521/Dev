/*
Axios
node.js나 브라우저에서 사용할 수 있는 http기반의 클라이언트 라이브러리
외무에 있는 api와 비동기 통신을 해주는 라이브러리

yarn add axios

*/

import axios from "axios";

const API_KEY = '45c46bf12eff3ac2fd6d81c330eab994'
const BASE_URL = 'https://api.themoviedb.org/3'

/*
보통 API KEY같은 경우 개인 고유번호이기 때문에 노출되지 않아야 하지만, 현재 상태로는
서버에 올릴경우 API KEY가 그대로 노출되기 때문에 보통은 환경변수로 분리해서 작업하는 방향을 선택.

*/

const instance = axios.create({
    //axios.create() = 새로운 axios 인스턴스를 생성해서 외부 api와 연결
    //변수를 해당 컴포넌트 내부에서 호출하게 되면, 연결한 api와 통신이 시작

    baseURL : BASE_URL,
    params : {
        api_key : API_KEY,
        language : 'ko-KR'  //기본 통신 언어 설정
    }
})

// 인기있는, 현재 상영중인 영화 리스트 받아오기
export const getMovies = async(type) => {
    try{
        const res = await instance.get(`/movie/${type}`);

        return res.data.results;
    }catch(error){
        console.error(error)
    }
}


// 메인 비디오 받아오기
export const getMainVideos = async(movieId) => {
    /*
        async = 비동기 함수로 선언된 요소에 await를 사용할 수 있게 하는 메소드
        await = 비동기 작업이 완료될 때까지 코드의 실행을 중단하고 비동기 통신이 완료될 때까지 대기했다가 결과값을 반환
                비동기 함수에서만 사용 가능, async가 정의된 함수 안에서만 사용 가능


        try-catch 비동기 요청에서 발생할 수 있는 오류를 처리해주기 위해서 사용하는 구문

        try = 비동기 작업 코드 (api호출과 관련된 코드)
        catch = api 호출이 실패했을 경우에 대한 오류를 처리 -> console이나 alert로 에러 메시지, 강제로 페이지 이동시키는 등 가능
    
    */

    try {
        const res = await instance.get(`movie/${movieId}/videos`)
        return res.data.results
    } catch(error) {
        console.error(error)
    }


}


//장르 가져오기
export const getGenre = async () => {
    try{
        const res = await instance.get('/genre/movie/list')
        console.log(res)
        return res.data.genres
    } catch (error){
        console.log(error)
    }
}

export const getMovieGenre = async(genreId) => {
    try {
        const res = await instance.get(`/discover/movie`,{
            params : {
                with_genres : genreId
            }
        })
        return res.data.results
    } catch(error){
        console.error(error)
    }
}

//모달 정보 가져오기
export const getModalDetail = async(movieId, type) => {
    try(
        const = instance.get(`${type}/$(movieId)`)
        return res.data;
    )
}