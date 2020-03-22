<script>
// comparing dates to one another

function dateCheckerer(){

// Year/Month/Day	
var dateCur = new date();

	
	
var dateIn = document.getElementById('timeHeals').value;

	if(  dateIn < dateCur ){
		alert('Event is in the past!');
	} else if(dateIn == dateCur) {
		alert('Event cannot start today');	
	}
}


function comTime(){

var staTime = new date(document.getElementById('beTime').value);
var enTime = new date(document.getelementById('cloTime').value);
	
var cH = staTime.getHours();	
var eH = enTime.getHours();
	
var cM = staTime.getMinutes();
var eM = enTime.getMinutes();

/* you also might be able to do there 2 checks in one if
	if(cH < eH || cM < eM) {
		alert('Times are Wrong!');
	}
*/
	
	if(cH < eH ){
		alert('Times are wrong!');
	}
	
	if(  cM < eM ){
		alert('Times are wrong!');
	}
// be sure to close off your fubctions 
}	
	
</script>
