// a "var" é declarada em um bloco porem eh visivel em todo
///prog 


{ 
    { 
        { 
            { var sera = 'Sera???'
        } 
    } 
} 
}

console.log(sera)

//"var" quando declarada em uma função o seu escopo sera 
//apenas a sua função

function teste(){
    var local = 123
    console.log(local)
}

teste()

//console.log(local)


// variavel é global ou de um escopo de uma function