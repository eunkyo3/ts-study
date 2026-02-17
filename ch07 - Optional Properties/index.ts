// 선택적 속성
// 모든 객체에 객체 타입 속성이 필요한건 아닙니다. 타입의 속성 애너테이션에서 ':' 키워드 앞에 '?' 키워드를 추가하면 선택적 속성임을 나타낼 수 있습니다.

type Book = {
    author?: string;
    pages: number;
};

const ok: Book = {
    pages: 100,
};

const missing: Book = {
    author: "eunkyo",
}; // Error: 'pages' 속성이 '{ author: string; }' 형식에 없지만 'Book' 형식에서 필수입니다.

type Writers = {
    author: string | undefined;
    editor?: string;
};

// OK: author는 undefined로 제공
const hasRequired: Writers = {
    author: undefined,
};

const missingRequired: Writers = {}; // Error: 'author' 속성이 '{}' 형식에 없지만 'Writers' 형식에서 필수입니다.

// 선택적 속성과 undefined를 포함한 유니언 타입의 속성 사이에는 차이가 있음을 명심하세요.
// ?를 사용해 선택적으로 선언된 속성은 존재하지 않아도 됩니다.
// 그러나 필수로 선언된 속성과 | undefined는 그 값이 undefined 일지라도 반드시 존재해야 합니다.