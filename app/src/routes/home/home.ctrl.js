"use strict"

const fs = require("fs");

const users = {
    id : ["woorimIT", "나개발", "김팀장"],
    pw : ["1234", "1234", "123456"]
}

const output = {
    hello : (req,res) => {
        res.render("home/index")
    },
    login : (req,res) => {
        res.render("home/login")
    },
    sign : (req,res) => {
        res.render("home/sign")
    }
}
const process = {
    login : (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;
        const data = fs.readFileSync("test.dat", "utf8");
        const login_data = `${id} ${pw}`
        if(data == login_data){
                return res.json({
                    success : true
                })
        }
        return res.json({
            success : false,
            msg : "로그인에 실패하셨습니다",
        })
    }
}

const sign_process = {
    sign : (req, res) => {
        const sign_id = req.body.id;
        const sign_pw = req.body.pw;

        if(users.id.includes(sign_id)){
            return res.json({
                success : false,
                msg : "이미 존재하는 아이디 입니다",
            })
        }else{
            const file = "test.dat";
            const data_write = `${sign_id} ${sign_pw}`;
            fs.writeFile(file, data_write, (err) => console.log(err));
            return res.json({
                success : true,
            })
        }
    }
    
}

module.exports = {
    output,
    process,
    sign_process,
}