

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

const controls2 = document.querySelectorAll(".control2");
let currentItem2 = 0;
const items2 = document.querySelectorAll(".item2");
const maxItems2 = items2.length;

controls2.forEach((control2) => {
  control2.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left2");

    if (isLeft) {
      currentItem2 -= 1;
    } else {
      currentItem2 += 1;
    }

    if (currentItem2 >= maxItems2) {
      currentItem2 = 0;
    }

    if (currentItem2 < 0) {
      currentItem2 = maxItems2 - 1;
    }

    items2.forEach((item2) => item2.classList.remove("current-item2"));

    items2[currentItem2].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items2[currentItem2].classList.add("current-item2");
  });
});

const controls3 = document.querySelectorAll(".control3");
let currentItem3 = 0;
const items3 = document.querySelectorAll(".item3");
const maxItems3 = items3.length;

controls3.forEach((control3) => {
  control3.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left3");

    if (isLeft) {
      currentItem3 -= 1;
    } else {
      currentItem3 += 1;
    }

    if (currentItem3 >= maxItems3) {
      currentItem3 = 0;
    }

    if (currentItem3 < 0) {
      currentItem3 = maxItems3 - 1;
    }

    items3.forEach((item3) => item3.classList.remove("current-item3"));

    items3[currentItem3].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items3[currentItem3].classList.add("current-item3");
  });
});

const controls4 = document.querySelectorAll(".control4");
let currentItem4 = 0;
const items4 = document.querySelectorAll(".item4");
const maxItems4 = items4.length;

controls4.forEach((control4) => {
  control4.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left4");

    if (isLeft) {
      currentItem4 -= 1;
    } else {
      currentItem4 += 1;
    }

    if (currentItem4 >= maxItems4) {
      currentItem4 = 0;
    }

    if (currentItem4 < 0) {
      currentItem4 = maxItems4 - 1;
    }

    items4.forEach((item4) => item4.classList.remove("current-item4"));

    items4[currentItem4].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items4[currentItem4].classList.add("current-item4");
  });
});

const controls5 = document.querySelectorAll(".control5");
let currentItem5 = 0;
const items5 = document.querySelectorAll(".item5");
const maxItems5 = items5.length;

controls5.forEach((control5) => {
  control5.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left5");

    if (isLeft) {
      currentItem5 -= 1;
    } else {
      currentItem5 += 1;
    }

    if (currentItem5 >= maxItems5) {
      currentItem5 = 0;
    }

    if (currentItem5 < 0) {
      currentItem5 = maxItems5 - 1;
    }

    items5.forEach((item5) => item5.classList.remove("current-item5"));

    items5[currentItem5].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items5[currentItem5].classList.add("current-item5");
  });
});


window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.unicornio',{
delay:400,
rotate:{
z:10,
x:10
}
})
ScrollReveal().reveal('.container',{
delay:300
})
ScrollReveal().reveal('.container2',{
    delay:300
    })
    ScrollReveal().reveal('.container3',{
        delay:300
        })
        ScrollReveal().reveal('.container4',{
            delay:300
            })
            ScrollReveal().reveal('.container5',{
                delay:300
                })
                ScrollReveal().reveal('.coruja',{
                    delay:300,
                    rotate:{
                    z:100,
                    x:100
                    }
                    })
                    ScrollReveal().reveal('.background2',{
                        delay:200,
                        rotate:{
                        y:100
                        }
                        })
                        ScrollReveal().reveal('.head',{
                            delay:100,
                           rotate:{
                        x:300
                           }
                           
                            })
                            ScrollReveal().reveal('.amor',{
                                delay:200
                        
                                })
                                ScrollReveal().reveal('.carinho',{
                                    delay:200
                            
                                    })
                                    ScrollReveal().reveal('.texto',{
                                        delay:400
                                
                                        })
                                        ScrollReveal().reveal('.bru',{
                                            delay:200,
                                            rotate:{
                                            y:200
                                            }
                                    
                                            })
    

