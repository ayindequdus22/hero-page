'use strict';
document.querySelector('.search-for').classList.add('d-none');

$(document).ready(function(){
$('.search-icon').click(function(){
document.querySelector('.search-for').classList.toggle('d-none');
});

$('.navbar-toggler-icon').click(function(){
    document.querySelector('.search-container').classList.toggle('d-none');
});
 
$('#search_box').click(function(){
    $('.search').hide();
});

})
