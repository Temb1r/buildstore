"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const cors = require("cors");
// Работа с файлами
function saveUserToFile(user) {
    const filename = "users.json";
    let users = [];
    if (fs_1.default.existsSync(filename)) {
        const fileData = fs_1.default.readFileSync(filename, "utf-8");
        users = JSON.parse(fileData);
    }
    users.push(user);
    fs_1.default.writeFileSync(filename, JSON.stringify(users, null, 1), "utf-8");
    console.log(`User ${user.email} has been saved`);
}
function getUserFromFile(email) {
    if (!fs_1.default.existsSync("users.json")) {
        fs_1.default.writeFileSync("users.json", JSON.stringify([]), "utf-8");
    }
    const fileData = fs_1.default.readFileSync("users.json", "utf-8");
    const users = JSON.parse(fileData);
    const foundUser = users.find((user) => user.email === email);
    return foundUser;
}
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
function createUser(email, password) {
    const salt = bcryptjs_1.default.genSaltSync(10);
    const hashedPassword = bcryptjs_1.default.hashSync(password, salt);
    const user = {
        email,
        password: hashedPassword,
    };
    saveUserToFile(user);
    return user;
}
const jwtOptions = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "your_jwt_secret",
};
passport_1.default.use(new passport_jwt_1.Strategy(jwtOptions, (jwtPayload, done) => {
    const user = getUserFromFile(jwtPayload.email);
    if (user) {
        done(null, user);
    }
    else {
        done(null, false);
    }
}));
app.post("/api/register", (req, res) => {
    const { email, password } = req.body;
    const userHasCreated = getUserFromFile(email);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if (!userHasCreated) {
        createUser(email, password);
        res.json({ success: true, message: "User has been created" });
    }
    else
        res.json({ success: false, message: "User with this email exists" });
});
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    const user = getUserFromFile(email);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if (!user || !bcryptjs_1.default.compareSync(password, user.password)) {
        res
            .status(401)
            .json({ success: false, message: "Invalid email or password" });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ email: user.email }, jwtOptions.secretOrKey);
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000, secure: true });
    res.json({ success: true, token, email });
});
app.get("/protected", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    res.json({ success: true, message: "Welcome to the protected route!" });
});
// Запуск сервера
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
app.use(passport_1.default.initialize());
//# sourceMappingURL=server.js.map