let form = document.getElementById('listForm');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event){
    event.preventDefault();
    console.log(listName);

    let anyInfo = await getInfo(listName);
    console.log(anyInfo);

    buildAnyCard(anyInfo);

    event.target.listName.value = '';
}


async function getInfo(listName){
    try{
        let response = await fetch(`${listName}`);
        let data = await response.json();
        return data;
    } catch(err){
        console.error(err);
    };
};


function buildAnyCard(){
    
    let card = document.createElement('div');
    card.className = 'card h-100';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let anyTitle = document.createElement('h5');
    anyTitle.className = 'card-title';

    let anyText = document.createElement('p');
    anyText.className = 'card-text';

    cardBody.append(anyTitle);
    cardBody.append(anyText);

    card.append(cardBody);

    let col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-3 my-3';

    col.append(card);

    let listDisplay = document.getElementById('listDisplay');
    listDisplay.prepend(col);
}