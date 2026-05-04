let countVowels=function(str){
    let cnt=0;
    for(i=0;i<str.length;i++){
        if("aeiouAEIOU".includes(str[i])){
            cnt++;
        }
    }
    return cnt;
};
console.log(countVowels("teena"));