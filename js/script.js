
/*$('.footerbtn').click(function(){
	$(this).find('.imgcss').toggle();
	$(this).addClass("activebtn");
	var getval = $(this).attr('id');
	$('#'+getval).addClass('activebtn');
	
});*/

/*$('#DataTables_Table_0_next a').html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');											 
$('.DataTables_Table_0_previous a').html('<i class="fa fa-chevron-left" aria-hidden="true"></i>');											 */



$('.chip input[type="checkbox"]').click(function(){

		var inputValue = $(this).attr("value");
		$(".maincontainer1 ." + inputValue).removeClass("activeldd");
		$(".maincontainer1 .list-group").removeClass("firstcheck");
		$(".maincontainer1 ." + inputValue).toggle();							 
													 
	if ($(".chip :checkbox[type='checkbox']:checked").length == 0)  { 
		$(".maincontainer1 .list-group").removeClass("activeldd");
		$(".maincontainer1 .activeldd:eq(0)").removeClass("firstcheck");
		$(".maincontainer1 div.chip").removeClass("activeimg");
	}
											
	if ($(".chip :checkbox[type='checkbox']:checked").length == 1)  { 
		$(".maincontainer1 ." + inputValue).addClass("activeldd");
		$(".maincontainer1 ." + inputValue).addClass("firstcheck");
		$(this).closest('div.chip').addClass('activeimg');
	}

	if ($(".chip :checkbox[type='checkbox']:checked").length == 2)  {      
		//not(:checked)
		$('.chip :checkbox:not(:checked)').prop('disabled', true);
		$(".maincontainer1 ." + inputValue).addClass("activeldd");
		$(".maincontainer1 .activeldd:eq(0)").addClass("firstcheck");
		$(this).closest('div.chip').addClass('activeimg');
	}
	else { 
		$('.chip :checkbox:not(:checked)').prop('disabled', false);  
	}
  });

$('.chip3 input[type="checkbox"]').click(function(){
												  
	var inputValue3 = $(this).attr("value");
	$(".maincontainer3 ." + inputValue3).removeClass("activeldd3");
	$(".maincontainer3 .list-group").removeClass("firstcheck3");
	$(".maincontainer3 ." + inputValue3).toggle();												  
													 

if ($(".chip3 :checkbox[type='checkbox']:checked").length == 0)  { 
	$(".maincontainer3 .list-group").removeClass("activeldd3");
	$(".maincontainer3 .activeldd3:eq(0)").removeClass("firstcheck3");
	$(".maincontainer3 div.chip3").removeClass("activeimg3");
}

if ($(".chip3 :checkbox[type='checkbox']:checked").length == 2)  {      
  //not(:checked)
   
   $('.chip3 :checkbox:not(:checked)').prop('disabled', true);
   $(".maincontainer3 ." + inputValue3).addClass("activeldd3");
   $(".maincontainer3 .activeldd3:eq(0)").addClass("firstcheck3");
   $(this).closest('div.chip3').addClass('activeimg3');
}
  else { 
   $('.chip3 :checkbox:not(:checked)').prop('disabled', false);  
}
});

$('#alerts-dropdown').perfectScrollbar();
$('#notifications-dropdown').perfectScrollbar();



$('#datetimepicker3_1x, #datetimepicker4_1x, #datetimepicker5_1x, #datetimepicker6_1x, #datetimepicker7_1x, #datetimepicker8_1x').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()									 
});
$('#datetimepicker3_3x, #datetimepicker4_3x, #datetimepicker5_3x, #datetimepicker6_3x, #datetimepicker7_3x, #datetimepicker8_3x').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()										 
});


$('#datetimepicker3').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()										 
});

$('#datetimepicker4').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()											 
});

$('#datetimepicker5').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()										 
});

$('#datetimepicker6').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()											 
});

$('#datetimepicker7').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()	
});

$('#datetimepicker8').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()	
});

$("#datetimepicker7").on("dp.change", function (e) {
	$('#datetimepicker8').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker8").on("dp.change", function (e) {
	$('#datetimepicker7').data("DateTimePicker").maxDate(e.date);
});

datetimepicker7_1x

/* notification */

$('#datetimepicker9b').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});

$('#datetimepicker10b').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});

$("#datetimepicker9b").on("dp.change", function (e) {
	$('#datetimepicker10b').data("DateTimePicker").maxDate(e.date);
});
$("#datetimepicker10b").on("dp.change", function (e) {
	$('#datetimepicker9b').data("DateTimePicker").maxDate(e.date);
});

/* alerts */
$('#datetimepicker9a').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});

$('#datetimepicker10a').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});

$("#datetimepicker9a").on("dp.change", function (e) {
	$('#datetimepicker10a').data("DateTimePicker").maxDate(e.date);
});
$("#datetimepicker10a").on("dp.change", function (e) {
	$('#datetimepicker9a').data("DateTimePicker").maxDate(e.date);
});

/* tab1 */
$('#datetimepicker1_1x_a').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()									 
});
$('#datetimepicker2_1x_a').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_a").on("dp.change", function (e) {
	$('#datetimepicker2_1x_a').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_a").on("dp.change", function (e) {
	$('#datetimepicker1_1x_a').data("DateTimePicker").maxDate(e.date);
});

/* tab2 */
$('#datetimepicker1_1x_b').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()									 
});
$('#datetimepicker2_1x_b').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_b").on("dp.change", function (e) {
	$('#datetimepicker2_1x_b').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_b").on("dp.change", function (e) {
	$('#datetimepicker1_1x_b').data("DateTimePicker").maxDate(e.date);
});

