$(window).load(function(){

function fnFormatDetails(table_id, html) {
    var sOut = "<table id=\"allplacementdb_table_" + table_id + "\" class=\"dataTable\" role=\"grid\">";
    sOut += html;
    sOut += "</table>";
    return sOut;
}

	var iTableCounter = 1;
    var oTable;
    var oInnerTable;
    var TableHtml;

    //Run On HTML Build
								
        TableHtml = $("#allplacementdb_table").html();
		//alert("test");
        //Insert a 'details' column to the table
        var nCloneTh = document.createElement('th');

        
        var nCloneTd = document.createElement('td');
        nCloneTd.innerHTML = '<img src="images/enable.png">';
        nCloneTd.className = "center";


		/*$('.filled-in[type="checkbox"] + label').click(function () {
        alert("checked")
		$('#allplacementdb_table tbody input[type="checkbox"]').prop('checked', this.checked);
    });*/

        //Initialse DataTables, with no sorting on the 'details' column
        var oTable = $('#allplacementdb_table').dataTable({
												 
	"searching": false,
	"lengthMenu": false,
	"stateSave": false,
	lengthChange : false,
	paging: true,
	"example_filter":false,
            "bJQueryUI": true,
            "sPaginationType": "simple_numbers",
            "aoColumnDefs": [
            { "bSortable": false, "aTargets": [0] }
        ],
			
            "aaSorting": [[1, 'asc']]
        });
		
		


        /* Add event listener for opening and closing details
        * Note that the indicator for showing which row is open is not controlled by DataTables,
        * rather it is done here
        */

/*				$('table.dataTable thead th:nth-child(1)').hide();
		$('table.dataTable tbody td:nth-child(1)').hide();

		$('table.dataTable thead th:nth-child(2)').hide();
		$('table.dataTable tbody td:nth-child(2)').hide();
*/
		//$('table.dataTable thead td:nth-child(1)').hide();

		
        
});//]]> 
