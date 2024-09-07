$('#show_more').on('mousedown',function(){
    $(this).scc('border','3px solid green');
})
$('.news').hide()


$('#show_more').click(function(){
var serviceSection =$('footer');
if(servicesSection.is(':visible')){
    servicesSection.hide();
    $(this).text('Показать');
}
else{
    servicesSection.show()
    $(this).text('Скрыть')
}

});