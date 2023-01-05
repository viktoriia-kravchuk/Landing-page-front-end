/** INSERT CUSTOM JS HERE **/

const modal = document.getElementById("modal");
const backdrop = document.querySelector(".backdrop");
const play = document.querySelector(".hero__btn");
const close = document.querySelector(".close_modal");

const body = document.body;
const html = document.documentElement;


export default function () {

  play.addEventListener("click", () => {
    modal.classList.add("open");
    backdrop.classList.add("open");
    html.style.overflowY =
      html.style.overflowY === "hidden" ? "visible" : "hidden";
    body.style.overflowY = body.style.overflowY === "hidden" ? "visible" : "hidden";
  });

  close.addEventListener("click", () => {
    modal.classList.remove("open");
    backdrop.classList.remove("open");
    html.style.overflowY =
      html.style.overflowY === "hidden" ? "visible" : "hidden";
    body.style.overflowY = body.style.overflowY === "hidden" ? "visible" : "hidden";
  });
}
