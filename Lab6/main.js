function is_equal(a,b){
    if (a==b) {
        console.log("The two numbers "+a+" and  "+b+" are equal")
        return true;
    } else {
        console.log("The two numbers "+a+" and  "+b+" are not equal")
        return false;
    }
}


function area_of_circle(r){
    let area = 3.14*r*r;
    console.log("Area of a circle with radius "+r+" is "+area)
    return area
}

function perimeter_of_rectangle(a,b){
    let P = 2*(a+b);
    console.log("Perimeter of a rectangle with sides "+a+" and "+b+" is "+P)
    return P
}


is_equal(3,5)
is_equal(10,10)
area_of_circle(10)
perimeter_of_rectangle(100,200)