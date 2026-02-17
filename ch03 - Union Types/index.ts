// 유니언 union: 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것

let mathematician = Math.random() > 0.5 ? undefined : "string";

// 둘 다 잠재적인 타입이긴 하지만, 무조건 undefined 이거나 혹은 string인 것도 아닙니다.
// mathematician은 undefined이거나 string일 수 있습니다. 이렇게 "이거 혹은 저거"와 같은 타입을 유니언이라고 합니다.
// 유니언 타입은 값이 정확히 어떤 타입인지 모르지만 두 개 이상의 옵션 중 하나라는 것을 알고 있는 경우에 코드를 처리하는 훌륭한 개념입니다.

// 유니언 타입 선언
// 유니언 타입 선언의 순서는 중요하지 않습니다.
let user1: string | null = null;
// let user1: null | string = null;

if (Math.random() > 0.5) {
    user1 = "eunkyo";
} else {
    user1 = 1000;
}

// 유니언 속성
// 값이 유니언 타입일 때, 타입스크립트는 유니언으로 선언한 모든 가능한 타입에 존재하는 멤버 속성에만 접근할 수 있습니다.
// 유니언 외에 타입에 접근하려고 하면 타입 검사 오류가 발생한다.

let developer = Math.random() > 0.5 ? "eunkyo" : 1000;
developer.toString(); // OK
developer.toUpperCase(); // Error: 'number' 형식에 'toUpperCase' 속성이 없습니다.
developer.toFixed(); // Error: 'string' 형식에 'toFixed' 속성이 없습니다.