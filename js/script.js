

/*var table = $('#jobgroupdb_table').DataTable();
table.columns.adjust().draw();
*/

if($("ul.side-nav.leftside-navigation").height()==800){
	$(this).css("overflow-y","hidden");
}

/* var imageWidth = 152;$(".imageContainer").width($(".imagegallery").length*imageWidth); */

  $('.dropdown-button1').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: ($('.dropdown-content').width()*3)/2.5 + 5, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
  $('.dropdown-button2').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: ($('.dropdown-content').width()*3)/2.5 + 5, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
  
  
  
        
  $('input[name="alertgroup"]').click(function(){
        var getvalue = $(this).attr("value");
        $(".alertbox").hide();
        $("." + getvalue).show();
  });
	
  $('input[name="notifygroup"]').click(function(){
        var getvalue = $(this).attr("value");
        $(".notifybox").hide();
        $("." + getvalue).show();
  });	

$(".sidebar-collapse").on("click",function(){
	$("#main").toggleClass("slideleft");
	$(".nav-slideleft").toggleClass("navleftslide");
});

$('.chip input[type="checkbox"]').parent(".chip.activeimg").find("img").show();
$('.chip input[type="checkbox"]').click(function(){

		var inputValue = $(this).attr("value");
		$(".maincontainer1 ." + inputValue).removeClass("activeldd");
		$(".maincontainer1 .list-group").removeClass("firstcheck");
		$(".maincontainer1 ." + inputValue).toggle();	
		$(this).parent("").toggleClass("activeimg");
													 
	if ($(".chip :checkbox[type='checkbox']:checked").length == 0)  { 
		$(".maincontainer1 .list-group").removeClass("activeldd");
		$(".maincontainer1 .activeldd:eq(0)").removeClass("firstcheck");		
	}
											
	if ($(".chip :checkbox[type='checkbox']:checked").length == 1)  { 
		$(".maincontainer1 ." + inputValue).addClass("activeldd");
		$(".maincontainer1 ." + inputValue).addClass("firstcheck");
	}

	if ($(".chip :checkbox[type='checkbox']:checked").length == 2)  {      
		//not(:checked)
		$('.chip :checkbox:not(:checked)').prop('disabled', true);
		$(".maincontainer1 ." + inputValue).addClass("activeldd");
		$(".maincontainer1 .activeldd:eq(0)").addClass("firstcheck");
	}
	else { 
		$('.chip :checkbox:not(:checked)').prop('disabled', false);  
	}
  });

$('.chip2 input[type="checkbox"]').parent(".chip2.activeimg2").find("img").show();
$('.chip2 input[type="checkbox"]').click(function(){
												  
	var inputValue2 = $(this).attr("value");
	$(".maincontainer2 ." + inputValue2).removeClass("activeldd2");
	$(".maincontainer2 .list-group").removeClass("firstcheck2");
	$(".maincontainer2 ." + inputValue2).toggle();
	$(this).parent("").toggleClass("activeimg2");

if ($(".chip2 :checkbox[type='checkbox']:checked").length == 0)  { 
	$(".maincontainer2 .list-group").removeClass("activeldd2");
	$(".maincontainer2 .activeldd2:eq(0)").removeClass("firstcheck2");
}

if ($(".chip2 :checkbox[type='checkbox']:checked").length == 1)  { 
		$(".maincontainer2 ." + inputValue2).addClass("activeldd2");
		$(".maincontainer2 ." + inputValue2).addClass("firstcheck2");
}

if ($(".chip2 :checkbox[type='checkbox']:checked").length == 2)  {      
  //not(:checked)
   $('.chip2 :checkbox:not(:checked)').prop('disabled', true);
   $(".maincontainer2 ." + inputValue2).addClass("activeldd2");
   $(".maincontainer2 .activeldd2:eq(0)").addClass("firstcheck2");
}
  else { 
   $('.chip2 :checkbox:not(:checked)').prop('disabled', false);  
}
});

