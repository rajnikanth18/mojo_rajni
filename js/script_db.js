$(window).load(function(){

function fnFormatDetails(table_id, html) {
    var sOut = "<table id=\"allcampaigndb_table_" + table_id + "\" class=\"dataTable\" role=\"grid\">";
    sOut += html;
    sOut += "</table>";
    return sOut;
}

	var iTableCounter = 1;
    var oTable;
    var oInnerTable;
    var TableHtml;

    //Run On HTML Build
								
        TableHtml = $("#allcampaigndb_table").html();
		//alert("test");
        //Insert a 'details' column to the table
        var nCloneTh = document.createElement('th');

        
        var nCloneTd = document.createElement('td');
        nCloneTd.innerHTML = '<img src="images/enable.png">';
        nCloneTd.className = "center";

        $('#allcampaigndb_table tbody tr').each(function () {
            this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
        });
		$('#allcampaigndb_table thead tr').each(function () {
            this.insertBefore(nCloneTh, this.childNodes[0]);
        });
		

        //Initialse DataTables, with no sorting on the 'details' column
        var oTable = $('#allcampaigndb_table').dataTable({
												 
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

		$('table.dataTable thead th:nth-child(1)').hide();
		$('table.dataTable tbody td:nth-child(1)').hide();
/*		
		$('table.dataTable thead th:nth-child(2)').hide();
		$('table.dataTable tbody td:nth-child(2)').hide();
*/
		//$('table.dataTable thead td:nth-child(1)').hide();

		
        $('#allcampaigndb_table tbody td img').click(function () {
            var nTr = $(this).parents('tr')[0];
            if (oTable.fnIsOpen(nTr)) {
                /* This row is already open - close it */
                this.src = "images/enable.png";
                oTable.fnClose(nTr);
            }
            else {
                /* Open this row */
				//alert("sssss");
				 //var id = $(this).closest('tr').find('td.id').text();
				 var id = $(this).attr('id');
				 //alert(id);
   				 $(this).attr("id", id); 
					
                this.src = "images/disable.png";
				subTab = $("#innertable"+id).html();
	
                oTable.fnOpen(nTr, fnFormatDetails(id, subTab), 'details');
                oInnerTable = $("#innertable" + id).dataTable({
                    "bJQueryUI": true,
					"bDestroy": true,
                    "sPaginationType": "simple_numbers"
                }).fnDestroy();
                iTableCounter = iTableCounter + 1;
            }
        });
});//]]> 
