const mod = (i, N) => ( i % N + N ) % N;


class Carousel {
    constructor(elem, listOfImageSrc = []) {
        this.element = elem;
        this.listOfImageSrc = listOfImageSrc;
        this.content = [...elem.children];
        let length = Math.min(this.content.length, this.listOfImageSrc.length);
        for(let i = 0; i < length; i++) {
            this.content[i].style.backgroundImage = `url(${listOfImageSrc[i]})`;
        }
        for(let el of this.content) {
            el.addEventListener("click", this.select);
        }
        this.select({target:this.content[0]});
    }
    select(ev) {
        ev.target.parentNode.scrollTo({top: 0, left: ev.target.offsetLeft - window.innerWidth/2 + ev.target.clientWidth/2, behavior: "smooth"});
        ev.target.parentNode.querySelectorAll(".current").forEach(curr => {
            curr.classList.remove("current");
        });
        ev.target.classList.add("current");

    }
}

document.addEventListener("DOMContentLoaded", () => {
    let els = document.querySelectorAll(".sc-container");
    for(let el of els) {
        new Carousel(el);
    }
});