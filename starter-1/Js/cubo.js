var grade = 0;
const cubes = document.querySelectorAll('.cube');

const rotate = () => {
    
    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${grade}deg)`);
}

//over
document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    grade += 25;
    rotate();

});
//out
document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    grade = 0;
    rotate();
});
//over
document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    grade += -25;
    rotate();

});
//out
document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    grade = 0;
    rotate();
});

//click right
document.querySelector('.right-arrow').addEventListener('click', () => {
    grade += 65;
    rotate();

    document.querySelector('.right-arrow').addEventListener('mouseout', () => {
        grade += 90;
        rotate();

    });

});
//click left
document.querySelector('.left-arrow').addEventListener('click', () => {
    grade += -65;
    rotate();

    document.querySelector('.left-arrow').addEventListener('mouseout', () => {
        grade += -90;
        rotate();
    });
    
});

//play/pause
var toggle = true;


document.querySelector('.play-pause').addEventListener('click', () => {
    toggle = false;


    if (toggle == true) {
        toggle == true;
    }else{
        toggle == false;
    };

    /*while(toggle == false) {
        grade += 90;
        rotate();
        
    }*/

    grade += 90;
    rotate();
    setInterval(rotate, 1000);
});
