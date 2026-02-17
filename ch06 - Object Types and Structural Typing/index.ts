// 객체 타입
// { ... } 구문을 사용해서 객체 리터럴을 생성하면, 타입스크립트는 해당 속성을 기반으로 새로운 객체 타입 또는 타입 형태를 고려합니다.
// 해당 객체 타입은 객체의 값과 동일한 속성명과 원시 타입을 갖습니다.

const poet = {
    born: 2006,
    name: "eunkyo",
};

poet["born"]; // 타입: number
poet.name; // 타입: string
poet.nationality; // Error: '{ born: number; name: string; }' 형식에 'nationality' 속성이 없습니다.

// 객체 타입의 선언
// 기존 객체에서 직접 타입을 유추하는 방법도 굉장히 좋지만, 결국에는 객체의 타입을 명시적으로 선언하고 싶습니다.
// 명시적으로 타입이 선언된 객체에는 별도로 객체의 형태를 설명하는 방법이 필요합니다.

let author: {
    born: number;
    name: string;
};

author = {
    born: 1935,
    name: "Mary Oliver",
};

author = "Hello, World!" // Error: 'string' 형식은 '{ born: number; name: string; }' 형식에 할당할 수 없습니다.

// 별칭 객체 타입
// { born: number, name: string }과 같은 객체 타입을 계속 작성하는 것은 매우 귀찮습니다.
// 각 객체 타입에 타입 별칭을 할당해 사용하는 방법이 더 일반적입니다.

type Poet = {
    born: number;
    name: string;
};

let poetLater: Poet;
poetLater = {
    born: 1935,
    name: "Mary Oliver",
};
poetLater = "Hello, World!"; // Error: 'string' 형식은 'Poet' 형식에 할당할 수 없습니다.

// 구조적 타이핑
// 타입스크립트의 타입 시스템은 구조적으로 타입화(structurally typed) 되어 있습니다.
// 즉, 타입을 충족하는 모든 값을 해당 타입의 값으로 사용할 수 있습니다.
// 매개변수나 변수가 특정 객체 타입으로 선언되면, 타입스크립트에 어떤 객체를 사용하든 해당 속성이 있어야 한다고 말해야 합니다.

type WithFirstName = {
    firstname: string;
};

type WithLastName = {
    lastname: string;
};

const hasBoth = {
    firstname: "eunkyo",
    lastname: "jung",
};

let withFirstName:WithFirstName = hasBoth; // OK: 'hasBoth'는 'string' 타입의 'firstname'을 포함하고 있다.
let withLastName:WithLastName = hasBoth; // // OK: 'hasBoth'는 'string' 타입의 'lastname'을 포함하고 있다.

// 사용 검사
type FirstAndLastNames = {
    first: string;
    last: string;
};

const firstAndLastNames: FirstAndLastNames = {
    first: "eunkyo",
    last: "jung",
}

// Error: 'last' 속성이 '{ first: string; }' 형식에 없지만 'FirstAndLastNames' 형식에 필수입니다.
const hasOnlyOne: FirstAndLastNames = {
    first: "Sappho",
};

type TimeRange = {
    start: Date;
};

const hasStartString: TimeRange = {
    start: "1879-02-13", // Error: 'string' 형식은 'Date' 형식에 할당할 수 없습니다.
};

// 초과 속성 검사
type Poet = {
    born: number;
    name: string;
};

// OK: Poet의 필드와 일치함
const poetMatch: Poet = {
    born: 1928,
    name: "Maya Angelou",
};

// Error: 객체 리터럴은 알려진 속성만 지정할 수 있으며 'Poet' 형식에 'activity'이(가) 없습니다.
const extraProperty: Poet = {
    born: 1928,
    name: "Maya Angelou",
    activity: "walking",
};

// 중첩된 객체 타입
type Poem = {
    author: {
        firstname: string;
        lastname: string;
    };
    name: string;
};

// OK
const poemMatch: Poem = {
    author: {
        firstname: "Sylvia",
        lastname: "Plath",
    },
    name: "Lady Lazarus",
};

const poemMisMatch: Poem = {
    author: {
        name: "Sylvia Plath",
    },
    name: "Lady Lazarus",
};

// 타입 변경
type Author = {
    firstname: string;
    lastname: string;
};

type Poem = {
    author: Author;
    name: string;
};