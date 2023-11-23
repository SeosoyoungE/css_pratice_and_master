const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButton = document.querySelectorAll(".plan button");
const modalNegativeBtn = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
//클릭시 모달창 띄우기
for(let i = 0; i < selectPlanButton.length; i++)selectPlanButton[i].addEventListener("click", ()=>{
    backdrop.classList.remove("hidden");
    modal.classList.remove("hidden");
});
//모달 No버튼 클릭시 모달창 없애기 & 모바일nav 없애기
const closeModal = ()=>{
    backdrop.classList.add("hidden");
    modal.classList.add("hidden");
    mobileNav.classList.add("hidden");
};
modalNegativeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
//햄버거 버튼 클릭시 모바일nav 뜨기
toggleButton.addEventListener("click", ()=>{
    mobileNav.classList.remove("hidden");
    backdrop.classList.remove("hidden");
});

//# sourceMappingURL=index.0fe47027.js.map
