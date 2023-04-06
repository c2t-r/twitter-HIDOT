setInterval(()=>{
    if (document.querySelector("[aria-label=\"アカウントメニュー\"] > div > div:nth-child(2)") !== null) {
        document.querySelector("[aria-label=\"アカウントメニュー\"] > div > div:nth-child(2)").remove();
        console.log("delete notify dot!")
    }
}, 30)
