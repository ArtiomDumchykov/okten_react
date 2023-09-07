import { IAuth } from '../intefaces/auth_intefrace';
import { IRes, instanseCarsaxios } from './apiCarsService';
import { IUser } from '../intefaces/user_interface';
import { urls } from '../constants';
import { ITokens } from '../intefaces/token_interface';


const accessTokenKey = "access";
const refreshTokenKey = "refresh";

const authSerivice = {
    register(user: IAuth): IRes<IUser> {
        return instanseCarsaxios.post(urls.auth.register, user)
    },

    async login(user: IAuth): Promise<IUser> {
        const {data} = await instanseCarsaxios.post<ITokens>(urls.auth.login, user)
        this.setTokens(data);
        const {data: me} = await this.me();
        return me
    },

    me(): IRes<IUser> {
        return instanseCarsaxios.get(urls.auth.me)
    },

    async refresh(): Promise<void> {
        const refresh = this.getRefreshToken();
        const {data} = await instanseCarsaxios.post<ITokens>(urls.auth.refresh, {refresh});
        this.setTokens(data)
    },

    setTokens({refresh, access}: ITokens): void {
       localStorage.setItem(accessTokenKey, access)
       localStorage.setItem(refreshTokenKey, refresh)
    },


    getAccessToken(): string {
        return localStorage.getItem(accessTokenKey)
    },
   
    getRefreshToken(): string {
        return localStorage.getItem(refreshTokenKey)
    },

    deleteTokens(): void {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey)
    }

   
}


export { 
    authSerivice
}