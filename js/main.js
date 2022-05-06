window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});


const localApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApi = 'https://visitorcountapi.azurewebsites.net/api/HttpTrigger1?code=sZrhu0k7XIQWcu03ehWAUmZjpeP6fPUsNURWA8aMeBnNI5nORrvtww=='; 

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
  .then(response => {
      return response.json()
  })
  .then(response => {
      console.log("Website called function API.");
      count = response; <br />document.getElementById('counter').innerText = count;
      document.getElementById('counter').innerText = count;
  }).catch(function(error) {
      console.log(error);
    });
  return count;
}