# Trevel
The smartest Bitcoin Gambling bot for [freebitco.in](http://freebitco.in/?r=856671)

Satoshis go to **1PTBfDNpheyH5743a6PJJctzCSmiHxxouV** if you are feeling generous :P

### To learn how to use this bot go to the [WIKI](https://github.com/mbithy/Trevel/wiki)

### What Makes Trevel a Different bot

**Machine Learning using ReinforceJS**
* All the perks of previous trevel + Learing algos, sweet!!
* New version is in file DQ-Trevel.js
* Ready to go already.
* Total **overkill** for use on a faucets provably fair
* there is a file _trainedNet.json_ which is a network trainned on over **10 Million** bets using server seeds and client seed. You can  also achieve this by running _free-simulator.js_ on a new tab. Enjoy!!

**It gives you absolute control**
* You can manage:
 * Maximum bet Amount
 * Minimum bet Amount
 * Bet Multiplier
 * Speed of betting
 * Number of bets
 * Additional features and setings if you can understand code

**It's not just placing bets its watching them**
* Trevel keeps a couple of previous bets in memory and predicts the most
probable outcome of the *next unplaced bet* giving you an edge.
Prediction is based on a calculated probability. We get the probability using [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution).

**Why Use Trevel**
* The number one reason is to:
 * Increase your winning streaks.
* But you can also
 * Pit machine against machine {insert evil laugh here}
 * Post your long winning streaks on youtube and tag us. I had make a quick video [Watch](https://www.youtube.com/watch?v=rMHQ-lFhTq4)
 * Double your bitcoins while you sleep!
 * Test your creative strategies

**Remarks**
_What is paramount right now is a **strategy** the utilizes the streaks to your advantage, which you'll see when running the simulator. If you want to beat provably fair and basically all gambling games regardless of payout this is where you should put your 'thinking' energy. You should also know that Einstein gave up on this saying the only way to beat roulette was to steal the chips and run LOL, then again he din't know AI._

## Updates in version 1.1.5.2

**The Kelly Principle**
* While most gamblers don't know this, the Kelly Principle/ Kelly Criterion is a formula used to determine
the optimal size of a series of bets. In most gambling scenarios, and some investing scenarios under some simplifying assumptions,
**the Kelly strategy will do better than any essentially different strategy in the long run** that is, over a span of time in which the observed fraction of bets that are successful equals the probability that any given bet will be successful. Learn more about it here [Kelly Criterion](https://en.wikipedia.org/wiki/Kelly_criterion)

* Added a user friendly way of changing the betting speed along with some usefull tips on betting speed.

## Trevel Reinforced version 2.0 {DQ-Trevel.js}
**Machine learning**

* Added [RenforceJS](https://github.com/karpathy/reinforcejs/blob/master/lib/rl.js)

**Money management changes**

* Kelly principle will now be default over martingale and used when both are enabled

**Testing Mode**
* Added a testing mode just in case you wanted to see if Machine Learning makes a difference
* Paste the bot in the console of a new tab on your browser
* Remember to set isTesting to true

