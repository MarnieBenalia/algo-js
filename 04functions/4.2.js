function rand10 (min,max){

    return Math.floor(Math.random() * (max - min +1) + min)
}

console.log(randomNumber (1,10))

/*Math rand permet de générer un nombre mais toujours entre 0 et 1, quand on multiplie 
le random on obtient un nombre a virgule et math floor permet d'arrondire 
ce nombre en nombre entier. puis on sort le nombre avec console.log*/