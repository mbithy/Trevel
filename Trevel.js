/* Bot Name: Trevel
 * Version: 1.1.5.0
 * AI Focus: Binomial Distribution
 * Build for: Freebitco.in
 * Link: http://freebitco.in/?r=856671
 * Author: Mbithy Mbithy
 * Link: https://github.com/mbithy
 * Notes: This bot may increse your chances of winning (greatly) however I do not guarantee you absolute PROFIT, make sure you have atleast 0.00005000 btc
 * Warning: Do not change any variables value unless indicated by a comment! And make sure your internet is fast enough,
 *          bot will place ghost bets on slow internet which may make you loose. Another fix is increasing the bet interval.
 * Also you may tip/send me a few satoshis at: 17i7TUTg4PHC69CSHLLE2mLXQbpwKHBwf4 if you so wish....
 * Have fun and remember gambling is a risky adventure.
 */
var _stop = false,
    _rolls = 0,
    _currentBalance, _maxBet, _x = 0,
    _maxNumberOfTrails=10000,
    _minNumberOfTrials=5000,
    _numberOfSuccesses = 0,
    _numberOfTrials = 0,
    _winPercentage = 52,
    _stopOnNumberOfBets = false, //Change this to true if you wish to stop betting after a specific number of bets
    _defaultProb=false,
    _swap = true,
    _betSpeed = 3000,  
    /** INFO ON _betSpeed
    * If you want bets to go faster decrease the value 3000, recomended minimum is 1500 (at 1500 you'll need really fast internet and hope the freebitco.in server responds as fast)
    * If you want to go slower increase the value 3000, recomended max is 5000 (only option if you have tortoise internet)
    **/
    _verbose = false, //Change this to true if you want to know the stats(profit) after each bet
    _numberOfBets = 46, //You can change this but keep the number of bets low (<135 but >75) to increse AI accuracy.
    _maxNumberOfBets = 50, //max=150
    _minNumberOfBets = 50, // min=50
    /** Custom Bet Configuration **/
    _useCustomConfiguration=true,//Change to true to use your own configuration
    _useKellyPrinciple=true,//change to false to use martingale
    _customMaximumBet=0.00050000,//This is the maximum bet you want placed
    _customMinimumBet=0.00000001,//This is the minimum bet you want placed
    _customMultiplier=2;// This is the multiplier. the default is 2. INFO: The bet amount will be multiplied by this number incese you loose a bet
