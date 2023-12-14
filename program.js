var arr3 = ["mark", "jacob", "bob"]

var position = 2;

var re = deleteElement(arr3, position);
document.write(re)

function deleteElement(arr4, pos) {
    for (var i = pos; i < arr3.length; i++) {
        arr4[i] = arr4[i + 1];

    }

    return arr3;

}

document.write("<br></br>")

// Fucntion to add element at first index

var arr3 = ["mark", "jacob", "bob","gambler"]

function addElement(arr5,nElement) {
    for (var i =arr5.length; i >= 1; i--) {
        arr5[i] = arr5[i - 1]

    }
    arr5[0] = nElement

    return arr5;

}

var newElement = "Maxwell"
var re2 = addElement(arr3, newElement)
document.write(re2)





// document.write("<br>");
// document.write("<br>");

// delete arr3[0]
// document.write(arr3);


