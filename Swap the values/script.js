function swapVariables(x, y ) {
    [x, y] = [y , x];

    return [x, y];
}

let x = 5 ;
 let y  = 10;

 const swapValues = swapVariables ( x, y ); 


 console.log("Swap Values:" , swapValues);
console.log("x =", x);
console.log("y =", y);