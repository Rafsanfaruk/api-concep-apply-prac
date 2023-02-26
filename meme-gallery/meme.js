
const loadMeme =() =>{
    const URL ='https://meme-api.com/gimme/10';
    fetch(URL)
    .then(res => res.json())
    .then(data => showMeme(data.memes))
    // .then(data => showMeme(data.memes.slice(0,3)))
}

const showMeme =(memes)=>{
    // console.log(memes);

    memes.slice(0,10).forEach(element => {
            console.log(element.url);
        const sectionContainerMeme =document.getElementById('section-container');
        
        const div =document.createElement('div');
        div.innerHTML=`
        <div class="card w-full glass shadow-2xl">
             <figure><img class-w-full h-64 src="${element.url}" alt="meme!"/></figure>
        
        </div>
        
        `
        sectionContainerMeme.appendChild(div);
    });
}


loadMeme();

