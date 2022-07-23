import Ipayoneer from "../Payoneer/Ipayoneer";
import Payoneer from "../Payoneer/Payoneer";
import PayoneerAdapter from "./Adapter/PayoneerAdapter";
import IPayPal from "./Paypal/IPaypal";
import Paypal from "./Paypal/Paypal";

const payment: IPayPal = new PayoneerAdapter(new Payoneer());
payment.paypalPayment();
payment.paypalReceive();
