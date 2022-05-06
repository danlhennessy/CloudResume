window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://visitorcountapi.azurewebsites.net/api/HttpTrigger1?code=sZrhu0k7XIQWcu03ehWAUmZjpeP6fPUsNURWA8aMeBnNI5nORrvtww=='; 

const getVisitCount = () => {
    let count = 0;
    fetch(apiGateway, {
        mode: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        const count = res.Attributes.visitcount;
        document.getElementById('counter').innerText =count;
        document.getElementById('visitorElem').style.display = 'block';
    })
    return count;
}
