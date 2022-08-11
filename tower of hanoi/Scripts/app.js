// var counter = 0;
const counterHt = document.querySelector(".moves");
const clock = document.querySelector(".clock");
const allDisks = document.querySelectorAll(".disks");
const allD = document.querySelectorAll(".disk");
const allDrops = document.querySelectorAll(".dropped-disks");
const warning = document.querySelector('.warn');
// console.log(allD);

// console.log(allD.getAttribute("value"));
// console.log(allD[0].getAttribute("value"));
// console.log(allD[1].getAttribute("value"));
// if (allD[0].getAttribute("value") < allD[1].getAttribute("value")) {
//     console.log('true');
// }
// console.log(allD);
// // let index = 0;
// allD.forEach((disk, index) => {
//         // console.log(disk[1]);
//         // console.log(disk[0]);
//         console.log(disk[index].getAttribute("value"));
//         // console.log(disk.getAttribute("value"));
//         // console.log(disk);
//         // console.log(index);
//         // console.log(disk.getAttribute[0]);

//         // console.log(disk[0]);
//         // console.log(disk.getAttribute("value"));
//     })
//ON CLICK TIMER START
let second = 0
const tick = (() => {
    // const now = new Date();
    // const second = now.getSeconds();

    second += 1;
    // const min = now.getMinutes(timer);
    let min = second / 60;
    let intMin = Math.floor(min);
    let hour = intMin / 60;
    let intHour = Math.floor(hour);
    // console.log(intMin);
    clock.innerText = `Time: ${intHour}hr : ${intMin}mins : ${second}secs`;

});
// //Drag and drop in JS
// allDisks.addEventListener('dragstart', (e) => {
//     console.log("hello");
//     // setTimeout(() => {
//     //     e.target.className = 'hide';

//     // }, 0);

// });
let counter = 0
    // allDisks.addEventListener('dragend', (e) => {
    //     console.log("DragEnd has been Triggered");
    //     e.target.className = 'disk';
    //     counter += 1;
    //     console.log(counter);
    // });

// allDrops.forEach((div) => {
//     div.addEventListener('dragover', (e) => {
//         e.preventDefault();
//         console.log("Dragover has been triggered");
//     });
//     div.addEventListener('dragenter', (e) => {
//         console.log("Drag Enter has been triggered");
//     });
//     div.addEventListener('dragleave', (e) => {
//         console.log("Drag Leave has been triggered");
//     });
//     div.addEventListener('drop', (e) => {
//         console.log("Drop has been triggered");
//         console.log(e.target);
//         // if()

//         e.target.append(allDisks.children[0]);
//         counter += 1;
//         console.log(counter);
//     });
// })

// DRAG AND DROP WITH MOVES COUNT
// console.log(allDisks.children[0])
// allD.forEach(element => {
//     console.log(element);
// });
// console.log(warning.classList);
warning.classList.add('play');

allDisks.forEach(disk => {
    disk.addEventListener('mouseover', (e) => {
        // console.log(e.target.clientWidth);
        if (e.target != disk.children[0]) {
            warning.classList.add('warning');
            warning.classList.remove('accept');
            warning.classList.remove('play');
            // $(".testRod").draggable({
            //     disabled: true
            // });
        } else if (e.target === disk.children[0]) {
            warning.classList.add('accept');
            warning.classList.remove('play');
            warning.classList.remove('warning');
        }
        // console.log(e.target);
    })
})
allDisks.forEach(disk => {
    disk.addEventListener('mouseleave', (e) => {
        warning.classList.add('accept');
        warning.classList.add('play');
        warning.classList.remove('warning');
    })
});

$(".testRod").draggable({
    opacity: 0.5
});



$(".dropped-disks").droppable({
    accept: '.testRod',
    drop: function(ev, ui) {
        // return counter;
        // debugger
        var droppedItem = $(ui.draggable).removeAttr("style");
        $(this).prepend(droppedItem);
        console.log(droppedItem[0].getAttribute('value'));

        console.log(ev.target);
        if (ev.target.children[1]) {
            console.log('exsist');
        }
        console.log(droppedItem[0].getAttribute('value'));
        if (droppedItem[0].getAttribute('value') > droppedItem[0].getAttribute('value')) {
            console.log('retreive');
        } else {
            console.log('Nothing has happend');
        }
        // console.log(ev.target.children);
        // console.log(ev.target.children[0].clientWidth);
        counter += 1;
        counterHt.innerText = `Moves: ${counter}`;


    }
});


// console.log(counter);
// allDisks.addEventListener('click', (e) => {
//     console.log(e.target.clientWidth);

//     if (e.target.classList.contains("disk")) {
//         setInterval(tick, 1000);
//     }

// }