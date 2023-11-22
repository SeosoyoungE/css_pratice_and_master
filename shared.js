const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButton = document.querySelectorAll(".plan button");
const modalNegativeBtn = document.querySelector(".modal__action--negative");

//클릭시 모달창 띄우기
for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", () => {
    backdrop.classList.remove("hidden");
    modal.classList.remove("hidden");
  });
}

//모달 No버튼 클릭시 모달창 없애기
const closeClick = () => {
  backdrop.classList.add("hidden");
  modal.classList.add("hidden");
};
modalNegativeBtn.addEventListener("click", closeClick);
modal.addEventListener("click", closeClick);
