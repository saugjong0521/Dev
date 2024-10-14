

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

const instance = axios.