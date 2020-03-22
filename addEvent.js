<script>
// comparing dates to one another

function dateCheckerer(){

// Year/Month/Day	
var dateCur = new date();

	
	
var dateIn = document.getElementById('timeHeals').value;

	if(  dateIn < dateCur ){
		alert('Event is in the past!');
	} else(dateIn == dateCur) {
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

	
	if(cH < eH ){
		alert('Times are wrong!');
	}
	
	if(  cM < eM ){
		alert('Times are wrong!');
	}
	
	
	
</script>
