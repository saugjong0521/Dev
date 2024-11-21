

// 자바 스크립트 방식
function addJsVer(num01, num02){
    return num01 + num02;
}
console.log(addJsVer(10, 20))
// 타입 지정이 없음

// 타입 스크립트 방식
function addTsVer(num01 : number, num02 : number) : number {
    return num01 + num02
}
console.log(addTsVer(10, 20))


// 객체를 병합 (자바 스크립트 방식)
function mergeJsVer (obj01, obj02){
    return {...obj01, ...obj02}
}
console.log(mergeJsVer({name: 'park'},{age: 40}))

// 타입스크립트에서 객체의 병합은 제네릭 방식( 제네릭 방식: 다양한 객체 타입을 병합할 수 있도록 유연성을 제공하는 메소드 )
/*
제네릭 방식에서 사용되는 타입변수 이름들
T : TYPE
U : TYPE 외에 들어올수 있는 또 다른 타입
K : 객체의 KEY TYPE
V : 객체의 VALUE(값) TYPE
*/
function mergeTsVer<T,U>(obj01 : T, obj02 : U) : T & U{
    return{...obj01, ...obj02}
}
console.log(mergeTsVer({name : '김성종'}, {age : 29 }))


function items<T>(item : T) : T {
    return item
}
console.log(items('text'))
console.log(items(12345))
// any와 제네릭 타입의 차이는 결과값은 같지만, 안정성의 차이(타입검사의 진행여부)에 따라 선택할 수 있다. (unknown과 비슷)


function result <T> (item : T) : T {
    return item
}
let result01 = result<string>('hi');
console.log(result01.toUpperCase())

let result02 = result<number>(1212);
// console.log(result02.toUpperCase()) // 에러


function resultAny (item : any) : any {
    return item;
}
let resultAny01 = resultAny(1212);
// console.log(resultAny01.toUpperCase())





// 선택옵션 변수

// 기본 변수값에서 변수가 선언되지 않은 경우, 유효성 검사에서 에러가 출력
/*
아래의 코드는 에러
function nameItem (firstName : string, lastName : string){
    console.log(firstName, lastName)
}
nameItem('lee')
 */

function nameItem2 (firstName: string, lastName?: string) :void {
    console.log(firstName, lastName)
}
nameItem2('이')


function nameItem3 (firstName: string, lastName: string = '순신') {
    console.log(firstName, lastName)
}
nameItem3('이')

// 변수명 뒤에 ?가 붙게 되면 필수값이 아닌 선택값으로 변경
// ? 가 없으면 무조건적으로 필수값이 되며, 생략할 경우 유효성 검사에서 에러
// ? 를 작성 후에는 유효성 검사에서 검사되지 않으며, 기본값은 undefined가 된다.



// 비동기 통신
function fetchData(url: string) : Promise<string> {
    return new Promise((res)=>{
        setTimeout(() => {
            res('data' + url)
        }, 100)
    })
}
fetchData('https://www.naver.com').then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.error(error)
})

//aync-await버전
async function fromData(){
    try {
        const data = await fetchData('https://www.daum.net')
        console.log(data)
    } catch(error){
        console.error(error)
    }
}
fromData();