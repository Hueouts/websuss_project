
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
 useStripe, 
 useElements
} from "@stripe/react-stripe-js";
import axios from 'axios'
const HighlightText=()=>{

const stripe = useStripe();
const elements = useElements();
const handlePayment= async(event)=>{
event.preventDefault();
const response = await axios.post(
        `http://localhost:3001/intent`,
        {
          amount: 50,
        },
      );
      console.log(response)
if (response.status == 200){
const confirmPayment = await stripe.confirmCardPayment( response.data.client_secret, {
            payment_method: {
              card: elements.getElement(CardNumberElement),
            },
          }
        );
        console.log(confirmPayment)
if(confirmPayment.paymentIntent.status === "succeeded"){
 console.log('payment confirmed');
}
}
}
return (
<form onSubmit={handlePayment}>
 <CardNumberElement/>
 <CardExpiryElement />
<CardCvcElement />    
 <button type="submit">Confirm Payment</button>
</form>
)}
export default HighlightText;
