window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});

const ApiGateway = 'https://visitorcountapi.azurewebsites.net/api/HttpTrigger1?code=sZrhu0k7XIQWcu03ehWAUmZjpeP6fPUsNURWA8aMeBnNI5nORrvtww=='; 

const getVisitCount = () => {
  let count = 0;
  fetch(ApiGateway)

  .then(response => {
      return response.json()
  })

  .then(res => {
      console.log("Website called function API.");
      const count = res;
      document.getElementById('counter').innerText = count;
  })
  
  .catch(function(error) {
      console.log(error);
    });

  return count;
}