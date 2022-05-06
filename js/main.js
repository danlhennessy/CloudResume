window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
  });
  
  
  const functionApi = 'https://visitorcountapi.azurewebsites.net/api/HttpTrigger1?code=sZrhu0k7XIQWcu03ehWAUmZjpeP6fPUsNURWA8aMeBnNI5nORrvtww==';
  
  const getVisitCount = () => {
    let count = 7;
    fetch(functionApi)
      .then(response => {
        return response.json()
      })
      .then(response => {
        count = response;
        console.log("Hello 👋, you are visitor number - " + count);
        document.getElementById('counter').innerText = count;
      }).catch(function (error) {
        console.log(error);
      });
    return count;
  }