const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButton = document.querySelectorAll(".plan button");
for(let i = 0; i < selectPlanButton.length; i++)selectPlanButton[i].addEventListener("click", ()=>{
    backdrop.classList.remove("hidden");
    modal.classList.remove("hidden");
});

//# sourceMappingURL=index.0fe47027.js.map
