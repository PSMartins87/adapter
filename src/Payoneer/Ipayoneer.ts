import Tolken from "../src/Utils/Token";

export default interface Ipayoneer {
    authToken(): Tolken;
    sendPayment(): void;
    receivePayment(): void;
}