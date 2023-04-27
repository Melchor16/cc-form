const d=document;
//inputs
const $main_form = d.getElementById('card-form'),
$name_input = d.getElementById('form-name'),
$number_input = d.getElementById('form-card-number'),
$month_input = d.getElementById('form-month'),
$year_input = d.getElementById('fomr-year'),
$cvc_input = d.getElementById('form-cvc'),
$inputs = d.querySelectorAll('input');
//card texts
const $card_name = d.getElementById('card-name'),
$card_number = d.getElementById('card-number'),
$card_month = d.getElementById('card-month'),
$card_year = d.getElementById('card-year'),
$card_cvc = d.getElementById('card-cvc');
//error messages
const $error_name = d.getElementById('error-name'),
$error_number = d.getElementById('error-number'),
$error_month = d.getElementById('error-month'),
$error_year = d.getElementById('error-year'),
$error_cvc = d.getElementById('error-cvc');
//States
const $form_state = d.getElementById('main-form'),
$submit_state = d.getElementById('submit-message'),
$continue = d.getElementById('continue');
//other variables
let proceed = false,
proceed_count = 0;

//Fucntions--------------------------------------------------------------------

function blankError(input){
    input.name === 'form-name' ? $error_name.innerHTML="Can't be blank"
    : input.name === 'form-card-number' ? $error_number.innerHTML="Can't be blank"
    : input.name === 'form-month' ? $error_month.innerHTML="Can't be blank"
    : input.name === 'form-year' ? $error_year.innerHTML="Can't be blank"
    : input.name === 'form-cvc' ? $error_cvc.innerHTML="Can't be blank" : null;

    input.name === 'form-name' ? $error_name.classList.remove('hidden')
    : input.name === 'form-card-number' ? $error_number.classList.remove('hidden')
    : input.name === 'form-month' ? $error_month.classList.remove('hidden')
    : input.name === 'form-year' ? $error_year.classList.remove('hidden')
    : input.name === 'form-cvc' ? $error_cvc.classList.remove('hidden') : null;

    input.type != 'submit' ? input.classList.add('error-input'): null;
}

function ErrorOff(input){

    input.name === 'form-name' ? $error_name.classList.add('hidden') : null;
    input.name === 'form-card-number' ? $error_number.classList.add('hidden') : null;
    input.name === 'form-month' ? $error_month.classList.add('hidden') : null;
    input.name === 'form-year' ? $error_year.classList.add('hidden') : null;
    input.name === 'form-cvc' ? $error_cvc.classList.add('hidden') : null;

    input.type != 'submit' ? input.classList.remove('error-input'): null;
}

function validityError(input){
    if(input.name === 'form-card-number' && input.value.length > 16){
        $error_number.innerHTML="Please use a valid format";
        $error_number.classList.remove('hidden');
        proceed_count += 1;
    }else if(input.name === 'form-month' && (input.value > 12 || input.value < 1)){
        $error_month.innerHTML="Please use a valid month";
        $error_month.classList.remove('hidden');
        proceed_count += 1;
    }else if(input.name === 'form-year' && (input.value < 23 || input.value > 99)){
        $error_year.innerHTML="Please use a valid year";
        $error_year.classList.remove('hidden');
        proceed_count += 1;
    }else if(input.name === 'form-cvc' && (input.value > 999 || input.value < 100)){
        $error_cvc.innerHTML="Please use a valid format";
        $error_cvc.classList.remove('hidden');
        proceed_count += 1;
    }else{
        ErrorOff(input);
    }
}

//Main program-----------------------------------------------------------------


for(let ins of $inputs){    //write values on cards
    ins.addEventListener('input', e=>{
        ins.name === 'form-name' ? $card_name.innerHTML=ins.value : null;
        ins.name === 'form-card-number' ? $card_number.innerHTML=ins.value : null;
        ins.name === 'form-month' ? $card_month.innerHTML=ins.value : null;
        ins.name === 'form-year' ? $card_year.innerHTML=ins.value : null;
        ins.name === 'form-cvc' ? $card_cvc.innerHTML=ins.value : null;
    })
}

$main_form.addEventListener('submit', e =>{ //validations
    e.preventDefault();
    proceed_count = 0
    for(let inp of $inputs){
        if(inp.value === ''){
            blankError(inp);
            proceed_count += 1;
        }else{
            ErrorOff(inp);
            validityError(inp);
        }
    }
    proceed_count ? proceed = false : proceed = true

    if(proceed){
        $form_state.classList.add('hidden');
        $submit_state.classList.remove('hidden');
    }
})

//Thank you state button ------------------------------------------------------------

$continue.addEventListener('click', e =>{   //reset the values when you click continue
    for(let i of $inputs){
        i.type != 'submit' ? i.value ='': null;
    }
    $card_name.innerHTML= 'Jane Appleseed'
    $card_number.innerHTML= '0000 0000 0000 0000'
    $card_month.innerHTML= '00'
    $card_year.innerHTML= '00'
    $card_cvc.innerHTML= '000'

    $form_state.classList.remove('hidden');
    $submit_state.classList.add('hidden');
})