/* tab3 */
$('#datetimepicker1_1x_c').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()									 
});
$('#datetimepicker2_1x_c').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_c").on("dp.change", function (e) {
	$('#datetimepicker2_1x_c').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_c").on("dp.change", function (e) {
	$('#datetimepicker1_1x_c').data("DateTimePicker").maxDate(e.date);
});

/* tab4 */
$('#datetimepicker1_1x_d').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()									 
});
$('#datetimepicker2_1x_d').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_d").on("dp.change", function (e) {
	$('#datetimepicker2_1x_d').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_d").on("dp.change", function (e) {
	$('#datetimepicker1_1x_d').data("DateTimePicker").maxDate(e.date);
});

/* tab5 */
$('#datetimepicker1_1x_e').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()									 
});
$('#datetimepicker2_1x_e').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_e").on("dp.change", function (e) {
	$('#datetimepicker2_1x_e').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_e").on("dp.change", function (e) {
	$('#datetimepicker1_1x_e').data("DateTimePicker").maxDate(e.date);
});

/* tab6 */
$('#datetimepicker1_1x_f').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()									 
});
$('#datetimepicker2_1x_f').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_f").on("dp.change", function (e) {
	$('#datetimepicker2_1x_f').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_f").on("dp.change", function (e) {
	$('#datetimepicker1_1x_f').data("DateTimePicker").maxDate(e.date);
});

/* tab7 */
$('#datetimepicker1_1x_g').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()								 
});
$('#datetimepicker2_1x_g').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_g").on("dp.change", function (e) {
	$('#datetimepicker2_1x_g').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_g").on("dp.change", function (e) {
	$('#datetimepicker1_1x_g').data("DateTimePicker").maxDate(e.date);
});

/* tab8 */
$('#datetimepicker1_1x_h').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()								 
});
$('#datetimepicker2_1x_h').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_h").on("dp.change", function (e) {
	$('#datetimepicker2_1x_h').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_h").on("dp.change", function (e) {
	$('#datetimepicker1_1x_h').data("DateTimePicker").maxDate(e.date);
});

/* tab9 */
$('#datetimepicker1_1x_i').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()								 
});
$('#datetimepicker2_1x_i').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_i").on("dp.change", function (e) {
	$('#datetimepicker2_1x_i').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_i").on("dp.change", function (e) {
	$('#datetimepicker1_1x_i').data("DateTimePicker").maxDate(e.date);
});

/* tab10 */
$('#datetimepicker1_1x_j').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$('#datetimepicker2_1x_j').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_j").on("dp.change", function (e) {
	$('#datetimepicker2_1x_j').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_j").on("dp.change", function (e) {
	$('#datetimepicker1_1x_j').data("DateTimePicker").maxDate(e.date);
});

/* tab11 */
$('#datetimepicker1_1x_k').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()								 
});
$('#datetimepicker2_1x_k').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_k").on("dp.change", function (e) {
	$('#datetimepicker2_1x_k').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_k").on("dp.change", function (e) {
	$('#datetimepicker1_1x_k').data("DateTimePicker").maxDate(e.date);
});

/* tab12 */
$('#datetimepicker1_1x_l').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()								 
});
$('#datetimepicker2_1x_l').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_l").on("dp.change", function (e) {
	$('#datetimepicker2_1x_l').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_l").on("dp.change", function (e) {
	$('#datetimepicker1_1x_l').data("DateTimePicker").maxDate(e.date);
});

/* tab13 */
$('#datetimepicker1_1x_m').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()								 
});
$('#datetimepicker2_1x_m').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_m").on("dp.change", function (e) {
	$('#datetimepicker2_1x_m').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_m").on("dp.change", function (e) {
	$('#datetimepicker1_1x_m').data("DateTimePicker").maxDate(e.date);
});

/* tab14 */
$('#datetimepicker1_1x_n').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()								 
});
$('#datetimepicker2_1x_n').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_n").on("dp.change", function (e) {
	$('#datetimepicker2_1x_n').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_n").on("dp.change", function (e) {
	$('#datetimepicker1_1x_n').data("DateTimePicker").maxDate(e.date);
});

/* tab15 */
$('#datetimepicker1_1x_o').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()								 
});
$('#datetimepicker2_1x_o').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_o").on("dp.change", function (e) {
	$('#datetimepicker2_1x_o').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_o").on("dp.change", function (e) {
	$('#datetimepicker1_1x_o').data("DateTimePicker").maxDate(e.date);
});

/* tab16 */
$('#datetimepicker1_1x_p').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()								 
});
$('#datetimepicker2_1x_p').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});
$("#datetimepicker1_1x_p").on("dp.change", function (e) {
	$('#datetimepicker2_1x_p').data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker2_1x_p").on("dp.change", function (e) {
	$('#datetimepicker1_1x_p').data("DateTimePicker").maxDate(e.date);
});




$('input[type="radio"]').click(function(){
	var getValue = $(this).attr("value");
	var targetBox = $("." + getValue);
	$(".box").not(targetBox).hide();
	$(targetBox).show();
});





        $(".showItem").hide();
        $(".showhead").show();
        $(".hidehead").hide();
 
    $('.showhead').click(function(){
    $(this).parent().find('.showItem').toggle();
         $(this).parent().find(".showhead").hide();
        $(this).parent().find(".hidehead").show();
    });
 
 $('.hidehead').click(function(){
    $(this).parent().find('.showItem').toggle();
         $(this).parent().find(".showhead").show();
        $(this).parent().find(".hidehead").hide();
 
    });
 