var trevel = {
    bets: [],
    highBetProbability: 0,
    lowBetProbability: 0,
    highBetCount: 0,
    lowBetCount: 0,
    lowBetBinomial: 0,
    highBetBinomial: 0,
    userBalance: 0,
    betAmount: 0,
    totalWins: 0,
    wins: 0,
    originalUserBalance: 0,
    profit: 0,
    totalLoses: 0,
    looses: 0,
    _nextBet: "",
    lowBetWins:0,
    lowBetWinsProb:0,
    highBetWins:0,
    highBetWinsProb:0,
    addBet: function(bet, outcome)
    {
        if(bet === "LB" && outcome === "Win")
        {
            trevel.bets.push("LO");
            trevel.wins++;
            trevel.totalWins++;
            trevel.lowBetCount++;
            trevel.lowBetWins++;
        }
        if(bet === "LB" && outcome === "Loose")
        {
            trevel.bets.push("HI");
            trevel.looses++;
            trevel.totalLoses++;
            trevel.highBetCount++;
        }
        if(bet === "HB" && outcome === "Win")
        {
            trevel.bets.push("HI");
            trevel.wins++;
            trevel.totalWins++;
            trevel.highBetCount++;
            trevel.highBetWins++;
        }
        if(bet === "HB" && outcome === "Loose")
        {
            trevel.bets.push("LO");
            trevel.looses++;
            trevel.totalLoses++;
            trevel.lowBetCount++;
        }
    },
    isNumeric: function(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    /* Do NOT touch, EVER! */
    BinomialByMultiplication: function(numberOfSuccesses, numberOfTrials, probabilityOnSingleTrial)
    {
        if(this.isNumeric(probabilityOnSingleTrial) == true)
        {
            var j1, j2;
            if(2 * numberOfSuccesses > numberOfTrials)
            {
                return(this.BinomialByMultiplication(numberOfTrials - numberOfSuccesses, numberOfTrials, 1 - probabilityOnSingleTrial));
            }
            var j0 = j1 = j2 = 0;
            var binomialProbability = 1.0;
            while((j0 < numberOfSuccesses) | (j1 < numberOfSuccesses) | (j2 < numberOfTrials - numberOfSuccesses))
            {
                if((j0 < numberOfSuccesses) && (binomialProbability < 1))
                {
                    j0++;
                    binomialProbability *= (numberOfTrials - numberOfSuccesses + j0) / j0;
                }
                else
                {
                    if(j1 < numberOfSuccesses)
                    {
                        j1++;
                        binomialProbability *= probabilityOnSingleTrial;
                    }
                    else
                    {
                        j2++;
                        binomialProbability *= 1 - probabilityOnSingleTrial;
                    }
                }
            }
            return binomialProbability;
        }
        else
        {
            return 1;
        }
    },
    /* End of Do NOT touch, EVER! */
    HighBetProbability: function()
    {
        trevel.highBetProbability = (trevel.highBetCount / (trevel.highBetCount+trevel.lowBetCount)).toFixed(2);
    },
    LowBetProbability: function()
    {
        trevel.lowBetProbability = (1- trevel.highBetProbability).toFixed(2);
    },

    HighBetWinProbability: function()
    {
        trevel.highBetWinsProb = (trevel.highBetWins/((trevel.highBetCount+trevel.lowBetCount)).toFixed(2));
    },

    LowBetWinProbability: function()
    {
        trevel.lowBetWinsProb = (trevel.lowBetWins/((trevel.highBetCount+trevel.lowBetCount)).toFixed(2));
    },
    resetProbabilities: function()
    {
        trevel.highBetProbability = 0;
        trevel.lowBetProbability = 0;
        trevel.lowBetWinsProb = 0;
        trevel.highBetWinsProb = 0;
    },
    getNumberOfSuccesses: function()
    {
        _numberOfSuccesses = Math.round(((_numberOfBets - _rolls) / 2) + ((_numberOfBets - _rolls) / 10));
        //_numberOfSuccesses = Math.round((_winPercentage * _numberOfTrials) / 100) //Win 70% of bets
        //_numberOfSuccesses = 100;/*Math.round(((_maxNumberOfTrails - _numberOfTrials) / 2) + ((_maxNumberOfTrails - _numberOfTrials) / 10));*/
    },
    getNumberOfTrials: function()
    {
        _numberOfTrials = _numberOfBets - _rolls;
        //_numberOfTrials =Math.floor(Math.random() * _numberOfBets) + _numberOfTrials;
        //_numberOfTrials =Math.floor(Math.random() * _maxNumberOfTrails) + _minNumberOfTrials;
    },
    nextBet: function()
    {
        this.resetProbabilities();
        this.HighBetProbability();
        this.LowBetProbability();
        this.HighBetWinProbability();
        this.LowBetWinProbability();
        this.getNumberOfTrials();
        this.getNumberOfSuccesses();        
        if(_defaultProb == false)
        {
            trevel.lowBetBinomial = (this.BinomialByMultiplication(_numberOfSuccesses, _numberOfTrials, trevel.lowBetProbability)).toFixed(18);
            trevel.highBetBinomial = (this.BinomialByMultiplication(_numberOfSuccesses, _numberOfTrials, trevel.highBetProbability)).toFixed(18);
        }
        else
        {
            trevel.lowBetBinomial = (this.BinomialByMultiplication(_numberOfSuccesses, _numberOfTrials, 0.475)).toFixed(18);
            trevel.highBetBinomial = (this.BinomialByMultiplication(_numberOfSuccesses, _numberOfTrials, 0.475)).toFixed(18);
        }
        
        if(trevel.lowBetBinomial > trevel.highBetBinomial)
        {
            trevel._nextBet = "LB"; //place low bet when probability of winning on low is high
        }
        else if(trevel.lowBetBinomial < trevel.highBetBinomial)
        {
            trevel._nextBet = "HB"; //place high bet when probability of winning on high is high
        }
        else
        {
            if(_swap == true)
            {               
                if(trevel.highBetProbability>trevel.lowBetProbability)
                {
                    trevel._nextBet = "HB";
                }
                else if(trevel.highBetProbability<trevel.lowBetProbability)
                {
                    trevel._nextBet = "LB";
                }
                else
                {
                    if(trevel._nextBet === "HB")
                {
                    trevel._nextBet = "LB"; //if the probabilities are equal and the previous bet was high, place low bet
                }
                else
                {
                    trevel._nextBet = "HB"; //if the probabilities are equal and the previous bet was low, place high bet
                }
                }
            }
        }
    }
};
resetArray = function() //keeps the data relevant.
    {
        trevel.bets = [];
        trevel.lowBetCount = 0;
        trevel.highBetCount = 0;
        trevel.wins = 0;
        trevel.looses = 0;
        _rolls = 0;
        randomNumberOfBets(_maxNumberOfBets, _minNumberOfBets);
    };
setOriginalUserBalance = function()
{
    trevel.originalUserBalance = parseFloat($('#balance').html());
    stop = false;
};
setCurrentUserBalance = function()
{
    trevel.userBalance = parseFloat($('#balance').html());
};
getProfit = function()
{
    setCurrentUserBalance();
    trevel.profit = (trevel.userBalance - trevel.originalUserBalance).toFixed(8);
};
placeHighBet = function()
{
    $('#double_your_btc_bet_hi_button').click();
};
placeLowBet = function()
{
    $('#double_your_btc_bet_lo_button').click();
};
setOutcomes = function(bet)
{
    if($('#double_your_btc_bet_lose').html() !== '')
    {
        trevel.addBet(bet, "Loose");
    }
    else
    {
        trevel.addBet(bet, "Win");
    }
};
stopBetting = function()
{
    _stop = true;
}
randomNumberOfBets = function(max, min)
{
    _numberOfBets = Math.floor(Math.random() * max) + min;
}
calculate_MaxBet = function()
{
    _maxBet = ((parseFloat($('#balance').html()) * 20) / 100).toFixed(8);
}
doubleOrNothing = function()
{
    calculate_MaxBet();
    if($('#double_your_btc_bet_lose').html() !== '' && parseFloat($('#double_your_btc_stake').val()) * 2 < _maxBet)
    {
        $('#double_your_btc_2x').click();
    }
    else
    {
        $('#double_your_btc_min').click();
    }
}

doubleOrNothingCustomConfiguration = function()
{
    if(_useKellyPrinciple == false)
    {
        if($('#double_your_btc_bet_lose').html() !== '' && parseFloat($('#double_your_btc_stake').val()) * _customMultiplier < _customMaximumBet)
        {
            var elem = document.getElementById("double_your_btc_stake");
            elem.value = (parseFloat($('#double_your_btc_stake').val()) * _customMultiplier).toFixed(8);
        }
        else
        {
            var elem = document.getElementById("double_your_btc_stake");
            elem.value = _customMinimumBet;
        }
    }
    else
    {
        setCurrentUserBalance();
        var betAmount = 0;
        var elem2 = document.getElementById("double_your_btc_payout_multiplier");
        var currMulty = elem2.value;
        if(trevel._nextBet === "HB")
        {
            betAmount = (trevel.userBalance * ((trevel.highBetWinsProb * currMulty  - 1))/(currMulty - 1)).toFixed(8);
            if(betAmount > 0)
            {
                //console.log(betAmount);
                var elem3 = document.getElementById("double_your_btc_stake");
                elem3.value = betAmount;
            }
            else
            {
                var elem4 = document.getElementById("double_your_btc_stake");
                elem4.value = _customMinimumBet;
            }
        }
        else
        {

            betAmount = (trevel.userBalance *  ((trevel.lowBetWinsProb * currMulty  - 1))/(currMulty - 1)).toFixed(8);
            if(betAmount > 0)
            {
                //console.log(betAmount);
                var elem3 = document.getElementById("double_your_btc_stake");
                elem3.value = betAmount;
            }
            else
            {
                var elem4 = document.getElementById("double_your_btc_stake");
                elem4.value = _customMinimumBet;
            }            
        }
    }
}
logInfomation = function(isStopped)
{
    if(isStopped == true)
    {
        console.log("Betting Stopped. Your profit is: " + trevel.profit);
        console.log("In this round You have won " + trevel.wins + " bets and lost " + trevel.looses + " bets. Total bets placed are: " + (trevel.wins + trevel.looses));
        console.log("In total You have won " + trevel.totalWins + " bets and lost " + trevel.totalLoses + " bets. Total bets placed are: " + (trevel.totalWins + trevel.totalLoses));
        console.log("You have a " + (trevel.totalWins / (trevel.totalWins + trevel.totalLoses)).toFixed(2) + " probability of winning with Trevel.");
    }
    else
    {
        console.log("Current bets profit is: " + trevel.profit);
        console.log("In this round You have won " + trevel.wins + " bets and lost " + trevel.looses + " bets. Total bets placed are: " + (trevel.wins + trevel.looses));
        console.log("In total You have won " + trevel.totalWins + " bets and lost " + trevel.totalLoses + " bets. Total bets placed are: " + (trevel.totalWins + trevel.totalLoses));
        console.log("You have a " + (trevel.wins / (trevel.wins + trevel.looses)).toFixed(2) + " probability of winning.");
    }
}
placeRoll = function()
{
    setTimeout(rollDice, (_betSpeed) + Math.round(Math.random() * 1000)); 
}
rollDice = function()
{
    if(_x === 0)
    {
        console.log("Betting Begun...");
        _x++;
    }
    trevel.nextBet();
    if(_useCustomConfiguration==true)
    {
        doubleOrNothingCustomConfiguration();
    }
    else
    {
        doubleOrNothing();
    }
    getProfit();
    if(_verbose == true)
    {
        console.log("Profit: " + trevel.profit);
        /*console.log("Number of Trails: "+ _numberOfTrials);
        console.log("High Bet Probability was: "+trevel.highBetProbability+ " While low bet Probability was: "+trevel.lowBetProbability);
        console.log("High Bet Binomial was: "+trevel.highBetBinomial+ " While low bet Binomial was: "+trevel.lowBetBinomial);*/
        if(_defaultProb==true)
        {
            console.log("Using _defaultProb i.e 0.475")
        }
        else
        {
            console.log("Using computed probabilities above.")
        }
    }
    if(trevel._nextBet === "HB")
    {
        placeHighBet();
        setOutcomes("HB");
    }
    else
    {
        placeLowBet();
        setOutcomes("LB");
    }
    _rolls++;
    if(_stop == false)
    {
        if(trevel.bets.length >= _numberOfBets)
        {            
            if(_stopOnNumberOfBets === true)
            {
                logInfomation(true);
            }
            else
            {
                logInfomation();
                placeRoll();
            }
            resetArray();
        }
        else
        {
            placeRoll();
        }
    }
    else
    {
        logInfomation(true);
    }
};
setOriginalUserBalance();
rollDice();