let goed = 0;
let fout = 0;
let question = 1

function check(){
let ele = document.getElementsByName(question);
for(i = 0; i < ele.length; i++){
    if(ele[i].checked){
        if(ele[i].class == correct)
        goed++
    }
    else{
        fout++
    }
    }
};
    
