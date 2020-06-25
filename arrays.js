var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
    var newarray1 = [element, ...array];
    return newarray1 ;
}



function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array
}

function addElementToEndOfArray(array, element){
    var newarray2 = [...array, element];
    return newarray2 ;
}