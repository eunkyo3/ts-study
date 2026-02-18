// 자바스크립트 배열은 이론상 어떤 크기라도 될 수 있습니다.
// 하지만 때로는 튜플(Tuple)이라고 하는 고정된 크기의 배열을 사용하는 것이 유용합니다.
// 튜플 배열은 각 인덱스에 알려진 특정 타입을 가지며, 배열의 모든 가능한 멤버를 갖는 유니언 타입보다 더 구체적입니다.
// 튜플 타입을 선언하는 구문은 배열 리터럴처럼 보이지만, 요소의 값 대신 타입을 적습니다.

let yearAndWarrior: [number, string];
yearAndWarrior = [530, "김아무개"]; // OK
yearAndWarrior = [false, "이아무개"]; // Error: 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.
yearAndWarrior = [1000]; // Error: '[number]' 형식은 '[number, string]' 형식에 할당할 수 없습니다.

// 자바스크립트에서는 단일 조건을 기반으로 두 개의 변수에 초깃값을 설정하는 것처럼 한 번에 여러 값을 할당하기 위해 튜플과 배열 구조 분해 할당을 자주 사용합니다.
let [year, warrior] = Math.random() > 0.5 ? ["340", "김아무개"] : [1828, "이아무개"];
// let [username, email] = user ? [user.username, user.email] : ["알 수 없음", "미등록"];

// 튜플 할당 가능성
// 타입스크립트에서 튜플 타입은 가변 길이의 배열 타입보다 더 구체적으로 처리됩니다. 즉, 가변 길이의 배열 타입은 튜플 타입에 할당할 수 없습니다.
// 다음 코드에서 pairLoose 내부의 [boolean, number]가 있는 것을 볼 수 있지만, 타입스크립트는 더 일반적인 (boolean, number)[] 타입으로 유추합니다.

const pairLoose = [false, 123];
const pairTupleLoose: [boolean, number] = pairLoose; // Error: '(number | boolean)[]' 형식은 '[boolean, number]' 형식에 할당할 수 없습니다. 대상에 2개의 요소가 필요하지만, 소스에 더 적게 있을 수 있습니다.

// pairLoose가 [boolean, number] 자체로 선언된 경우 pairTupleLoose에 대한 값 할당이 허용되었을 것입니다.
// 하지만 타입스크립트는 튜플 타입의 튜플에 얼마나 많은 멤버가 있는지 알고 있기 때문에 길이가 다른 튜플은 서로 할당할 수 없습니다.

// 다음 tupleTwoExtra는 정확히 두 개의 멤버를 가져야 하므로 tupleThree가 올마른 멤버로 시작하더라도 세 번째 멤버는 tupleTwoExtra에 할당할 수 없습니다.

const tupleThree: [boolean, number, string] = [false, 1592, "LEE"];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];
const tupleTwoExtra: [boolean, number] = tupleThree; // Error: '[boolean, number, string]' 형식은 '[boolean, number]' 형식에 할당할 수 없습니다. 소스에 3개 요소가 있지만, 대상에서 2개만 허용합니다.

// 나머지 매개변수로서의 튜플
function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
}

const pairArray = ["amage", 1]; // 타입: (string | number)[]
logPair(...pairArray); // Error: 확산 인수는 튜플 유형을 가지거나 나머지 매개 변수로 전달되어야 합니다.

const pairTupleIncorrect: [number, string] = [1, "Amage"];
logPair(...pairTupleIncorrect); // Error: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.

const pairTupleCorrect: [string, number] = ["Amage", 1];
logPair(...pairTupleCorrect);