  
 function renderCar() {
   let car = [{
      name: "benz",
      type: "mercedes",
      price: 5000
    },{
      name: "A3",
      type: "audi",
      price: 8000
    },{
      name: "focus",
      type: "ford",
      price: 2500
    },{
      name: "x7",
      type: "bmw",
      price: 2500
    }]

    var propertyName = ['name', 'type', 'price'];

    let ulCreate = document.createElement('ul');

    document.body.appendChild(ulCreate);

    for (var cr in car) {
     for (var prop in propertyName) {
        var li = document.createElement('li');
        li.innerHTML = propertyName[prop]  + ":" + car[cr][propertyName[prop]]+"<br>"
        ulCreate.appendChild(li);
      }
    }
 }