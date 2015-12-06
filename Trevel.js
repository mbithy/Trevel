/* Bot Name: Trevel
 * Version: 1.1.2.0
 * Focus: Binomial Distribution
 * Build for: Freebitco.in
 * Link: http://freebitco.in/?r=856671
 * Author: Lord Black
 * Link: https://github.com/mbithy
 * Notes: This bot may increse your chances of winning (greatly) however I do not guarantee you absolute PROFIT, make sure you have atleat 0.00005000 btc
 * Warning: Do not change any variables value unless indicated by a comment! And make sure your internet is fast enough,
 *          bot will place ghost bets on slow internet which may make you loose. Another fix is increasing the bet interval.
 * Also you may tip/send me a few satoshis at: 17i7TUTg4PHC69CSHLLE2mLXQbpwKHBwf4
 */
var _stop = false,
    _rolls = 0,
    _currentBalance, _maxBet, _x = 0,
    _numberOfSuccesses = 0,
    _numberOfTrials = 0,
    _stopOnNumberOfBets = false, //Change this to true if you wish to stop betting after a specific number of bets
    _verbose = false, //Change this to true if you want to know the stats(profit) after each bet
    _numberOfBets = 100, //You can change this but keep the number of bets low (<200 but >100) to increse AI accuracy.
    _maxNumberOfBets=100,//max=150
    _minNumberOfBets=75;// min=50
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
    wins: 0,
    originalUserBalance: 0,
    profit: 0,
    looses: 0,
    _nextBet: "",

    addBet: function(bet, outcome)
    {
        if (bet === "LB" && outcome === "Win")
        {
            trevel.bets.push("LO");
            trevel.wins++;
            trevel.lowBetCount++;
        }
        if (bet === "LB" && outcome === "Loose")
        {
            trevel.bets.push("HI");
            trevel.looses++;
            trevel.highBetCount++;
        }
        if (bet === "HB" && outcome === "Win")
        {
            trevel.bets.push("HI");
            trevel.wins++;
            trevel.highBetCount++;
        }
        if (bet === "HB" && outcome === "Loose")
        {
            trevel.bets.push("LO");
            trevel.looses++;
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
        if (this.isNumeric(probabilityOnSingleTrial) == true)
        {
            var j1, j2;
            if (2 * numberOfSuccesses > numberOfTrials)
            {
                return (this.BinomialByMultiplication(numberOfTrials - numberOfSuccesses, numberOfTrials, 1 - probabilityOnSingleTrial));
            }
            var j0 = j1 = j2 = 0;
            var binomialProbability = 1.0;
            while ((j0 < numberOfSuccesses) | (j1 < numberOfSuccesses) | (j2 < numberOfTrials - numberOfSuccesses))
            {
                if ((j0 < numberOfSuccesses) && (binomialProbability < 1))
                {
                    j0++;
                    binomialProbability *= (numberOfTrials - numberOfSuccesses + j0) / j0;
                }
                else
                {
                    if (j1 < numberOfSuccesses)
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
        trevel.highBetProbability = (trevel.highBetCount / trevel.bets.length).toFixed(5);
    },

    LowBetProbability: function()
    {
        trevel.lowBetProbability = (trevel.lowBetCount / trevel.bets.length).toFixed(5);
    },

    resetProbabilities: function()
    {
        trevel.highBetProbability = 0;
        trevel.lowBetProbability = 0;
    },

    getNumberOfSuccesses: function()
    {
        _numberOfSuccesses = Math.round(((_numberOfBets - _rolls) / 2) + ((_numberOfBets - _rolls) / 10));
    },

    getNumberOfTrials: function()
    {
        _numberOfTrials = _numberOfBets - _rolls;
    },

    nextBet: function()
    {
        this.resetProbabilities();
        this.HighBetProbability();
        this.LowBetProbability();
        this.getNumberOfSuccesses();
        this.getNumberOfTrials();
        trevel.lowBetBinomial=this.BinomialByMultiplication(_numberOfSuccesses, _numberOfTrials, trevel.lowBetProbability);
        trevel.highBetBinomial=this.BinomialByMultiplication(_numberOfSuccesses, _numberOfTrials, trevel.highBetProbability);

        if ( trevel.lowBetBinomial>trevel.highBetBinomial)
        {
            trevel._nextBet = "LB";//place low bet when probability of winning on low is high
        }
        else if(trevel.lowBetBinomial === trevel.highBetBinomial)
        {
            if(trevel._nextBet==="HB")
            {
                trevel._nextBet="LB";//if the probabilities are equal and the previous bet was high, place low bet
            }
            else
            {
                trevel._nextBet="HB";//if the probabilities are equal and the previous bet was low, place high bet
            }
        }
        else
        {
            trevel._nextBet="HB";//place high bet when probability of winning on high is high
        }
    }
};

resetArray = function()//keeps the data relevant.
{
    trevel.bets = [];
    trevel.lowBetCount=0;
    trevel.highBetCount=0;
    _rolls=0;
    randomNumberOfBets(_maxNumberOfBets,_minNumberOfBets);
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

    if ($('#double_your_btc_bet_lose').html() !== '')
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

randomNumberOfBets= function(max,min)
{
    _numberOfBets=Math.floor(Math.random() * max) + min;
}

calculate_MaxBet = function()
{
    _maxBet = ((parseFloat($('#balance').html()) * 20) / 100).toFixed(8);
}

doubleOrNothing = function()
{
    calculate_MaxBet();
    if ($('#double_your_btc_bet_lose').html() !== '' && parseFloat($('#double_your_btc_stake').val()) * 2 < _maxBet)
    {
        $('#double_your_btc_2x').click();
    }
    else
    {
        $('#double_your_btc_min').click();
    }
}

logInfomation = function(isStopped)
{
    if(isStopped===true){
    console.log("Betting Stopped. Your profit is: " + trevel.profit);
    console.log("You have won " + trevel.wins + " bets and lost " + trevel.looses + " bets. Total bets placed are: "+(trevel.wins+trevel.looses));
    console.log("You have a " + (trevel.wins / (trevel.wins + trevel.looses)).toFixed(2) + " probability of winning with Trevel.");    
}
else
{
    console.log("Current bets profit is: " + trevel.profit);
    console.log("You have won " + trevel.wins + " bets and lost " + trevel.looses + " bets. Total bets placed are: "+(trevel.wins+trevel.looses));
    console.log("You have a " + (trevel.wins / (trevel.wins + trevel.looses)).toFixed(2) + " probability of winning.");
}
}

placeRoll = function()
{
    setTimeout(rollDice, (3000) + Math.round(Math.random() * 1000));// remember the warning 3000 here is the bet interval, you can increse it or decrese it.
}

rollDice = function()
{
    if (_x === 0)
    {
        console.log("Betting Begun...");
        _x++;
    }
    trevel.nextBet();
    doubleOrNothing();
    getProfit();

    if (_verbose == true)
    {
        console.log("Profit: " + trevel.profit);
    }

    if (trevel._nextBet === "HB")
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
    if (_stop === false)
    {
        if (trevel.bets.length >= _numberOfBets)
        {
            resetArray();
            if (_stopOnNumberOfBets === true)
            {
                logInfomation(true);
            }
            else
            {
                logInfomation();
                placeRoll();
            }       
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

/* ToDo:
 * Enable manual setting of minimum bet amount
 * Enable manual setting of Maximum bet amount
 * Enable manual setting of multiplier
 * Find other types of probabilities to use
 * Record result partern
 * Analyze result patern
 * Enable betting on result patern
 */
