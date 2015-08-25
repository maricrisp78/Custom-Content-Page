
	
/////////////////////////////////////////////////////////////////// 
	
	
$( document ).ready(function() {
	
	var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
	
	
		
	$('#login-form').on('click', function() {
		$('#login-form').hide();
		$('.user-info').show();
		$('.user-fullname').text(userInfo.firstName + ' ' + userInfo.lastName);

	$('.btn-sm').on('click', function() {
		$('.btn-sm').show();
		$('#login-form').show();
		$('.user-info').hide() ++;
		
	});
	});		
  
});	
	
////////////////////////////////////////////////////////
