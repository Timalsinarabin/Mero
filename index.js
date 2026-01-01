
let iphone =[];
let currentPage = 1;
let itemPerPage = 4;

fetch('product.json')
  .then(response => response.json())
  .then(value =>{
    iphone = value;
    renderPage();
  });


function renderPage(){
  const content = document.getElementById('content');
  content.innerHTML = '';
  const start = (currentPage - 1)*itemPerPage;
  const end= start + itemPerPage;
  const pageItems = iphone.slice(start,end);
  pageItems.forEach(item =>{
    const div = document.createElement('div');
    div.className = 'item';
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
  document.getElementById('curr').innerHTML = currentPage;
}
document.getElementById('nextPage').addEventListener('click', nextPage);
function nextPage(){
  if(currentPage<Math.ceil(iphone.length/itemPerPage)){
    currentPage++;
    renderPage();
  }
}
document.getElementById('prevPage').addEventListener('click', prevPage);
function prevPage(){
  if(currentPage>1){
    currentPage--;
    renderPage();
  }
}
renderPage();