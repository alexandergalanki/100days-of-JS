//JS variables  -  let const var
var firstName ="Bobby";
let lastName="Galanki";
let userIntro="Hi "+firstName+" "+lastName +" Welcome";

console.log(userIntro);

function outer(){
    var x=10;
    function inner(){
        var y=20;
        console.log(x);
    }
    inner();
}

outer();