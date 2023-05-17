const cont = document.querySelector('.container1');
const countrybtn=document.getElementById('btn');
const countryname1=document.getElementById('form3Example4').value.toLowerCase()
countrybtn.addEventListener('click',()=>{
   // console.log("hii");
   const countryname=document.getElementById('form3Example4').value.toLowerCase()
   if(countryname.length==0)
   {
    alert("Enter Country name");
   }else{
  // console.log(countryname)
   fetchApiData(countryname)
   }
})
function fetchApiData(countryname) {
    const url = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`
    fetch(url).then(response => {
           return response.json();
       }).then(data => {

           console.log(data);    
            createCards(data);
        })
    }
    function createCards(data){
        
         data.forEach((coin)=>{
            // if (countryname1.length != coin.name.common.toLowerCase().length) {
            //     alert("Input matches API data of country!");
                const div = document.createElement('div') //it willl create a div
                div.classList.add('cards')//it will add card class to the div
               var currency=Object.keys(coin.currencies)[0]
               var language=Object.keys(coin.languages)
                div.innerHTML=
                `<img src="${coin.flags.png}">
                <div class="country-info">
                <h2 id="coun-curr">Country Name:-${coin.name.common}</h2>
                <p id="coun-curr">Currency:-${coin.currencies[currency].name}<p>
                <p id="coun-curr">Area:${coin.area} </p>
                <p id="coun-curr">Population:${coin.population} </p>
                <p>Region:${coin.region}</p>
                <button class="refreshbtn" onclick="location.reload()">Refresh</button>

                </div>`
                cont.appendChild(div)
            
            // else {
            //     alert("Input does not matches API data give valid country name.");
            //   }
                 
         })
        }    
     