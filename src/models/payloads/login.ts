export interface ILoginRequestState {
    type: String;
    username: String;
    password: String;
}

interface IResponse {
    id: number;
}

export interface ILoginResponseState {
    type: String;
    response: IResponse;
}