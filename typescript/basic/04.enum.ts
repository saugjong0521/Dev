/*
열거형 타입

객체와 같이 순번을 가진 값을 불러오게 되면 의미없는 순번 (0,1,2)와 같이 불러와지는데,
숫자 대신에 의미있는 네이밍을 넣어서 코드의 가독성을 높이는 키워드
*/

// 자바스크립트의 freeze의 문법을 사용한 방법
// 자바스크립트에는 열거형 문법대신 freeze를 사용해서 유사하게 구현할 수 있음
const apple = 0
const banana = 1
const melon = 2
const grape = 3


// 객체로 한번에 선언
const fruits = Object.freeze({apple: 0, banana: 1, melon: 2, grape: 3})
const fruitName = apple;
console.log(fruitName)
console.log(fruits.banana);



// 타입스크립트에서는 freeze 대신에 enum 이라는 키워드로 대체
// enum은 양방향 맵핑을 지원한다. (양방향은 숫자형일때만 가능)
// enum으로 선언할 때에는 대문자로 시작하는 것이 관례
// enum을 사용해서 값을 열거하면, 자동으로 인덱스 번호가 부여된다.(번호를 지정도 가능하다)
enum Fruit_enum{
    Apple,
    Banana,
    Grape,
    Melon,
    Mango
}
console.log(Fruit_enum.Apple) //키워드로 접근하는 방법 (index값 출력)
console.log(Fruit_enum[1])  // 순번으로 접근하는 방법 (key값 출력)


// 인덱스 번호를 지정해서 할당할 수도 있다. (지정하지 않은 값은 그 전의 숫자와 연결)
enum Fruit_enum02{
    Apple = 2,
    Banana,
    Grape,
    Melon = 7,
    Mango
}
console.log(Fruit_enum02.Apple)
console.log(Fruit_enum02.Banana)
console.log(Fruit_enum02.Melon)
console.log(Fruit_enum02.Mango)



enum Colors {
    Red = 'RED',
    Green = 'Green',
    Blue = 'BLUE'
}

console.log(Colors.Red)

// 문자열로 맵핑을 하게 되면, 양방향으로 맵핑이 되지 않고 단일방향으로만 된다. (문자 index는 key나 value를 찾을 수 없다.)
// 양방향 맵핑은 숫자 방식일 때만 가능
// console.log(Colors['RED']) <- 에러


enum Status01{
    Loading = 'loading', 
    Success = 'success',
    Error = 'error'
}
function logStatus(status : Status) {
    switch (status){
        case Status01.Loading:
            console.log('로딩중입니다.')
            break;
        
        case Status01.Success:
            console.log('성공!')
            break;

        case Status01.Error:
            console.log('실패!')
            break;
    }
}
logStatus(Status01.Loading)

/*
enum을 사용하는 경우
가독성 / 유지보수 / 타입의 안정성

의미없는 숫자대신 의미있는 이름을 사용해서 코드의 목적성을 명확하게 전달할 수 있으며,
값이 변경되거나 추가될때 enum으로 선언된 값만 수정하면 되기에 유지보수에 장점이 생긴다.
컴파일 단계에서 잘못된 값을 전달하는것을 미연에 방지할 수 있다.
*/