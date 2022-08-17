import { USER_INFO_KEY } from "../app/constants";

export const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const ComposeRequiredErrorMessage = attribute => `${attribute} must be specified`;

export const StoreUserInfo = (userInfo) => {
    sessionStorage.setItem(USER_INFO_KEY, JSON.stringify({
        username: userInfo.username,
        email: userInfo.email,
        token: userInfo.token
    }));
};

export const ClearUserInfo = () => {
    sessionStorage.removeItem(USER_INFO_KEY);
}
