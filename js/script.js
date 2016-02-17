$(document).ready(function() {
    getData();
});

function getData() {
	$.getJSON("js/columbia.json", function(schoolsData) {
		//Callback function runs after the data is loaded.
		loopThroughData(schoolsData);

	})
}

function loopThroughData(s) {
	for(i=0;i<s.length;i++)
	{
		var schoolName = s[i].SCHOOL_NAME;
		var year = s[i].YEAR;
		var gradPercent = s[i].GRADUATES_PCT;

		//if(gradPercent < 60 && gradPercent != 0)
		//	console.log(schoolName, gradPercent);

		var barWidth = gradPercent * 10;

		if(schoolName==="FREDERICK DOUGLASS HIGH"){
			$(".chart").append("<div class='bar' style='width: "+barWidth+"px'></div>");
		}
	}

}

