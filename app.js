const express = require("express");
const app = express()
const PORT = process.env.PORT || 4000

const jwt = require('jsonwebtoken');
const jwt_token = "SigmaSearchIsBetterThenAll"


app.get("/", function(req, res) {
    res.send("hii")
})
app.get("/validateStreamUrl", (req, res) => {
    let token = req.query.token
    if (token === undefined || token === null || token.trim() === "") {
        res.json({ code: false })
        return
    }
    let decode = jwt.decode(token, jwt_token)
    let final = (decode !== null) ? res.json({ code: true, data: decode.data }) : res.json({ code: false });
});

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
});
