// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
    id: number | string;
    name: string;
    // email?: string ---> string or undefined
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: "Willian",
    email: "willianjustenqui@gmail.com"
}

type CharInfo = {
    nickname: string;
    level: number
}

const char: CharInfo = {
    nickname: "willjusten",
    level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    name: "Willian",
    nickname: "willjusten",
    id: "123",
    level: 100
}