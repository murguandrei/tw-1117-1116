function diffChars(str1, str2){

 
   
    let counter = 0;
    for(let i=0; i < str1.length; i++){
        if(str2 ===str1[i]){
            counter++;
        }
    }

    console.log(counter);

}

diffChars('abcd', 'c');