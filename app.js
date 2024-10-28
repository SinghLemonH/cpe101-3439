let activityImages = [
    ['sic1.jpg','../sic_item.png' , '../sic2.jpg', '../sic3.jpg'],
    ['../bcg1.jpg','../bcg2.jpg','../bcg3.jpg','../bcg4.jpg','../bcg6.png','../bcg5.png'],
    ['../com_1.jpg', '../com_2.jpg'],
    ['../ii.jpg', '../iii.jpg', '../i.png'],
    ['../open2.jpg', '../open3.jpg', '../open4.jpg', '../open1.png'],
    ['../engi.jpg', '../engii.jpg'],
    ['../vr.png', '../vrr.png', '../vrrr.png'],
    ['../iw1.png', '../iw2.png'],
    ['../is.jpg', '../iss.jpg', '../isss.jpg'],
    ['../ll.jpg', '../llk.jpg'],
    ['../book1.png', '../book2.jpg'],
    ['../snake.png'],
    ['../ai1.png', '../ai2.png', '../ai3.png'],
    ['../TTT1.png', '../TTT2.png'],
    ['../godot.png'],
    ['../iot2.jpg', '../iot1.jpg'],
    ['../3D1.png', '../3D2.png'],
    ['../namjai.jpg'],
    ['../pha1.jpg', '../pha2.jpg'],
    ['../wid1.jpg', '../wid2.jpg', '../wid3.jpg'],
    ['../bye2.jpg', '../bye1.jpg'],
    ['../sport.jpg'],
    ['../ipc.png'],
    ['../hack.png'],
    ['../dd.png'],
    ['../add.jpg'],
    ['../KU.png'],
    ['../cc.png'],
    ['../as.png'],
    ['../imagepy.png'],
    ['../v.png'],
    ['../imagea.png'],
    ['../b.png'],
    ['../c.png']
];

//NOTE TO TA this part make for slide image from activity page
let currentIndex = 0;
let currentActivity = 0;

function openPopup(activityIndex) {
    currentActivity = activityIndex;
    currentIndex = 0; 
    var popup = document.getElementById("popup");
    var popupImg = document.getElementById("popup-img");

    popupImg.src = activityImages[currentActivity][currentIndex];
    popup.style.display = "flex";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function changeSlide(direction) {
    currentIndex += direction;

    // NOTE TO TA  this is LOOP for return last image to first img
    if (currentIndex >= activityImages[currentActivity].length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = activityImages[currentActivity].length - 1;
    }

    var popupImg = document.getElementById("popup-img");
    popupImg.src = activityImages[currentActivity][currentIndex];
}
