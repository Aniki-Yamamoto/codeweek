const createcard = (name, username, email, street, suite, city, zipcode, phone) => {
    const divcard = document.createElement("div");
    const pname = document.createElement("h2");
    const pusername = document.createElement("p");
    const pemail = document.createElement("p");
    const pstreet = document.createElement("p");
    const psuite = document.createElement("p");
    const pcity = document.createElement("p");
    const pzipcode = document.createElement("p");
    const pphone = document.createElement("p");
    

    divcard.setAttribute("id", "divcard");
    pname.textContent = name;
    pusername.textContent = username;
    pemail.textContent = email;
    pstreet.textContent = street;
    psuite.textContent = suite;
    pcity.textContent = city;
    pzipcode.textContent = zipcode;
    pphone.textContent = phone;
    

     /* NON MI PESCA I VALUE (STREET, SUITE CITY, ZIPCODE ETC ETC) ALL'INTERNO DEI NESTED OBJECT DEL JSON*/
    divcard.append(pname, pusername, pemail, pstreet, psuite, pcity, pzipcode, pphone);
    document.body.appendChild(divcard);
  };

 
  
function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
}

function resetView() {
  const cards = document.querySelectorAll('.divcard');
  cards.forEach(card => {
    card.remove()
  });
}


const btnshowall = document.querySelector(".all")
btnshowall.addEventListener('click', e => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        data.map(user => createcard(user.name, user.username, user.email, user.street, user.suite, user.city, user.zipcode, user.phone, ))
  
    });
  })

  const btnshowAE = document.querySelector(".ae")
  btnshowAE.addEventListener('click', e => {
    getUsers()
      .then(data => {
        resetView()
        const users = data.filter(user => user.name.toLowerCase()[0] >= 'a' && user.name.toLowerCase()[0] <= 'e');
        users.map(user => createcard(user.name, user.username, user.email, user.street, user.suite, user.city, user.zipcode, user.phone))
      });
  })

  const btnshowFL = document.querySelector(".fl")
  btnshowFL.addEventListener('click', e => {
    getUsers()
      .then(data => {
        resetView()
        const users = data.filter(user => user.name.toLowerCase()[0] >= 'f' && user.name.toLowerCase()[0] <= 'l');
        users.map(user => createcard(user.name, user.username, user.email, user.street, user.suite, user.city, user.zipcode, user.phone))
      });
  })

  const btnshowMZ = document.querySelector(".mz")
  btnshowMZ.addEventListener('click', e => {
    getUsers()
      .then(data => {
        resetView()
        const users = data.filter(user => user.name.toLowerCase()[0] >= 'm' && user.name.toLowerCase()[0] <= 'z');
        users.map(user => createcard(user.name, user.username, user.email, user.street, user.suite, user.city, user.zipcode, user.phone))
      });
  });

  
function resetView() {
    const cards = document.querySelectorAll('.divcard');
    cards.forEach(card => {
      card.remove()
    });
  };


const btnclear = document.querySelector(".canc")
function reload() {
  reload = location.reload();
}

btnclear.addEventListener("click", reload, false);

  

  







 
