const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

const teamsContainer = document.querySelector(".results");

async function getTeamsApi() {
  try{ const response = await fetch(url);
   const results = await response.json();

   console.log(results)

   const teams = results;

   
   teamsContainer.innerHTML = "";
        
   for(let i = 0; i < teams.length; i++) {
     if (i === 15) {
       break;
     }
     const teamName = teams[i].teamName;
     const city = teams[i].location;
         
     if (teamName.startsWith("C") || teamName.startsWith("c")){
       continue;
     }
     teamsContainer.innerHTML += `<div class="card">
                                  <h4>${teamName}</h4>
                                  <p>${city}</p>
                                  </div>`;
     console.log(teamName)
   }
  }catch (error) {
    teamsContainer.innerHTML = "Unable to connect to the API";
}
}

getTeamsApi()
