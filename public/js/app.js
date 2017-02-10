/**
 * Agrega al listado el numero ingresado
 * */
function addNumber() {
    var listElem = document.querySelector("#list");
    var totalItems = document.querySelectorAll("#list LI").length;
    var newElem = document.createElement('LI');
    var numberElem = document.querySelector('#txtNumber');

    var numberToAdd = numberElem.value;

    newElem.innerHTML = numberToAdd;

    /**
    * Se verifica si el dato ingresado es un número
     * Si es mayor a 0
     * y si el numero aun no se a agregado
    * */
    if(isNaN(parseFloat(numberToAdd)) || parseFloat(numberToAdd) < 0 || existNumber(numberToAdd)){
        return;
    }

    listElem.appendChild(newElem);
    newElem.style['left'] = (totalItems * 90) + 'px';
    numberElem.value = '';
    numberElem.focus();
}

/**
 * Verificar si el numero ya esta en la lista
 * @param {string} numberToAdd
 * @Return {Boolean} existNumber
 * */
function existNumber(numberToAdd) {
    var listElem = document.querySelectorAll("#list LI");
    var existNumber = false;
    listElem.forEach(function (element) {
       if(element.innerHTML === numberToAdd){
           existNumber = true;
       }
    });

    return existNumber;
}

/**
 * Ordena los números ingresados
 * */
function sortList() {
    var items = document.querySelectorAll("#list LI");
    items.forEach(function (item) {
        var number1 = parseInt(item.innerHTML);

        var position = 0;
        items.forEach(function (item2) {
            var number2 = parseInt(item2.innerHTML);
            if (number1 > number2) {
                position += 1;
            }
        });

        setTimeout(function () {
            item.style['left'] = (position * 90) + 'px';
        }, position * 200);

    });
}

