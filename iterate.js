var obj={
    x:40,
    y:60,
    z:75
}
//console.log('x' in obj)// in operator bebohar kore amra check korte pari , property ache kina
//console.log('p' in obj)
for(var i in obj){
    console.log(i)
    console.log(obj[i])
}