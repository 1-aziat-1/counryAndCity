'use strict';

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
};

let selCountry = document.querySelector('#country'),
    selCity = document.querySelector('#city'),
    result = document.querySelector('.result'),
    optionCountry = document.querySelectorAll('#country>option'),
    b;

selCountry.addEventListener('change', function(e){
  selCity.style.display = 'inline'; 
  selCity.innerHTML='';
  for(let item1 in cityArr){
      if(e.target.value === item1){
          cityArr[item1].forEach((item2) =>{
              let optionElement = document.createElement('option');
              optionElement.text = item2;
             selCity.append(optionElement);     
    }); 
  }}
  optionCountry.forEach((item) => {
      if(e.target.value === item.value ){
        b = item.text;
        return b;
      }
  });
});
 
selCity.addEventListener('input', (e) => {
  let joinSel =`${b}, ` + `${e.target.value}`;
  result.innerHTML = joinSel;
});





// optionCountry.forEach((item1) => {
  //   for(let item2 in cityArr){
  //     if(item1.value === item2){
  //       cityArr[item2].forEach((item3) =>{
  //          let optionElement = document.createElement('option');
  //          optionElement.text = item3;
  //          selCity.append(optionElement);
  //       });
  //     }    
  //     break;
  //   }
  // });