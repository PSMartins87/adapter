import Tolken from "../Utils/Token";

export default interface IPayPal {

    authToken(): Tolken;
    paypalPayment(): void;
    paypalReceive(): void;
    
}
