// console.log('Wowwwwwwwwhhhhhhhooooooooo');

// const searchAllData = () => {
//   const inputElement = document.getElementById("search-value");
  
//   const inputValue = inputElement.value;

const searchAllData = (id) => {
  const inputElement = document.getElementById("search-value");
  document.getElementById("single-player-details").innerHTML="";
  document.getElementById("male-player").classList.add('d-none'); 
  document.getElementById("female-player").classList.add('d-none'); 
  
  const inputValue = inputElement.value;
  
  document.getElementById('spinner').classList.remove("d-none");
  // console.log(inputValue);
  const searchId=id || inputValue;

  const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchId}`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('spinner').classList.add("d-none");
      showPlayerData(data.player)});
};

const showPlayerData = (players) => {
  document.getElementById("search-value").value = "";
  const containerElement = document.getElementById("player-info");
  containerElement.innerHTML = "";

  players.forEach((player) => {
    // console.log(player);
    // eikhane ber destructuring kore niyechi,.,
    const { strPlayer, strThumb, strNationality, idPlayer } = player;

    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
       
    <div class="card">
           <img src="${
             strThumb ? strThumb : "https://picsum.photos/200/300"
           }" class="card-img-top" alt="...">
        <div class="card-body">
           <h5 class="card-title">${strPlayer}</h5>
           <p class="card-text">${strNationality}</p>
        </div>
        <div class="my-5 mx-0">
        <button onclick="singlePlayer('${idPlayer}')" type="button" class="btn btn-danger">Details</button>
        <button  type="button" class="btn btn-primary">Delete</button>
        </div>
    </div>
    `;
    containerElement.appendChild(div);
  });
};

const singlePlayer = (id) => {
  const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
  // console.log(URL);
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSinglePlayer(data.players[0]));
};

const showSinglePlayer = (data) => {
   console.log(data);
   const {strThumb,strPlayer,strDescriptionEN,strGender}=data;

   const container = document.getElementById("single-player-details");
//    container.innerHTML ="";

   const div = document.createElement('div');

   if(strGender === "Male"){
    const element= document.getElementById("male-player");
        //   console.log(element);
             element.classList.remove('d-none');
   }
   else{
    const element= document.getElementById("female-player");
    //   console.log(element);
         element.classList.remove('d-none');
   }
   
  div.innerHTML = `
 <div class="card mb-3 w-100 h-100">
 <div class="row g-0">
   <div class="col-md-4">
     <img src="${strThumb}" class="img-fluid rounded-start" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${strPlayer}</h5>
       <p class="card-text">${strDescriptionEN.slice(0,150)+"....."}</p>
       <p class="card-text"><small class="text-muted">Hmn</small></p>
     </div>
   </div>
 </div>
</div>
   
 `;
  container.appendChild(div);

};

searchAllData("messi");
