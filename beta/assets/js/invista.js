// Toggle code for visibility of left nav
	var x=2;
	$('#togglemenu').click(function(){
    $('.togglenav').animate({width:'toggle'});
	 
	 // Toggle code for easing offset of absolutely positioned .content
	 if(x==2){
	 $( ".content" ).animate({
     	left: "-=210",
		}, "slow" );
		 
		 };
		 
		 if(x==-2){
		
	 $( ".content" ).animate({
     	left: "+=210",
		}, "medium" );
		 
		 };
		 
 	x=x*-1;
});


var run=0;
// Set Table Cell Color When Selected
$("#mye th").click(function() {
    var selected = $(this).hasClass("yellow");
    $("#mye th").removeClass("yellow");
						 $("#mye th").removeClass("gradient-bg");

    if(!selected)
            $(this).addClass("yellow");
								 $(this).addClass("gradient-bg");

});



$("#mye .scrollContent tr").click(ScrollDownPlease);

$("#dele2 .scrollContent tr").click(ScrollDownPlease);


function ScrollDownPlease() {
	
		
			if(run<1){
			$('html, body').animate({
       		 scrollTop: $(".order-tracker").offset().top
    		}, 800);
			
			}
			
			run+=1;
	
    var selected = $(this).hasClass("yellow");
    $("#mye .scrollContent tr").removeClass("yellow");
    if(!selected)
            $(this).addClass("yellow");
			$(".order-details-hideshow").fadeIn();
			$('#can-disable').removeClass("disable-this");
		//	var onb="Select an order above"
			$( ".orderno" ).html(onb);	
			
			
			
	 // Toggle code for easing offset of absolutely positioned .content
	
	 $( "#full-round" ).animate({
     	height: "108px",
		}, "slow" );
	


			
			
};


$("#dele2 .scrollContent tr").click(function() {
	
					$(".order-details-hideshow").fadeIn();

});


$(".order-details-hideshow").hide();

$("#alle tbody tr").click(function() {
    var selected = $(this).hasClass("yellow");
    $("#alle tbody tr").removeClass("yellow");
    if(!selected)
            $(this).addClass("yellow");
			
			
			

	  
			
			$(".deliveries-table").fadeOut();
			$(".shipments-table").fadeOut();
			$(".current-status").fadeOut();
			
				$(".item-status-header p").html("Status for Item "+ a );
				$(".deliveries-status-header").hide();
								$(".shipments-status-header").hide();

				
				$(".deliveries-items").html(a+", 20");
				$('.shipped-ico').toggleClass('opaque').toggleClass('opaque2');
				$('.intransit').toggleClass('opaque').toggleClass('opaque2');
				
				
				
				$('.busy-items').activity({segments: 8, steps: 3, opacity: 0.3, width: 4, space: 0, length: 4, speed: 1.5, align: 'right'});
				
				$(".deliveries-table").promise().done(function(){
	   				$(".deliveries-table").delay( 1200 ).fadeIn("slow")
					$(".shipments-table").delay( 1200 ).fadeIn("slow");
					$(".current-status").delay( 1200 ).fadeIn("slow");
		
		setTimeout(hideLoaderItems, 1300)
		});
});



$("#alle th").click(function() {
    var selected = $(this).hasClass("yellow");
    $("#alle th").removeClass("yellow");
					 $("#alle th").removeClass("gradient-bg");

    if(!selected)
            $(this).addClass("yellow");
						 $(this).addClass("gradient-bg");

});


$("#shipe th").click(function() {
    var selected = $(this).hasClass("yellow");
    $("#shipe th").removeClass("yellow");
				 $("#shipe th").removeClass("gradient-bg");

    if(!selected)
            $(this).addClass("yellow");
			 $(this).addClass("gradient-bg");
			
});

$("#dele th").click(function() {
    var selected = $(this).hasClass("yellow");
    $("#dele th").removeClass("yellow");
				 $("#dele th").removeClass("gradient-bg");

    if(!selected)
            $(this).addClass("yellow");
			 $(this).addClass("gradient-bg");
			
});

