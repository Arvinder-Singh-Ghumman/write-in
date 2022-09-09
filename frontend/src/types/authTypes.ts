export type LoginAuthState = {
    email: string;
    password: string;
}

export type RegisterAuthState = LoginAuthState & {
    username: string;
    fullname: string;
}

export type NotificationsType = 'error' | 'success' | '';