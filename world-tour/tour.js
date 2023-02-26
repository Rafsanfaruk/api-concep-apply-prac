// console.log('hiiiiaaa hooooooo');

const loadAllData =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        showAllData(data.slice(0,9))

    });
    
};

const showAllData =(countries) =>{
    // console.log(countries.slice(0,5));
    const countriesInfoContainer =document.getElementById("countries-info");
    countriesInfoContainer.innerHTML ="";
    countries.forEach(country => {
        // console.log(country.cca2);
        const div =document.createElement('div');
        div.innerHTML=`
        <div class="card w-full h-96 bg-base-100 shadow-2xl">
            <figure class="px-10 pt-10">
            <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
            </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${country.name.common}</h2>
             <p>Capital:${country.capital[0]}</p>
            <p>Population:${country.population}</p>
           <div class="card-actions">
            <button onclick="showDetails('${country.cca2}')" class="btn btn-primary">Details</button>
           </div>
         </div>
        </div>

        `
        countriesInfoContainer.appendChild(div);
    });
};


const showDetails = (id) =>{
    // console.log(id);
    const URL =`https://restcountries.com/v3.1/alpha/${id}`;
    // console.log(URL);
    fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data))



}


loadAllData();


//https://restcountries.com/v3.1/alpha/${id};


const showAllDataTogether=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        showAllData(data)
    });
};

// const showSingleCountry =(id)=>{
//     console.log(id);
// }