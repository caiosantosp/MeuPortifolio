$('.classTempoDeEstudo').hide();

/*Altera as cards*/

$('#idCardsComBoxHabilidades').mouseleave(function () {
    $('.classTempoDeEstudo').hide();
});

$('#idCardsComBoxHabilidades').mouseenter(function () {
    $('.classTempoDeEstudo').show();
});

/*PROJETOS*/


$('#IdDivmostrarMaisProjetos').hide();
$('#botaoMostrarMenosProjetos').hide();
$('#botaoMostrarMenosProjetos').hide();

$('#botaoMostrarMaisProjetos').click(function () { 
    $('#botaoMostrarMenosProjetos').show();
    $('#IdDivmostrarMaisProjetos').show();
    $('#botaoMostrarMaisProjetos').hide();
});

$('#botaoMostrarMenosProjetos').click(function () {
    $('#IdDivmostrarMaisProjetos').hide();
    $('#botaoMostrarMaisProjetos').show();
    $('#botaoMostrarMenosProjetos').hide();
});