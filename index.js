function changeCompletely(element, array, index){
  array[index] = (Math.random()*20);
}

function doToElementsInArray(array, callback){
  array.forEach(callback);
}
