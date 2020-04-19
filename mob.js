function validatePhone(phoneField, format) {
    var num = phoneField.value.replace(/[^\d]/g,'');

    if(num.length != 10) {
        alert('Please enter a valid phone number including area code');                   

    } else {
       switch(format) {

            case '0': 
                phoneField.value = "(" + num.substring(0,3) + ")-" + num.substring(3, 6) + "-" + num.substring(6);
                break;

            case '1': 
                phoneField.value = num.substring(0,3) + "." + num.substring(3, 6) + "." + num.substring(6);
                break;

            default: 
                phoneField.value = num;
                break;

        }

    }

}