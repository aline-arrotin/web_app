	

	function myPosition (position){
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		altitude = position.coords.altitude;
		alert(latitude + " " + longitude + " " + altitude);
		console.log(position);

		var p = document.querySelector('#situation');
		p.innerHTML = "latitude"+latitude+" "+"longitude"+longitude;

		var centerpos = new google.maps.LatLng(latitude,longitude);

		// Ansi que des options pour la carte, centrée sur latlng
		var optionsGmaps = {
			center:centerpos,
			navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoom: 15
		};

		var map = new google.maps.Map(document.querySelector("#map"), optionsGmaps);

		var latlng = new google.maps.LatLng(latitude, longitude);

		// Ajout d'un marqueur à la position trouvée
		var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			title:"Vous êtes ici"
		});
		
		map.panTo(latlng);


	}

	function ErrorPosition(error) {
		console.log(error);
		info = "Erreur de géolocalisation : ";
		switch(error) {
			case error.TIMEOUT :
			info += "Timeout !!";
			break;

			case error.PERMISSION_DENIED :
			info += "Donnez la permission de vous situer";
			break;

			case error.POSITION_UNAVAILABLE :
			info += "Impossible de vous situer";
			break;

			case error.UNKNOWN_ERROR :
			default :
			info += "Erreur inconnue";
			break;
		}
		alert(info);
	}

	if(navigator.geolocation) {
		args = {
			"maximumAge" : 60000, // Perd la connexion après.
			"enableHighAccuracy" : true// Donne priorité au GPS.
		};
		navigator.geolocation.getCurrentPosition(myPosition, ErrorPosition, args);
	} else {alert("error");}