"use strict"
const sign_id = document.querySelector("#sign_id")
const sign_pw = document.querySelector("#sign_pw")
const sign_btn = document.querySelector(".sign_btn")

sign_btn.addEventListener("click", () => {
    const req = {
        id: sign_id.value,
        pw: sign_pw.value,
    }
    fetch("/sign", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login"
            alert("회원가입 완료")
        }else{
            alert(res.msg)
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생")
    })
})