import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';


const inputs = {
    userInfoForm : [
        { type: 'email', placeholder: 'email', required: true, icon: MailOutlineIcon, fullwidth: true, id: 0 },
    ],
    shippingInfoForm : [
        { type: 'text', placeholder: 'name', required: true, icon: SpellcheckIcon, fullwidth: false, id: 0 },
        { type: 'text', placeholder: 'surname', required: true, icon: SpellcheckIcon, fullwidth: false, id: 1 },
        { type: 'text', placeholder: 'address', required: true, icon: HomeIcon, fullwidth: true, id: 2 },
        { type: 'text', placeholder: 'city', required: true, icon: LocationCityIcon, fullwidth: false, id: 3 },
        { type: 'text', placeholder: 'postcode', required: true, icon: MarkunreadMailboxIcon, fullwidth: false, id: 4 },
    ]
}


const CheckoutFormReducer =  () =>{
    return {
        inputs : inputs
    }
}

export default CheckoutFormReducer