$('.chip3 input[type="checkbox"]').parent(".chip3.activeimg").find("img").show();
$('.chip3 input[type="checkbox"]').click(function(){
												  
	var inputValue3 = $(this).attr("value");
	$(".maincontainer3 ." + inputValue3).removeClass("activeldd3");
	$(".maincontainer3 .list-group").removeClass("firstcheck3");
	$(".maincontainer3 ." + inputValue3).toggle();
	$(this).parent("").toggleClass("activeimg3");

if ($(".chip3 :checkbox[type='checkbox']:checked").length == 0)  { 
	$(".maincontainer3 .list-group").removeClass("activeldd3");
	$(".maincontainer3 .activeldd3:eq(0)").removeClass("firstcheck3");
}

	if ($(".chip3 :checkbox[type='checkbox']:checked").length == 1)  { 
		$(".maincontainer3 ." + inputValue).addClass("activeldd3");
		$(".maincontainer3 ." + inputValue).addClass("firstcheck3");
	}

if ($(".chip3 :checkbox[type='checkbox']:checked").length == 2)  {      
  //not(:checked)
   
   $('.chip3 :checkbox:not(:checked)').prop('disabled', true);
   $(".maincontainer3 ." + inputValue3).addClass("activeldd3");
   $(".maincontainer3 .activeldd3:eq(0)").addClass("firstcheck3");
}
  else { 
   $('.chip3 :checkbox:not(:checked)').prop('disabled', false);  
}
});

$('.chip4 input[type="checkbox"]').parent(".chip4.activeimg4").find("img").show();
$('.chip4 input[type="checkbox"]').click(function(){
												  
	var inputValue4 = $(this).attr("value");
	$(".maincontainer4 ." + inputValue4).removeClass("activeldd4");
	$(".maincontainer4 .list-group").removeClass("firstcheck4");
	$(".maincontainer4 ." + inputValue4).toggle();
	$(this).parent("").toggleClass("activeimg4");

if ($(".chip4 :checkbox[type='checkbox']:checked").length == 0)  { 
	$(".maincontainer4 .list-group").removeClass("activeldd4");
	$(".maincontainer4 .activeldd4:eq(0)").removeClass("firstcheck4");
}

if ($(".chip4 :checkbox[type='checkbox']:checked").length == 1)  { 
	$(".maincontainer4 ." + inputValue4).addClass("activeldd4");
	$(".maincontainer4 ." + inputValue4).addClass("firstcheck4");
}

if ($(".chip4 :checkbox[type='checkbox']:checked").length == 2)  {      
  //not(:checked)
   
   $('.chip4 :checkbox:not(:checked)').prop('disabled', true);
   $(".maincontainer4 ." + inputValue4).addClass("activeldd4");
   $(".maincontainer4 .activeldd4:eq(0)").addClass("firstcheck4");
}
  else { 
   $('.chip4 :checkbox:not(:checked)').prop('disabled', false);  
}
});

$('.chip5 input[type="checkbox"]').parent(".chip5.activeimg5").find("img").show();
$('.chip5 input[type="checkbox"]').click(function(){
												  
	var inputValue5 = $(this).attr("value");
	$(".maincontainer5 ." + inputValue5).removeClass("activeldd5");
	$(".maincontainer5 .list-group").removeClass("firstcheck5");
	$(".maincontainer5 ." + inputValue5).toggle();	
	$(this).parent("").toggleClass("activeimg5");	
													 

if ($(".chip5 :checkbox[type='checkbox']:checked").length == 0)  { 
	$(".maincontainer5 .list-group").removeClass("activeldd5");
	$(".maincontainer5 .activeldd5:eq(0)").removeClass("firstcheck5");
}
if ($(".chip5 :checkbox[type='checkbox']:checked").length == 1)  { 
	$(".maincontainer5 ." + inputValue5).addClass("activeldd5");
	$(".maincontainer5 ." + inputValue5).addClass("firstcheck5");
}
if ($(".chip5 :checkbox[type='checkbox']:checked").length == 2)  {      
  //not(:checked)
   
   $('.chip5 :checkbox:not(:checked)').prop('disabled', true);
   $(".maincontainer5 ." + inputValue5).addClass("activeldd5");
   $(".maincontainer5 .activeldd5:eq(0)").addClass("firstcheck5");
}
  else { 
   $('.chip5 :checkbox:not(:checked)').prop('disabled', false);  
}
});

