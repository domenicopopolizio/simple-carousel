// carousel class
class Carousel {
    // it needs the element that should became the carousel itself
    constructor(elem) {

        // the element is saved
        this.element = elem;
        // list of elements inside the carousel
        this.content = [...elem.children];

        // each one should have an event to select it
        for (let el of this.content) {
            el.addEventListener("click", this.select);
        }

        // the first one should be selected, so here the event is triggered on the first
        // element of the current carousel
        this.select({
            target: this.content[0]
        });
    }

    // current carousel
    select(ev) {
        // it works on ev.target and not on this.element because when an event is called, "this" refers to
        // the caller, not to the current istance of the object

        // it scrolls the parent of the clicked element (it scrolls the carousel)
        // in such a way to center the clicked element on the carousel 
        // smoothly
        ev.target.parentNode.scrollTo({
            top: 0,
            left: ev.target.offsetLeft - window.innerWidth / 2 + ev.target.clientWidth / 2,
            behavior: "smooth"
        });

        // the current selected element of the carousel is not more the current selected element
        // (It iterate through all the .current element, but it should be just one element)
        ev.target.parentNode.querySelectorAll(".current").forEach(curr => {
            curr.classList.remove("current");
        });

        //and the new current element is the one the user have clicked on 
        ev.target.classList.add("current");

    }
}


// just for the example
document.addEventListener("DOMContentLoaded", () => {
    
    // let els be the group of div that should became a carousel
    let els = document.querySelectorAll(".sc-container");

    // for each of this div
    for (let el of els) {
        // a carousel istance is created 
        new Carousel(el);
    }
});