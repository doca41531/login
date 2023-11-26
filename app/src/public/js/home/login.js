"use strict"
const id = document.querySelector("#id")
const pw = document.querySelector("#pw")
const Btn = document.querySelector("button")

Btn.addEventListener("click", () => {
    const req = {
        id: id.value,
        pw: pw.value,
    }
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    })
})