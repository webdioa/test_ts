function getHandScore(input:string):number {
    let score :number;
    let suit :number[] = [0,0,0,0] // H, C, D, S
    let cards = input.split(" ")


    // check triple
    if (cards[0][cards[0].length - 1] == cards[1][cards[1].length - 1] && cards[1][cards[1].length - 1] == cards[2][cards[2].length - 1]  ){
        if (cards[0][cards[0].length - 1] == 'A'){
            return 35
        }
        else{  
            return 32.5
        }

    }

    // count card value
    for (let card of cards){
        let cardSuit = card[0]
        let cardRank = card.substring(1)
        let cardRankValue: number; 
        // console.log("suit : "+cardSuit)
        // console.log("rank : "+cardRank)
        switch (cardRank){
            case 'J':
            case 'Q':
            case 'K':
                cardRankValue = 10;
                break;
            case 'A':
                cardRankValue = 11 ;
                break;
            default:
                cardRankValue = parseInt(cardRank)
                break
                
        }

        let str = 'HCDS'
        suit[str.indexOf(cardSuit)] += cardRankValue;

        // console.log("rank : "+ cardRankValue)
    }
    // console.log("suit : "+ suit)
    score = Math.max(...suit)
    return score
    }


console.log(getHandScore("SA SA CA"))