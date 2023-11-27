let button = document.querySelector("button")
let Inputtext = document.querySelector(".Inputtext")
let span = document.querySelector(".Advice span")
let isLoading = false


async function GetData() {
    if (!isLoading) {
        isLoading = true
        Inputtext.innerHTML = 'Loading... please wait'
        button.setAttribute("disabled" , true)

        try {
            let res = await fetch("https://api.adviceslip.com/advice")
            let data = await res.json()
            button.removeAttribute("disabled")
            Inputtext.textContent = data.slip.advice
            span.textContent = data.slip.id
        } catch (error) {
            console.error('Error:', error)
        } finally {
            isLoading = false
        }
    }
}


button.addEventListener("click", function () {
    GetData()
})