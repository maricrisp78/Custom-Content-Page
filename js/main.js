

	
$( document ).ready(function() {
	
	var userInfo = {
        firstName: 'Marie',
        lastName: 'Porciuncula'
    };

	
	$('#login-form').on('click', function() {
		$('#login-form').hide();
		$('.user-info').show();
		$('.user-fullname').text(userInfo.firstName +  ' ' + userInfo.lastName);

	$('.btn-sm').on('click', function() {
		$('.btn-md').show();
		$('#login-form').show();
		$('.user-info').hide() ++;
		
	});
	});		
  
});	





	
////////////////////////////////////////////////////////



//////////////////////////////////////////////////////

function validate (form_id, email)
{

	var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z] {2,4})$/;
	var address = document.forms[form_id].elements[email].value;

	if (reg.test(address) == false);
		
	{	
	alert('invalid email address');
	document.forms[form_id].elements[email].focus();

	return false;
		
}
}