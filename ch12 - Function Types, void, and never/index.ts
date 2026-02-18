// 함수 타입
// 자바스크립트에서는 함수를 값으로 전달할 수 있습니다.
// 즉, 함수를 가지기 위한 매개변수 또는 변수의 타입을 선언하는 방법이 필요합니다.
// 함수 타입 구문은 화살표 함수와 유사하지만 함수 본문 대신 타입이 있습니다.

let fn:() => string;

// 위 fn 변수 타입은 매개변수가 없고, string 타입을 반환하는 함수임을 설명합니다.
// 다음 inputAndOutput 변수 타입은 string[] 매개변수와 count 선택적 매개변수 및 number 값을 반환하는 함수임을 설명합니다.

let inputAndOutput: (values: string[], count?: number) => number;

// 함수 타입은 콜백 매개변수(함수로 호출되는 매개변수)를 설명하는 데 자주 사용됩니다.

const users = ["김아무개", "이아무개", "박아무개"];

function findUser(getUserAt: (index: number) => string) {
    for(let i = 0; i < users.length; i++) {
        console.log(getUserAt(i));
    }
}

function getUserAt(index: number) {
    return `${users[index]}`;
}
findUser(getUserAt); // OK

function logUser(user: string) {
    return `${user}`;
}
findUser(logUser); // Error: '(user: string) => string' 형식의 인수는 '(index: number) => string' 형식의 매개 변수에 할당될 수 없습니다.

// 함수 타입 괄호
// 함수 타입은 다른 타입이 사용되는 모든 곳에 배치할 수 있습니다. 여기에는 유니언 타입도 포함됩니다.
// 유니언 타입의 애너테이션에서 함수를 반환 위치를 나타내거나 유니언 타입을 감싸는 부분을 표시할 때 괄호를 사용합니다.

// 타입은 string | undefined 유니언을 반환하는 함수
let returnStringOrUndefined: () => string | undefined;

// 타입은 undefined나 string을 반환하는 함수
let maybeReturnString: (() => string) | undefined;

// 매개변수 타입 추론
// 매개변수로 사용되는 인라인 함수를 포함하여 작성한 모든 함수에 대해 매개변수를 선언해야 한다면 번거로울 것입니다.
// 다행히도 타입스크립트는 선언된 타입의 위치에 제공된 함수의 매개변수 타입을 유추할 수 있습니다.

let singer: (song: string) => string;

// 아래 singer 변수는 string 타입의 매개변수를 갖는 함수로 알려져 있으므로 singer가 할당되는 함수 내의 song 매개변수는 string으로 예측됩니다.
singer = function (song) {
    return `Singer: ${song.toUpperCase()}`; // OK
};

// 함수를 매개변수로 갖는 함수에 인수로 전달된 함수는 해당 매개변수 타입도 잘 유추할 수 있습니다.
// 예를 들어, 다음 user와 index 매개변수는 타입스크립트에 따라 각각 string, number로 유추됩니다.

const users = ["김아무개", "이아무개", "박아무개"];

users.forEach((user, index) => {
    console.log(`${user} is at index ${index}`);
});

// 함수 타입 별칭
// 함수 타입에서도 동일하게 타입 별칭을 사용할 수 있습니다.

type StringToNumber = (input: string) => number;

let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length; // OK
stringToNumber = (input) => input.toUpperCase(); // Error: 'string' 형식은 'number' 형식에 할당할 수 없습니다.

// void 반환 타입과 never 반환 타입
// 일부 함수는 어떤 값도 반환하지 않습니다. 예를 들어 return 문이 없는 함수이거나 값을 반환하지 않는 return 문을 가진 함수일 경우입니다.
// 타입스크립트 void 키워드를 사용해 반환 값이 없는 함수의 반환 타입을 확인할 수 있습니다.

function findUser(user: string | undefined): void {
    if (!user) return;
    console.log(`Find User: ${user}`);
    return true; // Error: 'boolean' 형식은 'void' 형식에 할당할 수 없습니다.
}

// 자바스크립트 함수는 실젯값이 반환되지 않으면 기본적으로 모두 undefined를 반환하지만 void와 undefined는 동일하지 않습니다.
// void는 함수의 반환 타입이 무시된다는 것을 의미하고, undefined는 반환되는 리터럴 값입니다.
// undefined를 포함하는 대신 void 타입의 값을 할당하려고 하면 타입 오류가 발생합니다.

// never 반환 함수는 (의도적으로) 항상 오류를 발생시키거나 무한 루프를 실행하는 함수입니다.
// 함수가 절대 반환하지 않도록 의도하려면 명시적 : never 타입 애너테이션을 추가해 해당 함수를 호출한 후 모든 코드가 실행되지 않음을 나타냅니다.

function fail(message: string): never {
    throw new Error(`알 수 없는 오류 발생: ${message}`);
}

function workWithUnsafeParam(param: unknown) {
    if (typeof param != "string") {
        fail("Param의 데이터 타입은 문자열(string)이어야 합니다.");
    }

    // 여기서 param의 타입은 string으로 알려집니다.
    param.toUpperCase();
}