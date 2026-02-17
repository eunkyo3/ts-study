// 내로잉 narrowing: 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것 
// 값의 정의, 선언 혹은 이전에 유추된 것보다 더 구체적인 타입임을 코드에서 유추하는 것입니다.
// 타입스크립트가 값의 타입이 이전에 알려진 것보다 더 좁혀졌다는 것을 알게 되면 값을 더 구체적인 타입으로 취급합니다.
// 타입을 좁히는데 사용할 수 있는 논리적 검사를 타입 가드(Type Guard)라고 합니다.

// 값 할당을 내로잉
let scientist: string | number;
scientist = "eunkyo";
scientist.toString(); // OK
scientist.toFixed(); // Error: 'toFixed' 속성이 'string' 형식에 없습니다.

let inventor: number | string = "eunkyo";
inventor.toString(); // OK
inventor.toFixed(); // Error: 'toFixed' 속성이 'string' 형식에 없습니다.

// 조건 검사를 통한 내로잉
let teacher = Math.random() > 0.5 ? "Franklin" : 51;

if (teacher === "Franklin") {
    // teacher: string 타입
    teacher.toUpperCase();
} else if (teacher === 51) {
    // teacher: number 타입
    teacher.toFixed();
}

teacher.toUpperCase(); // Error: 'string | number' 형식에 'toUpperCase' 속성이 없습니다.


// typeof 검사를 통한 내로잉
let researcher = Math.random() > 0.5 ? "Franklin" : 51;

if (typeof researcher === "string") {
    // researcher: string 타입
    researcher.toUpperCase();
} else {
    // teacher: number 타입
    researcher.toFixed();
}

if (!(typeof researcher === "string")) {
    researcher.toFixed();
} else {
    researcher.toUpperCase();
}

typeof researcher === "string" ? researcher.toUpperCase() : researcher.toFixed();