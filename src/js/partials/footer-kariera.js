$(document).ready(function() {

	if ($('#file-metro').length) {
		$('#file-metro').change(function(event) {
			var filename = $(this).val().split('\\').pop();
			$('.footer-file-name').text(filename);

			$('.footer-file-delete').css('display', 'block');
		});

		$('.footer-file-delete').click(function(event) {
			$('#file-metro').value = '';
			$('#file-metro').replaceWith( $('#file-metro').val('').clone( true ) );

			var filename = $('#file-metro').val().split('\\').pop();
			$('.footer-file-name').text(filename);
			$(this).css('display', 'none');
		});
	}
	
});