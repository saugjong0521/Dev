/*
피자를 만드는 로직

1. 피자의 타입 선언
- 파자의 사이즈(S, M, L, XL)
- 토핑 추가(피자에 추가되는 토핑) - 토핑 추가시 요금 추가되도록
- 소요시간

class로 피자의 로직 설계
- 피자의 갯수를 설정하고, 갯수를 다 소진하며 soldout이 되도록 설계
- 각 피자메이커를 사용해서 피자를 만들고 결과와 가격을 출력

*/

type Pizza = {
    size: string,
    topping: string[],
    time?: string   //?는 선택, 필수가 아니게 만드는 요소
}

class PizzaMaker {
    static basePrice : number = 10;
    static baseToppingPrice : number = 2;
    pizzaCount : number;

    constructor(pizzaCount: number){
        this.pizzaCount = pizzaCount;
    }

    makePizza(size: string, topping: string[]): Pizza{
        if(this.pizzaCount <= 0){
            console.log('Sold Out')
            throw new Error('피자 도우가 없습니다. 도우를 추가해주세요.')
        }
        this.pizzaCount -= 1;

        const baseTime = size === 'L' ? 20 : size === 'M' ? 15 : 10;
        const toppingTime = 1
        const totalTime = baseTime + (topping.length * toppingTime)

        console.log(`피자를 만드는 중입니다. 예상 소요시간은 ${totalTime}분 입니다.`)

        return{
            size,
            topping,
            time: `${totalTime}분`
        }
    }

    calcPrice(pizza: Pizza): number{
        const sizePrice = pizza.size === 'L' ? 1.5 : pizza.size === 'M' ? 1.2 : 1.0;
        return(
            (PizzaMaker.basePrice + pizza.topping.length * PizzaMaker.baseToppingPrice) * sizePrice
        )
    }

    checkStatus() :void{
        console.log(`남은 피자 도우 갯수: ${this.pizzaCount}`)
    }
}

class CheesePizzaMaker extends PizzaMaker{
    makePizza(size: string, topping: string[]): Pizza {
        const cheeseTopping = ['cheese', ...topping];
        return super.makePizza(size, cheeseTopping)
    }
}

class PepperroniPizzaMaker extends PizzaMaker{
    makePizza(size: string, topping: string[]): Pizza {
        const salamiTopping = ['salami', ...topping];
        return super.makePizza(size, salamiTopping)
    }
}

class BulgogiPizzaMaker extends PizzaMaker{
    makePizza(size: string, topping: string[]): Pizza {
        const bulgogiTopping = ['bulgogi', ...topping];
        return super.makePizza(size, bulgogiTopping)
    }
}