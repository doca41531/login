"use strict"
const path = require('path');
const fs = require("fs");
const filePath = path.join(__dirname, 'first-json.json');
const jsonData = require('./first-json.json');


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
        if(jsonData.id.includes(id)){
                const idx = jsonData.pw.indexOf(id)
                if (jsonData.pw[idx] = pw){
                    return res.json({
                        success : true
                    })
                }
        }
        return res.json({
            success : false,
            msg : "로그인에 실패하셨습니다",
        })
    }
}

const sign_process = {
    sign : (req, res) => {
        const fileData = fs.readFileSync(filePath);
        const names = JSON.parse(fileData);
        const sign_id = req.body.id;
        const sign_pw = req.body.pw;
        if(names.id.includes(sign_id)){
            return res.json({
                success : false,
                msg : "이미 존재하는 아이디 입니다",
            })
        }else{
            names.id.push(sign_id)
            names.pw.push(sign_pw)
            fs.writeFileSync(filePath, JSON.stringify(names));
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