
export const openModal = function (el, event) {
    el.style.display = null
    el.removeAttribute('aria-hidden')
    el.setAttribute('aria-modal', 'true')
    
}

export const closeModal = function (el) {
    el.style.display = "none";
    el.setAttribute("aria-hidden", true);
    el.removeAttribute("aria-modal");
}