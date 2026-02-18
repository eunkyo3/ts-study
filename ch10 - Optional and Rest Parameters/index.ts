// 선택적 매개변수
// 자바스크립트에서 함수 매개변수가 제공되지 않으면 함수 내부의 인수값은 undefined으로 기본값이 설정된다
// 때로는 함수 매개변수를 제공할 필요가 없을 때가 있고, undefined 값을 위해 의도적으로 사용할 수도 있습니다.
// 타입스크립트가 이러한 선택적 매개변수에 인수를 제공하지 못하는 경우, 타입 오류를 보고하지 않았으면 할 때도 있습니다.
// 타입스크립트에서는 선택적 객체 타입 속성과 유사하게 타입 애너테이션 ':' 앞에 '?'를 추가해 매개변수가 선택적이라고 표시합니다.
// 선택적 매개변수에는 항상 | undefined가 유니언 타입으로 추가되어 있습니다.

function announceSong(song: string, singer?: string) {
    console.log("song: ", song);

    if(singer) {
        console.log("singer: ", singer);
    }
}

announceSong("봄여름가을겨울"); // OK
announceSong("BAEBAE", undefined); // OK
announceSong("거짓말", "하루하루"); // OK

// 선택적 매개변수는 항상 암묵적으로 undefined가 될 수 있습니다.
// 선택적 매개변수는 | undefined를 포함하는 유니언 타입 매개변수와는 다릅니다.
// '?'으로 표시된 선택적 매개변수가 아닌 매개변수는 값이 명시적으로 undefined일지라도 항상 제공되어야 합니다.

function announceSongBy(song: string, singer: string | undefined) {
    console.log("song: ", song);

    if(singer) {
        console.log("singer: ", singer);
    }
}

announceSongBy("봄여름가을겨울"); // Error: 2개의 인수가 필요한데 1개를 가져왔습니다.
announceSongBy("BAEBAE", undefined); // OK
announceSongBy("거짓말", "하루하루"); // OK

// 함수에서 사용되는 모든 선택적 매개변수는 마지막 매개변수여야 합니다.
function announceSinger(singer?: string, song: string) {} // Error: 필수 매개 변수는 선택적 매개 변수 뒤에 올 수 없습니다.

// 나머지 매개변수
// ... 스프레드 연산자는 함수 선언의 마지막 매개변수에 위치하고,
// 해당 매개변수에서 시작해 함수에 전달된 '나머지' 인수가 모두 단일 배열에 저장되어야 함을 나타냅니다.

function singAllTheSongs(singer: string, ...songs: string[]) {
    for (const song of songs) {
        console.log(`${song}, by ${singer}.`)
    }
}
singAllTheSongs("Alicia Keys"); // 결론적으로, 나머지 매개변수는 인자가 아예 전달되지 않았을 때 빈 배열로 처리되기 때문에, 인자를 명시적으로 생략하는 선택적 매개변수와는 다른 방식으로 동작합니다.
singAllTheSongs("Alicia Keys", "Lady Gaga", "Bad Romance", "Poker Face");
singAllTheSongs("string", 2000); // Error: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.