//  get data from api
const getData = async(topic)=>{
    let data = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/topic/${topic}.rss`);
    let dataJson = await data.json();
    // console.log("data = ", dataJson.items);
    // debugger
    let arr = Array.from(dataJson.items);
    console.log(arr);
    return arr; 
}
 
// add cards to corousel

//function to add cards to DOM
const addCardsToDom = (list) =>{
    let newsContainer = document.querySelector("#news-container");
    console.log(newsContainer);
    console.log("from addCardsToDom" + list);
    list.forEach((item)=>{
        //date manipulation
        let currentDate = new Date(item.pubDate);
        // Extract day, month, and year components
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1; // Month starts from 0
        let year = currentDate.getFullYear();
        let date = `${day}/${month}/${year}`
        console.log(date); 

        //Dom manipulation
        newsContainer.innerHTML += `
        <div class="card m-2" style="width: 18rem;">
        <img src=${item.enclosure.link} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <div class="author">
            ${item.author} <i class='fas fa-circle circle'></i> ${date
            }
        </div>
        <p class="card-text">${item.description}</p>
        <a href=${item.link} class="btn btn-primary">Go To News</a>
        </div>
      </div>`
    })
}

//clearCardsFromDom
const clearCardsFromDom =()=>{
    let newsContainer = document.querySelector("#news-container");
    newsContainer.innerHTML = "";
}

//addDateToDom
const addDateToDom = ()=>{
    let newDAte = new Date();
    let dateNode = document.querySelector("#date");
    dateNode.innerHTML = newDAte.toDateString();
    // console.log(newDAte.toDateString());
}
export {getData,addCardsToDom,clearCardsFromDom,addDateToDom}


