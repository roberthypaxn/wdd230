async function fetchSpotlights() {
    try {
      const response = await fetch('JSON/spotlight.json');
      console.log(response.status);
      const spot = await response.json();
      console.table(spot.spotlights);
      displaySpotlights(spot.spotlights);
    } catch (error) {
      console.error(error);
    }
  }
  
  const displaySpotlights = (spotlights) =>{
    console.log(spotlights); // log the spotlights array
    const h2Elements = document.querySelectorAll(".the-h2");
    const iconElements = document.querySelectorAll(".the-icon");
    const h3Elements = document.querySelectorAll(".the-h3");
    const phoneElements = document.querySelectorAll(".the-phone");
    const urlElements = document.querySelectorAll(".the-url");
    
    for (let i = 0; i < spotlights.length; i++) {
      const spotlight = spotlights[i];
      h2Elements[i].textContent = spotlight.h2;
      iconElements[i].textContent = spotlight.icon;
      h3Elements[i].textContent = spotlight.h3;
      phoneElements[i].textContent = spotlight.phone;
      urlElements[i].textContent = spotlight.url;
      urlElements[i].textContent = spotlight.url;
    }
    /*spotlights.forEach(spotlight => {
      console.log(spotlight); // log each spotlight object
      h2.innerHTML = spotlight.h2;
      icon.src = spotlight.icon;
      phone.innerHTML = spotlight.phone;
      url.href = spotlight.url;
    });*/
    
  }
  
  fetchSpotlights();

  