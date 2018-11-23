function ajax_get(url, position,  type = 'all', id = '') {
	$.ajax({
		url: url,
		type: 'post',
		data: {'method': type, 'id': id},
		success: function(respone) {
			if(type == 'all')
				__create_table(respone, position);
			else 
				__map_form(respone, position);
		}	
	})
}

function action(form, type) {
	var url = form.attr('action'),
		data = {
			'method': type
		};

	form.find('[name]').each(function(index, value) {
		data[$(this).attr('name')] = $(this).val();
	});

	$.ajax({
		url: url,
		type: 'post',
		data: data,

		success: function(respone) {
			console.log(respone)
		}
	});
}

function deletes(url, data) {

	$.ajax({
		url: url,
		type: 'post',
		data: {method: 'delete', ids: data},	

		success: function(respone) {
			console.log(respone)
		}
	});

}

function form_submit(form) {
	var id = form.find('[name="id"]').val();
	if(id == '') 
		action(form, 'post')
	else 
		action(form, 'put')
}

function __map_form(json, form) {
	var object = JSON.parse(json);

	form.find('[name]').each(function(index, value) {
		$(this).val(object[$(this).attr('name')]);
	});
}


function __create_table(records, position) {
    var table = $('<table class="table">');
    var thead = $('<thead>');
    var tbody = $('<tbody>');
    var tr_head = $('<tr>');

    // Table header
    var object = JSON.parse(records);
    var sample = object[0];

    Object.keys(sample).forEach((key) => {
    	var th = $('<th>');
    	if(key == 'id')
    		th.append('<input type="checkbox" id="checkall">');
    	else
    		th.append(key);

    	tr_head.append(th);
    });

    thead.append(tr_head);
    table.append(thead);

    for(var row in object) {
    	var tr_body = $('<tr>');
    	Object.keys(sample).forEach((key) => {
    		var td = $('<td>');
    		if(key === 'id')
    			td.append('<input type="checkbox" class="checkitem" value="' + object[row][key] + '">');
    		else
    			td.append(object[row][key]);
 
    		tr_body.append(td);	
    	});
    	tbody.append(tr_body);
    }

    table.append(tbody);

   	position.html(table);
    
}