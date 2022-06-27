import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")


//Does the event listener need to be in this module or the KneelDiamonds module?
// btn.addEventListener("click", (event) => {
//     const buttonClicked = event.target
//     if (buttonClicked.id === "orderButton") {
//         addCustomOrder()
//     }
    
// }
// )



const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})