$("#dele2 th").click(function() {
    var selected = $(this).hasClass("yellow");
    $("#dele th").removeClass("yellow");
				 $("#dele th").removeClass("gradient-bg");

    if(!selected)
            $(this).addClass("yellow");
			 $(this).addClass("gradient-bg");
			
});


// Setup the "Move Me" links
$(".move-btn").click(function () {
    // get the row containing this link 
    var row = $(this).closest("tr");
 
    // find out in which table it resides
    var table = $(this).closest("table");
 
    // move it
    row.detach();
 
    if (table.is("#mye")) {
        $("#alle").append(row);
    }
    else {
        $("#mye").append(row);
    }
 
    // draw the user's attention to it
    row.fadeOut();
    row.fadeIn();
});



// Table Sorter Function. Seperated so individual tables can have unique actions
    $(function(){
    	// My Exceptions Sort
	    $("#mye").stupidtable();
    });
	$(function(){
		// All Exceptions Sort
        $("#alle").stupidtable();
    });
	$(function(){
		// All Exceptions Sort
        $("#shipe").stupidtable();
    });
	$(function(){
		// All Exceptions Sort
        $("#dele").stupidtable();
    });
	
	$(function(){
		// All Exceptions Sort
        $("#dele2").stupidtable();
		 $(".outputfailures").stupidtable();
		  $(".poresponse").stupidtable();
		   $(".ers").stupidtable();
		    $(".pending-release").stupidtable();
			 $(".noir").stupidtable();
			  $(".openpastdue").stupidtable();
			 $(".nooa").stupidtable();
			  $(".table-striped").stupidtable();
    });

	// All Exceptions Sort	
	
	// Makes a Table Row Clickable
	jQuery(document).ready(function($) {
      $(".clickableRow").click(function() {
            window.document.location = $(this).attr("href");
      });
});


// Highlight Exceptions
// Set Table Cell Color When Selected
$("#items").hover(function () {
    $(".item-exception").addClass('ehighlight');
  }, 
  function () {
    $(".item-exception").removeClass('ehighlight');
  }
  );
  
  $("#shipments").hover(function () {
    $(".shipment-exception").addClass('ehighlight');
  }, 
  function () {
    $(".shipment-exception").removeClass('ehighlight');
  }
  );


// Animate Filter Results


$(function() {
    $(".region-selection").change(function() {
    var arr = $(".region-selection :checked").map(function() { return $(this).next().text(); }).get();
    $("#region-selection").html(arr.join(', '));
	 var n = $( ".region-selection :checked" ).length;
	
	if(n==0){
		$("#region-selection").text("Select a Region") ;
	}
	 
	 
  });
});







$(function() {
    $(".country-selection").change(function() {
    var arr = $(".country-selection :checked").map(function() { return $(this).next().text(); }).get();
    $("#country-selection").html(arr.join(', '));
	
	 var m = $( ".country-selection :checked" ).length;
	
	if(m==0){
		$("#country-selection").text("Select a Country") ;
	}
  });
});

$(function() {
    $(".business-selection").change(function() {
    var arr = $(".business-selection :checked").map(function() { return $(this).next().text(); }).get();
    $("#business-selection").html(arr.join(', '));
	 var o = $( ".business-selection :checked" ).length;
	
	if(o==0){
		$("#business-selection").text("Select a Business Unit") ;
	}
  });
});

$(function() {
    $(".division-selection").change(function() {
    var arr = $(".division-selection :checked").map(function() { return $(this).next().text(); }).get();
    $("#division-selection").html(arr.join(', '));
	 var p = $( ".division-selection :checked" ).length;
	
	if(p==0){
		$("#division-selection").text("Select a Division") ;
	}
  });
});

$(function() {
    $(".customer-selection").change(function() {
    var arr = $(".customer-selection :checked").map(function() { return $(this).next().text(); }).get();
    $("#customer-selection").html(arr.join(', '));
	 var q = $( ".customer-selection :checked" ).length;
	
	if(q==0){
		$("#customer-selection").text("Select a Customer") ;
	}
  });
});

	$(".item-status-header p").html("Select an Item to view its current status");
			
			$(".current-status").hide();
			$(".deliveries-table").hide();
			$(".shipments-table").hide();
	
	
	// Exception filter Level		
		
		
		$(function() {
    $(".option-a").change(function() {
    var arr = $(".option-a :checked").map(function() { return $(this).next().text(); }).get();
    $("#option-a").html(arr.join(', '));
	
	 var m = $( ".option-a :checked" ).length;
	
	if(m==0){
		$("#option-a").text("Select an Order") ;
	}
  });
});