$('.chip6 input[type="checkbox"]').parent(".chip6.activeimg6").find("img").show();
$('.chip6 input[type="checkbox"]').click(function(){
												  
	var inputValue6 = $(this).attr("value");
	$(".maincontainer6 ." + inputValue6).removeClass("activeldd6");
	$(".maincontainer6 .list-group").removeClass("firstcheck6");
	$(".maincontainer6 ." + inputValue6).toggle();	
	$(this).parent("").toggleClass("activeimg6");	
													 

if ($(".chip6 :checkbox[type='checkbox']:checked").length == 0)  { 
	$(".maincontainer6 .list-group").removeClass("activeldd6");
	$(".maincontainer6 .activeldd6:eq(0)").removeClass("firstcheck6");
}
if ($(".chip6 :checkbox[type='checkbox']:checked").length == 1)  { 
	$(".maincontainer6 ." + inputValue6).addClass("activeldd6");
	$(".maincontainer6 ." + inputValue6).addClass("firstcheck6");
}
if ($(".chip6 :checkbox[type='checkbox']:checked").length == 2)  {      
  //not(:checked)
   
   $('.chip6 :checkbox:not(:checked)').prop('disabled', true);
   $(".maincontainer6 ." + inputValue6).addClass("activeldd6");
   $(".maincontainer6 .activeldd6:eq(0)").addClass("firstcheck6");
}
  else { 
   $('.chip6 :checkbox:not(:checked)').prop('disabled', false);  
}
});

$('.chip7 input[type="checkbox"]').parent(".chip7.activeimg7").find("img").show();
$('.chip7 input[type="checkbox"]').click(function(){
												  
	var inputValue7 = $(this).attr("value");
	$(".maincontainer7 ." + inputValue7).removeClass("activeldd7");
	$(".maincontainer7 .list-group").removeClass("firstcheck7");
	$(".maincontainer7 ." + inputValue7).toggle();	
	$(this).parent("").toggleClass("activeimg7");	
													 

if ($(".chip7 :checkbox[type='checkbox']:checked").length == 0)  { 
	$(".maincontainer7 .list-group").removeClass("activeldd7");
	$(".maincontainer7 .activeldd7:eq(0)").removeClass("firstcheck7");
}
if ($(".chip7 :checkbox[type='checkbox']:checked").length == 1)  { 
	$(".maincontainer7 ." + inputValue7).addClass("activeldd7");
	$(".maincontainer7 ." + inputValue7).addClass("firstcheck7");
}
if ($(".chip7 :checkbox[type='checkbox']:checked").length == 2)  {      
  //not(:checked)
   
   $('.chip7 :checkbox:not(:checked)').prop('disabled', true);
   $(".maincontainer7 ." + inputValue7).addClass("activeldd7");
   $(".maincontainer7 .activeldd7:eq(0)").addClass("firstcheck7");
}
  else { 
   $('.chip7 :checkbox:not(:checked)').prop('disabled', false);  
}
});


/*
$('#alerts-dropdown').perfectScrollbar();
$('#notifications-dropdown').perfectScrollbar();
*/


$('#datetimepicker3_1x, #datetimepicker4_1x, #datetimepicker5_1x, #datetimepicker6_1x, #datetimepicker7_1x, #datetimepicker8_1x').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()									 
});
$('#datetimepicker3_2x, #datetimepicker4_2x, #datetimepicker5_2x, #datetimepicker6_2x, #datetimepicker7_2x, #datetimepicker8_2x, #datetimepicker9_2x, #datetimepicker10_2x').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()										 
});
$('#datetimepicker3_3x, #datetimepicker4_3x, #datetimepicker5_3x, #datetimepicker6_3x, #datetimepicker7_3x, #datetimepicker8_3x').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()										 
});
$('#datetimepicker3_4x, #datetimepicker4_4x, #datetimepicker5_4x, #datetimepicker6_4x, #datetimepicker7_4x, #datetimepicker8_4x').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()										 
});
$('#datetimepicker3_5x, #datetimepicker4_5x, #datetimepicker5_5x, #datetimepicker6_5x, #datetimepicker7_5x, #datetimepicker8_5x').datetimepicker({
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
$('#datetimepickerform1').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()								 
});
$('#datetimepickerform2').datetimepicker({
	format: 'MMM DD, YY',
	defaultDate: new Date()
});

/* Job Group Form */
$("#datetimepickerform1").on("dp.change", function (e) {
	$('#datetimepickerform2').data("DateTimePicker").minDate(e.date);
});
$("#datetimepickerform2").on("dp.change", function (e) {
	$('#datetimepickerform1').data("DateTimePicker").maxDate(e.date);
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
 


