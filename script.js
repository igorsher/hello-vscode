function towelSort(matrix) {



  matrix.forEach((element, index) => {
    let arr = [];
    if (index % 2 == 0) {
      element = element.reverse();
    } else {
      element = element;
    }
    return arr.push(element)
  });

  console.log(matrix[0]);

}




const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

towelSort(matrix)