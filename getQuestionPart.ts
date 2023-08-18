function getQuestionPart(phrases:string[]):string[] {
    let longestSubString : string = '';
    let subString :string ='';
    
    for (let i = 0; i < phrases[0].length; i++) {
        
        if (phrases[1].includes(subString + phrases[0][i]) && phrases[2].includes(subString + phrases[0][i])){
            subString += phrases[0][i]
            if (subString.length > longestSubString.length ) {
                longestSubString = subString;
            }
            
        }
        else {
            
            subString = phrases[0][i];
        }

        
    }
    // console.log(longestSubString.length)

    let questionPart :string[] = [];
    let indexOfLongestSubString :number;
    for (let word of phrases){
        indexOfLongestSubString = word.indexOf(longestSubString);
        word = word.slice(0,indexOfLongestSubString) + word.slice(indexOfLongestSubString+longestSubString.length)
        questionPart.push(word.trim())
        // console.log(word)
    }

    return questionPart
    }

console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));
