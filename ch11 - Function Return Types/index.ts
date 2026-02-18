// 반환 타입
// 타입스크립트는 지각적(perceptive)입니다. 함수가 반환할 수 있는 가능한 모든 값을 이해하면 함수가 반환하는 타입을 알 수 있습니다.
// 아래 예제에서 getUsers는 타입스크립트에서 number를 반환하는 것으로 파악됩니다.

function getUsers(users: string[]) {
    for(const user of users) {
        console.log(`${user}`);
    }
    return users.length;
}

// 다음 예제에서 getSongAt 함수는 string | undefined를 반환하는 것으로 유추됩니다.
function getSongAt(songs: string[], index: number) {
    return index < songs.length ? songs[index] : undefined;
}

// 명시적 반환 타입
// 특히 함수에서 반환 타입을 명시적으로 선언하는 방식이 매우 유용할 때가 종종 있습니다.
// 함수 선언 반환 타입 애너테이션은 매개변수 목록이 끝나는 ')' 다음에 배치됩니다. 함수 선언의 경우 '{' 앞에 배치됩니다.

function getTopics(topics: string[], count = 0): number {
    return topics.length ? getTopics(topics.slice(1), count + 1) : count;
}

// 화살표 함수의 경우 => 앞에 배치됩니다.
const getPosts = (posts: string[], count = 0): number => {
    return posts.length ? getPosts(posts.slice(1), count + 1) : count;
};

// 함수의 반환문이 함수의 반환 타입으로 할당할 수 없는 값을 반환하는 경우 타입스크립트는 할당 가능성 오류를 표시합니다.

function returnString(param: number): string | undefined {
    switch (param) {
        case 1:
            return undefined;
        case 2:
            return "";
        case 3:
            return 0; // Error: 'number' 형식은 'string' 형식에 할당할 수 없습니다.
        default:
            return undefined;
    }
}