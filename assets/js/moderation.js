$(document).ready(function () {

    /* Одобряет или отклоняет юзера
     * $resp = ['resp' => TRUE/FALSE, 'text' => MESSAGE]);
     * 
     * check > 0 – одобряем юзера
     * check <=0 – отклоняем юзера
     */
    $('.ajax_user_check').submit(function() {
		var form = $(this);
        var data = {};
        form.find('input').each(function() {
            data[this.name] = $(this).val();
        });

        if (confirm('Are you sure?')) {
            $.ajax({
                type: 'POST',
                url: '/moderation/check',
                dataType: 'json',
                data: form.serialize(),

                success: function(resp) {
                    if (('resp' in resp) && resp['resp']) {
                        $('.user_' + data['userid']).addClass('hidden');
                    } else if (('resp' in resp) && !resp['resp']) {
                        alert(resp['text']);
                    } else {
                        alert('Incoming ajax responce data error');
                    }
                },
                error: function(resp) {
                    alert('Unknown ajax error');
                }
            });
            return false;
        }
        else {
            return false;   // Обязательно, иначе браузер перезагружает страницу
        }
	});

});