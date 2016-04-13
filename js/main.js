$(document).ready(function(){
	$('#category').children().click(function(){
		displayCategory($(this).attr('index'));
	});
	home();
});

function home() {
	$('section.hot').show();

	for(var i = 0; i < ItemsDB.length; i++){
		addItem(ItemsDB[i][0]);
	}
}
function displayCategory(index){
	$('section.hot').hide();
	$('#items').children().remove();

	var db = ItemsDB[index-1];
	for(var i = 0; i < db.length; i++) {
		addItem(db[i]);
	}
}

function addItem(data){
	var li = $('<li></li>');
	li.addClass('col-xs-12');
	var img = $('<img src="'+data.image+'" alt="placeholder">');
	img.addClass('col-xs-2');
	var name = $('<h3></h3>');
	var price = $('<span></span>');
	var description = $('<p></p>');

	name.text(data.name);
	price.text(data.price);
	description.text(data.description);

	li.append(img, name, price, description);
	$('#items').append(li);
}