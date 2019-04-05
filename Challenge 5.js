var sentence = "Kaddy is Super awesome hey";

sentence = sentence.split("");


for (var i = 0; i < sentence.length; i++)
    
if (typeof(sentence[0]) == "string" && !sentence[i - 1] || typeof(sentence[i]) == "string" && sentence[i - 1] == " " )
    
    sentence[i] = sentence[i].toUpperCase();

console.log(sentence.join(""));

