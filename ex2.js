function diffChars(str1, str2){

    if(str1.length !== str2.length)
    {
        return -1;
    }
   
    let counter = 0;
    for(let i=0; i < str1.length; i++){
        if(str1[i]===str2[i]){
            counter++;
        }
    }

    console.log(counter);

}

diffChars('abcd', 'adfd');