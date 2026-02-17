// 리터럴 타입
// 변수를 const로 선언하고 직접 리터럴 값을 할당하면 타입스크립트는 해당 변수를 할당된 리터럴 값으로 유추합니다.
const planner = "kyo";
let designer = "eunkyo";

// 유니언 타입 애너테이션에서는 리터럴과 원시 타입을 섞어서 사용할 수 있습니다.
// 예를 들어, lifespan은 number 타입이거나 선언된 "ongoing" 혹은 "uncertain" 값 중 하나로 나타낼 수 있습니다.
let lifespan: number | "ongoing" | "uncertain";

lifespan = 90;
lifespan = "ongoing";
lifespan = "uncertain";
lifespan = true; // Error: 'true' 형식은 'number' | "ongoing" | "uncertain" 형식에 할당할 수 없습니다.

// 초깃값이 없는 변수
// 자바스크립트에서 초깃값이 없는 변수는 기본적으로 undefined가 됩니다.
// 만약, undefined를 포함하지 않는 타입으로 변수를 선언한 다음, 값을 할당하기 전에 사용하려고 시도하면 어떻게 될까요?
// 타입스크립트는 값이 할당될 때까지 변수가 undefined임을 이해할 만큼 충분히 영리합니다.

let physicist: string;
physicist.length; // Error: 'physicist' 변수가 할당되기 전에 사용되었습니다.
physicist = "Mark Goldberg";
physicist.length; // OK

let biologist: string | undefined;
biologist?.length; // OK