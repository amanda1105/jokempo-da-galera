const header = document.querySelector(".placar")
const mainContainer = document.querySelector(".game")
const rulesModal = document.querySelector(".rules-modal")
const rulesButton = document.querySelector(".rules-button")

function openRulesModal(){
    header.style.display = "none"
    mainContainer.style.display = "none"
    rulesModal.style.display = "block"
}

function closeRulesModal(){
    header.style.display = "flex"
    mainContainer.style.display = "flex"
    rulesModal.style.display = "none"
}

rulesButton.addEventListener("click", openRulesModal)

rulesModal.addEventListener("click", function(event){
    closeRulesModal()
})
