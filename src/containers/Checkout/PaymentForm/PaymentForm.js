import React from 'react';
import {
    CardElement,
    // useStripe,
    // useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import classes from './PaymentForm.module.css'
import Input from '../../../component/Input/Input';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';

const PaymentForm = () => {
    const promise = loadStripe("pk_test_51HkFeOA6e3WOyQYgu3RJrD59il1YGBkZFNBOKguO6MZWSlzNbkD9q4A2HFJduvRszpvjaLD9MYL7kUOHKVpiELoc00KuuQt0Wg");
    return (
        <div>
            <Elements stripe={promise}>
            <PaymentInput/>
            </Elements>
        </div>
    );
};

const PaymentInput = props => {
    // const stripe = useStripe();
    // const elements = useElements();
    
    return (
        <form className={classes.PaymentForm}>
        <Input type="text"  placeholder="Name"><SpellcheckIcon/></Input>
        <Input type="text"  placeholder="surname"><SpellcheckIcon/></Input>
            <CardElement className={classes.CardElement}/>
        </form>

    )
}

export default PaymentForm;