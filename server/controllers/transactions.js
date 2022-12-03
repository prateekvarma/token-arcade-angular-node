const NodeCache = require('node-cache');

const myCache = new NodeCache();

myCache.set("totalTokens", 0); //initialized as 0

exports.buyToken = (req, res, next) => {
    let amount = req.body.form_token_amount;
    amount = parseInt(amount);
    let cost = amount * 0.25; //calculates cost

    myCache.set("totalTokens", myCache.get("totalTokens") + amount); //adds received tokens to total

    let data = { type: 'buyToken', tokens: amount, cost };

    if (myCache.get("ledger") !== undefined) {
        data = [...myCache.get("ledger"), {...data}];
    } else {
        data = [{...data}]
    }

    if(myCache.set("ledger", data)) {
        res.status(200).json({
            //sends data to client
            totalTokens: myCache.get("totalTokens"),
            ledger: myCache.get("ledger")
        });
    }
};

exports.getGame = (req, res, next) => {
    let data = { type: 'game', name: req.body.name, tokens: req.body.tokens };
    myCache.set("totalTokens", myCache.get("totalTokens") - data.tokens); //deduct tokens from total
    if (myCache.get("ledger") !== undefined) {
        data = [...myCache.get("ledger"), {...data}];
    } else {
        data = [{...data}]
    }

    if(myCache.set("ledger", data)) {
        res.status(200).json({
            //sends data to client
            totalTokens: myCache.get("totalTokens"),
            ledger: myCache.get("ledger")
        });
    }
};