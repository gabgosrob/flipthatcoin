const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        res.status(401).send();
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            res.status(403).send();
        } else {
            res.status(200).send(user);
        }
    });
}
