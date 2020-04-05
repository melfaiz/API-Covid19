



function numbersCallback() {

    const url = "https://corona.lmao.ninja/countries/morocco?fbclid=IwAR1Ct3lnf5ilzxcOpmeGiLSkjeD-59QzEGLtn3bIjoJP40t9SnA3DvmkHLk";
    fetch(url)
      .then(response => response.json())
      .then(json => buildView(json));
  }
  
  function buildView(json) {
    const div = document.querySelector('#data');
    div.innerHTML = '';
    const h1 = document.createElement('p');
    h1.textContent = "Countdown";

    const img = document.createElement('img');

    const ul = document.createElement('ul');

    const li_name = document.createElement('li');
    li_name.textContent = json.countryInfo.iso3;
    
    const li_cases = document.createElement('li');
    li_cases.textContent = json.cases;

    ul.appendChild(li_name);
    ul.appendChild(li_cases);

    img.src = json.countryInfo.flag;
    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(ul);
  }