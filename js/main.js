window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://visitorcountapi.azurewebsites.net/api/HttpTrigger1?code=_f5IPrHoCb0Lu78Ck1WH0pxxk5oSoTthbspeVWc3mRMbAzFuFPwBXQ=='; 

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
