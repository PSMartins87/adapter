import mercadoPago from "../maercadoPago/mercadopago";
import IPayPal from "../Paypal/IPaypal";
import Token from "../Utils/Token";

export default class MercadopagoAdapter implements IPayPal {
    constructor(private marcadoPago: mercadoPago) {
        console.log("adaptando mercado pago");
    }
    authToken(): Token {
        throw new Error("Method not implemented.");
    }
    paypalPayment(): void {
        throw new Error("Method not implemented.");
    }
    paypalReceive(): void {
        throw new Error("Method not implemented.");
    }
}
