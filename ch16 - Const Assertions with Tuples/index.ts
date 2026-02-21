// 튜플 추론
// 타입스크립트는 생성된 배열을 튜플이 아닌 가변 길이의 배열로 취급합니다. 배열이 변수의 초깃값 또는 함수에 대한 반환값으로 사용되는 경우,
// 고정된 크기의 튜플이 아니라 유연한 크기의 배열로 가정합니다.

function firstCharAndSize(input: string) {
    return [input[0], input.length]; // 반환 타입: (string | number)[]
}
const [firstChar, size] = firstCharAndSize("안녕하세요"); // firstChar의 타입: string | number, size의 타입: string | number

// 명시적 튜플 타입
// 함수에 대한 반환 타입 애너테이션처럼 튜플 타입도 타입 애너테이션을 사용할 수 있습니다.
// 함수가 튜플 타입을 반환한다고 선언되고, 배열 리터럴을 반환한다면 해당 배열 리터럴은 일반적인 가변 길이의 배열 대신 튜플로 간주합니다.

function firstCharAndSizeExplicit(input: string): [string, number] {
    return [input[0], input.length];
}
const [char, charSize] = firstCharAndSizeExplicit("안녕하세요.");

// const 어서션
// 명시적 타입 애너테이션에 튜플 타입을 입력하는 작업은 명시적 타입 애너테이션을 입력하는 때와 동일한 이유로 번거로울 수 있습니다.
// 대안으로 타입스크립트는 값 뒤에 넣을 수 있는 const 어서션인 as const 연산자를 제공합니다.
// const 어서션은 타입스크립트에 타입을 유추할 때 읽기 전용이 가능한 값 형식을 사용하도록 지시합니다.
// 다음과 같이 배열 리터럴 뒤에 as const가 배치되면 배열이 튜플로 처리되어야 함을 나타냅니다.

// 타입: (string | number)[]
const unionArray = [1157, "Tomas"];

// 타입: readonly [1157, "Tomas"]
const readonlyTuple = [1157, "Tomas"] as const;

// const 어서션은 유연한 크기의 배열을 고정된 크기의 튜플로 전환하는 것을 넘어서, 해당 튜플이 읽기 전용이고 값 수정이 예상되는 곳에서 사용할 수 없음을 나타냅니다.

const pairMutable: [number, string] = [1157, "토마스"];
pairMutable[0] = 2000; // OK

const readonlyPair = [1157, "토마스"] as const;
const pairAlsoMutable: [number, string] = readonlyPair; // Error: 'readonly [1157, "토마스"]' 형식은 'readonly'이며 변경 가능한 형식 '[number, string]'에 할당할 수 없습니다.

const pairConst = [1157, "토마스"] as const;
pairConst[0] = 2000; // Error: 읽기 전용 속성이므로 '0'에 할당할 수 없습니다.