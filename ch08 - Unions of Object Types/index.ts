// 객체 타입 유니언
// 타입스크립트 코드에서는 속성이 조금 다른, 하나 이상의 서로 다른 객체 타입이 될 수 있는 타입을 설명할 수 있어야 합니다.
// 또한, 속성값을 기반으로 해당 객체 타입 간에 타입을 좁혀야 할 수도 있습니다.

// 유추된 객체 타입 유니언
// 변수에 여러 객체 타입 중 하나가 될 수 있는 초깃값이 주어지면 타입스크립트는 해당 타입을 객체 타입 유니언으로 유추합니다.
// 유니언 타입은 가능한 각 객체 타입을 구성하고 있는 요소를 모두 가질 수 있습니다.

type BookWithPage = {
    name: string;
    pages: number;
};

type BookWithRhymes = {
    name: string;
    rhymes: boolean;
};

type Book2 = BookWithPage | BookWithRhymes;

const book2: Book2 = 
    Math.random() > 0.5
        ? {
            name: "eunkyo",
            pages: 70,
        }
        :
        {
            name: "jung eunkyo",
            rhymes: true, 
        };

book2.name; // 타입: string
book2.pages; // 타입: number | undefined
book2.rhymes; // 타입: boolean | undefined

// 이 경우 타입은
// BookWithPages와 BookWithRhymes 둘 중 하나가 되어야만 한다.

type BookWithPage = {
    name: string;
    pages: number;
};

type BookWithRhymes = {
    name: string;
    rhymes: boolean;
};

type Book2 = BookWithPage | BookWithRhymes;

// 교차 타입
// 타입스크립트 유니언 타입은 둘 이상의 다른 타입 중 하나의 타입이 될 수 있음을 나타냅니다.

type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WritenArt = Artwork & Writing;
// type WritenArt = {
//     name: string;
//     genre: string;
//     pages: number;
// };