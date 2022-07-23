import Tolken from "../Utils/Token";

export default interface ImarcadoPago {
    authToken(): Tolken;
    sendPayment(): void;
    receivePayment(): void;
}
