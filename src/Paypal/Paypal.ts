import Token from "../Utils/Token";
import IPayPal from "./IPaypal";

export default class Paypal implements IPayPal {
    private _token: Token;
    
    authToken(): Token {
        return new Token();
    }

    paypalPayment(): void {
        this._token = this.authToken();
        console.log("TOKEN: " + this._token.token);
        console.log("enviando pagamento via paypal");
    }

    paypalReceive(): void {
        console.log("recebendo pagamento via paypal");
    }
}
