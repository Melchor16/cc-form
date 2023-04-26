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
let proceed = false;

//Fucntions--------------------------------------------------------------------

function blankError(input){
    input.name === 'form-name' ? $error_name.innerHTML="Can't be blank"
    : input.name === 'form-card-number' ? $error_number.innerHTML="Can't be blank"
    : input.name === 'form-month' ? $error_month.classList.innerHTML="Can't be blank"
    : input.name === 'form-year' ? $error_year.classList.innerHTML="Can't be blank"
    : input.name === 'form-cvc' ? $error_cvc.classList.innerHTML="Can't be blank" : null;

    input.name === 'form-name' ? $error_name.classList.remove('hidden')
    : input.name === 'form-card-number' ? $error_number.classList.remove('hidden')
    : input.name === 'form-month' ? $error_month.classList.remove('hidden')
    : input.name === 'form-year' ? $error_year.classList.remove('hidden')
    : input.name === 'form-cvc' ? $error_cvc.classList.remove('hidden') : null;

    input.type != 'submit' ? input.classList.add('error-input'): null;
}

function blankErrorOff(input){

    input.name === 'form-name' ? $error_name.classList.add('hidden') : null;
    input.name === 'form-card-number' ? $error_number.classList.add('hidden') : null;
    input.name === 'form-month' ? $error_month.classList.add('hidden') : null;
    input.name === 'form-year' ? $error_year.classList.add('hidden') : null;
    input.name === 'form-cvc' ? $error_cvc.classList.add('hidden') : null;

    input.type != 'submit' ? input.classList.remove('error-input'): null;
}

function inputSelector(input){
    let output = 0;
    input.name === 'form-name' ? output = $name_input
    : input.name === 'form-card-number' ? output = $number_input
    : input.name === 'form-month' ? output = $month_input
    : input.name === 'form-year' ? output = $year_input
    : input.name === 'form-cvc' ? output = $cvc_input : null;

    return output;
}

//Main program-----------------------------------------------------------------


for(let ins of $inputs){
    ins.setCustomValidity('')
    ins.addEventListener('input', e=>{
        ins.name === 'form-name' ? $card_name.innerHTML=ins.value : null;
        ins.name === 'form-card-number' ? $card_number.innerHTML=ins.value : null;
        ins.name === 'form-month' ? $card_month.innerHTML=ins.value : null;
        ins.name === 'form-year' ? $card_year.innerHTML=ins.value : null;
        ins.name === 'form-cvc' ? $card_cvc.innerHTML=ins.value : null;
    })

    ins.addEventListener('invalid', e=>{
        ins.setCustomValidity('Please use a valid format');
    })
}

$main_form.addEventListener('submit', e =>{
    e.preventDefault();
    proceed_count = 0
    for(let inp of $inputs){
        if(inp.value === ''){
            blankError(inp);
            proceed_count += 1;
        }else{
            blankErrorOff(inp)
        }
    }
    proceed_count ? proceed = false : proceed = true

    if(proceed){
        $form_state.classList.add('hidden');
        $submit_state.classList.remove('hidden');
    }
})

//Thank you state button ------------------------------------------------------------

$continue.addEventListener('click', e =>{
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