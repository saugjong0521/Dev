"use strict";
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
class PizzaMaker {
    constructor(pizzaCount) {
        this.pizzaCount = pizzaCount;
    }
    makePizza(size, topping) {
        if (this.pizzaCount <= 0) {
            console.log('Sold Out');
            throw new Error('피자 도우가 없습니다. 도우를 추가해주세요.');
        }
        this.pizzaCount -= 1;
        const baseTime = size === 'L' ? 20 : size === 'M' ? 15 : 10;
        const toppingTime = 1;
        const totalTime = baseTime + (topping.length * toppingTime);
        console.log(`피자를 만드는 중입니다. 예상 소요시간은 ${totalTime}분 입니다.`);
        return {
            size,
            topping,
            time: `${totalTime}분`
        };
    }
    calcPrice(pizza) {
        const sizePrice = pizza.size === 'L' ? 1.5 : pizza.size === 'M' ? 1.2 : 1.0;
        return ((PizzaMaker.basePrice + pizza.topping.length * PizzaMaker.baseToppingPrice) * sizePrice);
    }
    checkStatus() {
        console.log(`남은 피자 도우 갯수: ${this.pizzaCount}`);
    }
}
PizzaMaker.basePrice = 10;
PizzaMaker.baseToppingPrice = 2;
class CheesePizzaMaker extends PizzaMaker {
    makePizza(size, topping) {
        const cheeseTopping = ['cheese', ...topping];
        return super.makePizza(size, cheeseTopping);
    }
}
class PepperroniPizzaMaker extends PizzaMaker {
    makePizza(size, topping) {
        const salamiTopping = ['salami', ...topping];
        return super.makePizza(size, salamiTopping);
    }
}
class BulgogiPizzaMaker extends PizzaMaker {
    makePizza(size, topping) {
        const bulgogiTopping = ['bulgogi', ...topping];
        return super.makePizza(size, bulgogiTopping);
    }
}
const makers = [
    new PizzaMaker(5),
    new CheesePizzaMaker(5),
    new PepperroniPizzaMaker(3),
    new BulgogiPizzaMaker(2)
]; // 이게 그럼 각 피자들의 수량에 대한 정의인가?
makers.forEach(el => {
    console.log('----------------------');
    const pizza = el.makePizza(`M`, ['mushroom', 'olive']);
    console.log(pizza);
    const price = el.calcPrice(pizza);
    console.log(`피자 가격은 ${price}원 입니다.`);
    el.checkStatus();
}); // 그리고 각 피자들을 M 사이즈로 하나씩 만든건가
