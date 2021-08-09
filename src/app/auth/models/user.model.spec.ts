export default class User {
    id: number|null = null;
    userName: string = '';
    password: string = '';

    isValid() {
        return true;
    }
};
