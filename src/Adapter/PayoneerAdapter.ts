import Payoneer from "../../Payoneer/Payoneer";
import IPayPal from "../Paypal/IPaypal";
import Token from "../Utils/Token";

export default class PayoneerAdapter implements IPayPal {
    private _token = new Token();

    constructor(private _payoneer: Payoneer) {
        console.log("adaptando payoneer");
    }

    authToken(): Token {
        return new Token();
    }

    paypalPayment(): void {
        this._payoneer.sendPayment();
    }
    paypalReceive(): void {
        this._payoneer.receivePayment();
    }
}
