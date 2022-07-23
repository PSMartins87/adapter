import Token from "../src/Utils/Token";
import Ipayoneer from "./Ipayoneer";

export default class Payoneer implements Ipayoneer {
    private _token: Token;

    authToken(): Token {
        return new Token();
    }

    sendPayment(): void {
        this._token = this.authToken();
        console.log("TOKEN: " + this._token.token);
        console.log("enviando pagamento via payoneer");
    }

    receivePayment(): void {
        console.log("recebendo pagamento via payoneer");
    }
}
