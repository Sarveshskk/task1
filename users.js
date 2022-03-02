let md5 = require("md5");
const users = [
    {
        first_name: "ab",
        email: "12@ab.in",
        last_name: "cd",
        passs: md5("ab"),
    },
    {
        first_name: "cd",
        email: "12@cd.in",
        last_name: "ef",
        passs: md5("cd"),
    },
    {
        first_name: "ef",
        email: "12@ef.in",
        last_name: "gh",
        passs: md5("ef"),
    },
    {
        first_name: "gh",
        email: "12@gh.in",
        last_name: "ij",
        passs: md5("gh"),
    },
    {
        first_name: "ij",
        email: "12@ij.in",
        last_name: "kl",
        passs: md5("kl"),
    },
];
export default users;