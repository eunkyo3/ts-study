// 배열 멤버
// 타입스크립트는 배열의 멤버를 찾아서 해당 배열의 타입 요소를 되돌려주는 전형적인 인덱스 기반 접근 방식을 이해하는 언어입니다.
// 유니언 타입으로 된 배열의 멤버는 그 자체로 동일한 유니언 타입입니다.

const defenders = ["김아무개", "이아무개", "박아무개"];
const defender = defenders[0]; // 타입: string

const soldierOrDates = ["김아무개", new Date(1782, 6, 3)];
const soldierOrDate = soldierOrDates[0]; // 타입: string | Date

// 스프레드
// ... 스프레드 연산자를 사용해 배열을 결합합니다. 타입스크립트는 입력된 배열 중 하나의 값이 결과 배열에 포함될 것임을 이해합니다.
// 입력된 배열이 동일한 타입이라면, 출력 배열도 동일한 타입입니다.
// 서로 다른 타입의 두 배열을 함께 스프레드에 새 배열을 생성하면, 새 배열은 두 개의 원래 타입 중 어느 하나의 요소인 유니언 타입 배열로 이해합니다.

const soldiers = ["김아무개", "이아무개", "박아무개"]; // 타입: string[]
const soldierAges = [10, 20, 30]; // 타입: number[]
const conjoined = [...soldiers, ...soldierAges]; // 타입: (string | number)[]

// 나머지 매개변수 스프레드
// 타입스크립트는 나머지 매개변수로 배열을 스프레드하는 자바스크립트 실행을 인식하고 이에 대해 타입 검사를 수행합니다.
// 나머지 매개변수를 위한 인수로 사용되는 배열은 나머지 매개변수와 동일한 배열 타입을 가져야 합니다.

function logWarriors(greeting:string, ...names: string[]) {
    for(const name of names) {
        console.log(`${greeting}, ${name}`);
    }
}
const warriors = ["김아무개", "이아무개", "박아무개"];
const birthYears = [1844, 1840, 1592];

logWarriors("Hello", ...warriors);
logWarriors("Born in", ...birthYears); // Error: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.