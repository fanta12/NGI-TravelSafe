// Your code goes here


/*useMetricUnits = true;

changeUnits(document.getElementById('unitSwitch'));
//unitSwitch c'est l'id de button checkbox
function showDistance(data){
	
	console.log("showDistance - metric? " + useMetricUnits);
	var distance = data.distance_traveled;
	if( distance !== undefined){		
	        var distanceText = document.getElementById('distance');
			distance = useMetricUnits ? distance : data.distance_traveled;
			distanceText.innerHTML = distance;	
	}
}

function changeUnits(checkbox){	
	console.log("Change!"+checkbox.checked);	
	useMetricUnits = checkbox.checked;
	gm.info.getVehicleData(showDistance, ['distance_traveled']);
	//gm.info.watchVehileData(showDistance, ['distance_traveled']);
}
gm.info.getVehicleData(showDistance, ['distance_traveled']);
gm.info.watchVehileData(showDistance, ['distance_traveled']);


*/


var useMetricUnits = true;
changeUnits(document.getElementById('unitSwitch'));

function showDistance(data) {
  console.log("showDistance - metric? " + useMetricUnits);
  var distance = data.distance_traveled;
  if ( distance !== undefined ) {
    var distanceText = document.getElementById('distance');
    distance = useMetricUnits ? distance : data.distance_traveled;
    distanceText.innerHTML = distance;
  }
}

function changeUnits(checkbox) {
  console.log("Changed!" + checkbox.checked);
  useMetricUnits = checkbox.checked;
  gm.info.getVehicleData(showDistance, ['distance_traveled']);
}

gm.info.watchVehicleData(showDistance, ['distance_traveled']);





/*useMetricUnits = true;
changeUnits(document.getElementById('unitSwitch2'));
//unitSwitch c'est l'id de button checkbox
function showFuel(data){	
	console.log("showFuel - metric? " + useMetricUnits);
	var fuel = data.fuel_level;	
	if( fuel !== undefined){		
	        var fuelText = document.getElementById('fuel');
			fuel = useMetricUnits ? fuel : data.fuel_level;
			fuelText.innerHTML = fuel;	
	}
}
function changeUnits(checkbox){	
	console.log("Change!"+checkbox.checked);	
	useMetricUnits = checkbox.checked;	
	gm.info.getVehicleData(showFuel, ['fuel_level']);

}
gm.info.watchVehileData(showFuel, 'fuel_level');*/


var useMetricUnits = true;
changeUnits(document.getElementById('unitSwitch2'));

function showFuel(data) {
  console.log("showFuel - metric? " + useMetricUnits);
  var fuel = data.fuel_level;
  if ( fuel !== undefined ) {
    var fuelText = document.getElementById('fuel');
    fuel = useMetricUnits ? fuel : data.fuel_level;
    fuelText.innerHTML = fuel;
  }
}

function changeUnits(checkbox) {
  console.log("Changed!" + checkbox.checked);
  useMetricUnits = checkbox.checked;
  gm.info.getVehicleData(showFuel, ['fuel_level']);
}

gm.info.watchVehicleData(showFuel, ['fuel_level']);