$(function() {
    $(".option-b").change(function() {
    var arr = $(".option-b :checked").map(function() { return $(this).next().text(); }).get();
    $("#option-b").html(arr.join(', '));
	 var o = $( ".option-b :checked" ).length;
	
	if(o==0){
		$("#option-b").text("Select a PO") ;
	}
  });
});


// Key Metrics Selected State Change
/*
$(".key-metrics table td").click(function() {
    var selected = $(this).hasClass("gradient-bg");
    $(".key-metrics table td").removeClass("gradient-bg");
    if(!selected)
            $(this).addClass("gradient-bg");
});
*/

$("th:last-child").css({border:"none" });


$(document).ready(function(){
    $("#toggleFilter2").click(function(){
        $('#toggleFilter2').html($('#toggleFilter2').text() == 'VIEW LINE ITEMS' ? 'VIEW ORDERS' : 'VIEW LINE ITEMS');
	
    });
})

$(document).ready(function(){
    var dv=1;
	$("#toggleFilter3").click(function(){
        $('#toggleFilter3').html($('#toggleFilter3').text() == 'VIEW EXCEPTIONS ONLY' ? 'VIEW ALL ITEMS' : 'VIEW EXCEPTIONS ONLY');
			
			if(dv==-1){
			$(".no-exception").fadeIn();
			}
			
			if(dv==1){
			$(".no-exception").fadeOut();
			
			}
			dv*=-1;
			
			
    });
})

// Pie Chart Generator

$(function() {

		// Example Data

		var data = [
			{ label: "Shipped Not-Billed",  data: 34, color: '#f7c895'},
			{ label: "Incomplete",  data: 30, color: '#f9e8bb'},
			{ label: "Blocked",  data: 73, color: '#cacfb3'},
			{ label: "Missing Shipment",  data: 71, color: '#aee5e3'},
			{ label: "Not Confirmed",  data: 55, color: '#9cc2e2'},
			{ label: "Missing Items",  data: 112, color: '#bcbcff',  highlightColor: '#000000'}
		];



		
		var placeholder = $("#placeholder");


		$(function() {

			placeholder.unbind();


			$.plot(placeholder, data, {
				series: {
					pie: { 
						show: true,
						radius: 1,
							width: '100%',
							height: '100%',
						
				
				stroke: {
					color: "#f7f6f5",
					width: 5
				},
				
				
				
				label: {
                show: true,
                radius: 3/4,
                formatter: function (label, series) {
                        return '<div style="font-size:19pt;text-align:center;padding:2px;">' + '' + series.data[0][1] + '</div>'; dataPoint = series.data[0][1]; },
						
                background: {
                    opacity: 0,
                }}
					
					
					
						
					}
				},
				
				legend:{
					show: false
					//position:"ne",
				},
				
				grid: {
					hoverable: true,
					clickable: true
				},
				
				
				
			});

		
		function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css( {
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            border: '1px solid #fdd',
            padding: '2px',
            'background-color': '#fee',
            opacity: 0.80
        }).appendTo("body").fadeIn(200);
    }

		

			placeholder.bind("plothover", function(event, pos, obj) {

				if (!obj) {
					return;
				}

				var percent = parseFloat(obj.series.percent).toFixed(2);
			});

			placeholder.bind("plotclick", function(event, pos, obj) {

				if (!obj) {

					return;
					
				}

				
				percent = parseFloat(obj.series.percent).toFixed(2);
								window.newLabelName = obj.series.label;
				$("#hover").html("<br/><span style='color:#545454; font-size:14pt; padding-left:10px;'><strong> " +  obj.series.label + "</strong></span>");

				changeException();
			});
		});


	});

	// A custom label formatter used by several of the plots

	function labelFormatter(label, series) {
		return "<div style='font-size:12pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
	}
