// 중첩 인터페이스
// 객체 타입이 다른 객체 타입의 속성으로 중첩될 수 있는 것처럼 인터페이스 타입도 자체 인터페이스 타입 혹은 객체 타입을 속성으로 가질 수 있습니다.

interface Novel {
    author: {
        name: string;
    };
    setting: Setting;
}

interface Setting {
    place: string;
    year: number;
}

let myNovel: Novel;
myNovel = {
    author: {
        name: "eunkyo",
    },
    setting: {
        place: "England",
        year: 1892,
    },
};

myNovel = {
    author: {
        name: "jungeunkyo",
    },
    setting: {
        place: "Korea",
    },
}; // Error: 'year' 속성이 '{ place: string; }' 형식에 없지만 'Setting' 형식에선 필수입니다.

// 인터페이스의 확장
// 타입스크립트는 인터페이스가 다른 인터페이스의 모든 멤버를 복사해서 선언할 수 있는 확장된(extend) 인터페이스를 허용합니다.
// 확장할 인터페이스의 이름 뒤에 extends 키워드를 추가해서 다른 인터페이스를 확장한 인터페이스라는 걸 표시합니다.
// 이렇게 하면 파생 인터페이스(derived interface)를 준수하는 모든 객체가 기본 인터페이스의 모든 멤버도 가져야 한다는 것을 타입스크립트에 알려줍니다.

interface Writing {
    title: string;
}

interface Novella extends Writing {
    pages: number;
}

let myNovella: Novella = {
    title: "",
    pages: 192
};

let missingPages: Novella = {
    title: "타입스크립트 기초과정",
}; // Error: 'pages' 속성이 '{ title: string; }' 형식에 없지만 'Novella' 형식에서 필수입니다.

let extraProperty: Novella = {
    title: "타입스크립트 기초과정",
    pages: 111,
    style: "Naturalism",
}; // Error: 개체 리터럴은 알려진 속성만 지정할 수 있으며, 'Novella' 형식에 'style'이(가) 없습니다.

// 재정의된 속성
// 파생 인터페이스는 다른 타입으로 속성을 다시 선언해 기본 인터페이스의 속성을 재정의 하거나 대체할 수 있습니다.
// 타입스크립트의 타입 검사기는 재정의된 속성이 기본 속성에 할당되어 있도록 강요합니다.
// 이렇게 하면 파생 인터페이스의 타입의 인스턴스를 기본 인터페이스 타입에 할당할 수 있습니다.

interface WithNullableName {
    name: string | null;
}

interface WithNonNullableName extends WithNullableName {
    name: string;
}

interface WithNumbericName extends WithNullableName {
    name: string | number;
}

// WithNullableName 타입은 WithNonNullableName에서 null을 허용하지 않도록 적절하게 다시 설정됩니다.
// 그러나 WithNumbericName의 name에는 number | string이 허용되지 않습니다.
// number | string은 string | null에 할당할 수 없기 때문입니다.

// 다중 인터페이스 확장
// 타입스크립트의 인터페이스는 여러 개의 다른 인터페이스를 확장해서 선언할 수 있습니다.
// 파생 인터페이스 이름에 있는 extends 키워드 뒤에 쉼표로 인터페이스의 이름을 구분해 사용하면 됩니다.
// 파생 인터페이스는 모든 기본 인터페이스의 모든 멤버를 받습니다.

interface GivesNumber {
    giveNumber(): number;
}

interface GivesString {
    giveString(): string;
}

interface GivesBothAndEither extends GivesNumber, GivesString {
    giveEither(): number | string;
}

function useGivesBoth(instance: GivesBothAndEither) {
    instance.giveNumber(); // 타입: number
    instance.giveString(); // 타입: string
    instance.giveEither(); // 타입: number | string
}

// 인터페이스의 병합
// 인터페이스의 중요한 특징 중 하나는 서로 병합하는 능력입니다.
// 두 개의 인터페이스가 동일한 이름으로 동일한 스코프에 선언된 경우, 선언된 모든 필드를 포함하는 더 큰 인터페이스가 코드에 추가됩니다.

interface Merged {
    fromFirst: string;
}

interface Merged {
    fromSecond: number;
}

// 다음과 같음:
// interface Merged {
//     fromFirst: string;
//     fromSecond: number;
// }

let test: Merged = {
    fromFirst: "",
    fromSecond: 0,
};