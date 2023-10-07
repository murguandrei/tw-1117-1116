function eligibileToVote(yearsOld){
 if (yearsOld>=18) {
     console.log('You are eligible to vote!');
    
 }
 else {
     console.log('You are NOT eligible to vote YET!');
}
if(isNaN(yearsOld)) {
     console.log('Not a number');
     return;
}

return yearsOld >= 18 ? console.log('You are eligible to vote!') : console.log ('You are NOT eligible to vote YET!');
}

eligibileToVote(a);