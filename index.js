
const iphone = [
      {
    title: "Apple-iphone-17-black",
    img: "https://cdn.hukut.com/apple-iphone-17-black.webp1758092960676",
    body: "iPhone 17 256GB | iPhone 17 | iPhone 17 | 17 17 (Apple iPhone)<br>iPhone 17 256GB 100 battery health True tone ✅ Face ID ✅ Box ❎ Bill ❎",
    price: "रू. 1,37,999",
    location: "Exact location near Mahendra Ratna Campus, Tachal"
  },
  {
    title: "Apple-iphone-17-pro-max-silver",
    img: "https://cdn.hukut.com/apple-iphone-17-pro-max-silver.webp1758095958195",
    body: "iPhone 17 Pro Max 256GB | True Tone ✅ Face ID ✅",
    price: "रू. 1,79,999",
    location: "Exact location near Mahendra Ratna Campus, Tachal"
  },
    {
    title: "Apple-iphone-17-black",
    img: "https://cdn.hukut.com/apple-iphone-17-black.webp1758092960676",
    body: "iPhone 17 256GB | iPhone 17 | iPhone 17 | 17 17 (Apple iPhone)<br>iPhone 17 256GB 100 battery health True tone ✅ Face ID ✅ Box ❎ Bill ❎",
    price: "रू. 1,37,999",
    location: "Exact location near Mahendra Ratna Campus, Tachal"
  },
  {
    title: "Apple-iphone-17-pro-max-silver",
    img: "https://cdn.hukut.com/apple-iphone-17-pro-max-silver.webp1758095958195",
    body: "iPhone 17 Pro Max 256GB | True Tone ✅ Face ID ✅",
    price: "रू. 1,79,999",
    location: "Exact location near Mahendra Ratna Campus, Tachal"
  },
    {
    title: "Apple-iphone-17-black",
    img: "https://cdn.hukut.com/apple-iphone-17-black.webp1758092960676",
    body: "iPhone 17 256GB | iPhone 17 | iPhone 17 | 17 17 (Apple iPhone)<br>iPhone 17 256GB 100 battery health True tone ✅ Face ID ✅ Box ❎ Bill ❎",
    price: "रू. 1,80,999",
    location: "Exact location near Mahendra Ratna Campus, Tachal"
  },
  {
    title: "Apple-iphone-17-pro-max-silver",
    img: "https://cdn.hukut.com/apple-iphone-17-pro-max-silver.webp1758095958195",
    body: "iPhone 17 Pro Max 256GB | True Tone ✅ Face ID ✅",
    price: "रू. 1,85,999",
    location: "Exact location near Mahendra Ratna Campus, Tachal"
  },
    {
    title: "Apple-iphone-17-black",
    img: "https://cdn.hukut.com/apple-iphone-17-black.webp1758092960676",
    body: "iPhone 17 256GB | iPhone 17 | iPhone 17 | 17 17 (Apple iPhone)<br>iPhone 17 256GB 100 battery health True tone ✅ Face ID ✅ Box ❎ Bill ❎",
    price: "रू. 1,90,999",
    location: "Exact location near Mahendra Ratna Campus, Tachal"
  },
  {
    title: "Apple-iphone-17-pro-max-silver",
    img: "https://cdn.hukut.com/apple-iphone-17-pro-max-silver.webp1758095958195",
    body: "iPhone 17 Pro Max 256GB | True Tone ✅ Face ID ✅",
    price: "रू. 1,85,999",
    location: "Exact location near Mahendra Ratna Campus, Tachal"
  },
    {
    title: "Apple-iphone-17-black",
    img: "https://cdn.hukut.com/apple-iphone-17-black.webp1758092960676",
    body: "iPhone 17 256GB | iPhone 17 | iPhone 17 | 17 17 (Apple iPhone)<br>iPhone 17 256GB 100 battery health True tone ✅ Face ID ✅ Box ❎ Bill ❎",
    price: "रू. 1,97,999",
    location: "Exact location near Mahendra Ratna Campus, Tachal"
  },
  {
    title: "Apple-iphone-17-pro-max-silver",
    img: "https://cdn.hukut.com/apple-iphone-17-pro-max-silver.webp1758095958195",
    body: "iPhone 17 Pro Max 256GB | True Tone ✅ Face ID ✅",
    price: "रू. 1,50,999",
    location: "Exact location near Mahendra Ratna Campus, Tachal"
  },
]
let currentPage = 1;
let itemPerPage = 4;


function renderPage(){
    const content = document.getElementById('content');
    content.innerHTML = "";
    const start = (currentPage - 1)*itemPerPage;
    const end= start + itemPerPage;
    const pageItems = iphone.slice(start,end)
    pageItems.forEach(item =>{
        const div = document.createElement('div');
        div.className = "item";
        div.innerHTML = `
            <img src="${item.img}" alt="">
            <div class="card">
                <div class="card-title">${item.title}</div>
                <div class="card-body">${item.body} </div>
                <div class="card-price">${item.price}</div>
                <div class="card-locate">${item.location}</div>
            </div>
        `;
        content.appendChild(div);
    });
    document.getElementById("curr").innerHTML = currentPage;
}
function nextPage(){
    if(currentPage<Math.ceil(iphone.length/itemPerPage)){
        currentPage++;
        renderPage();
    }
}
function prev(){
    if(currentPage>1){
        currentPage--;
        renderPage();
    }
}
renderPage();