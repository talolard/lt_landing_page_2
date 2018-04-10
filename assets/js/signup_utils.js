---
---
const endpoint = '{{ site.backend_url }}'


var handle_name_response = function(response){
    if (response.status===200){
        setup_stripe();
        $('#step_2').removeClass("d-none");
        $('#stripe-button').removeClass("disabled btn-primary").addClass("btn-white")
        $('#domain_name_field').prop('disabled',true);
        $('#chk_availibility_btn').addClass('disabled');
        $('#availble_done').removeClass("d-none");
        $('#availble_rejected').addClass("d-none");
        return false
    }
    else{
        $('#availble_rejected').removeClass("d-none");
        return false
    }
}
var check_domain_availibilty = function(e){
    const subdomain = $('#domain_name_field')[0].value
    var url = endpoint+'name/'+subdomain+'/';
    return fetch(url)
    .then(handle_name_response)

}

var setup_stripe = function(){
    var handler = StripeCheckout.configure({
        key: 'pk_test_k2jSFVk57XwOmI8n9S9OlwaF',
        image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        locale: 'auto',
        token: handle_stripe_submit
    });
    
    document.getElementById('stripe-button').addEventListener('click', function(e) {
        // Open Checkout with further options:
        handler.open({
        description: '2 widgets',
        zipCode: true,
       name:"LightTag",
       label:"Subscribe to LightTag",
       "panel-label":"Subscribe to LightTag",
       description:"LightTag Subscription",
       image:"/assets/img/icon.png",
       locale:"auto"

        });
        e.preventDefault();
    });
    
    // Close Checkout on page navigation:
    window.addEventListener('popstate', function() {
        handler.close();
    });

}
var handle_stripe_submit = function(token){
    
    const url = endpoint+'token/'
    token['domain_name'] =  $('#domain_name_field')[0].value
    debugger
    fetch(url,{
        method:"POST",
        body:JSON.stringify(token)
    })
    .then(response=>{
        if (response.status ===200){
            window.location.href = "/success";
        }
        else{
            window.location.href = "/error";
        }
        

    })
}