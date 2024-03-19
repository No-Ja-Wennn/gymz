const btshow = document.querySelectorAll('.navigation-display-button');
const bthide = document.querySelector('.navigation-hide-button');
const navigation = document.querySelector('.container__bar');
const shadow = document.querySelector('.shadow');
const chat = document.querySelector('.chatbox');


// window.onload = function(event) {
//   const btshow = document.querySelector('.navigation-display-button');
//   const navigation = document.querySelector('.container__bar');

//   if (navigation.style.display === 'flex') {
//     btshow.innerHTML = '<i class="fa-solid fa-xmark"></i>';
//   } else {
//     btshow.innerHTML = '<i class="fa-solid fa-bars"></i>';
//   }
// };

// function showNavigation() {
//   if(navigation.style.display === 'flex' || navigation.style.display === ''){
//     navigation.style.animation = 'fly-out-left .5s ease-in-out forwards';
//     btshow.innerHTML = '<i class="fa-solid fa-bars"></i></i>';
//     setTimeout(function(){
//       navigation.style.display = 'none';
//       }, 400);
//   }
//   else{
//     // Nếu không, chuyển sang flex
//     // navigation.style.display = 'flex';
//     navigation.style.animation = 'fly-in-left .5s ease-in-out forwards';
//     btshow.innerHTML = '<i class="fa-solid fa-xmark"></i>';
// };

// btshow.addEventListener('click', function(event) {
//   console.log('Button clicked');
//   // Kiểm tra trạng thái hiện tại của phần tử navigation
//   if (navigation.style.display === 'flex' || navigation.style.display === '') {
//     // Nếu đang là flex hoặc không có giá trị display, thì chuyển sang none
//     // navigation.style.display = 'none';
//     navigation.style.animation = 'fly-out-left .5s ease-in-out forwards';
//     btshow.innerHTML = '<i class="fa-solid fa-bars"></i></i>';
//     setTimeout(function(){
//       // navigation.style.display = 'none';
//       }, 400);
//   } else{
//     // Nếu không, chuyển sang flex
//     // navigation.style.display = 'flex';
//     navigation.style.animation = 'fly-in-left .5s ease-in-out forwards';
//     btshow.innerHTML = '<i class="fa-solid fa-xmark"></i>';
//   }
// });

// const btshow = document.querySelector('.navigation-display-button');
// const navigation = document.querySelector('.container__bar');

btshow.forEach(button => {
    button.addEventListener('click', function(event) {
        console.log('show');
        navigation.style.animation = 'fly-in-left .35s ease-in-out forwards';
        navigation.style.display = 'flex';
        shadow.style.animation = 'shadow-in .35s ease-in-out forwards';
        shadow.style.display = 'flex';
    })
});



bthide.addEventListener('click', function(event) {
    console.log('hide');
    navigation.style.animation = 'fly-out-left .35s ease-in-out forwards';
    shadow.style.animation = 'shadow-out .35s ease-in-out forwards';
    setTimeout(function() {
        navigation.style.display = 'none';
        btshow.innerHTML = '<i class="fa-solid fa-bars"></i>';
        shadow.style.display = 'none';
    }, 500);
})


// Bổ sung sự kiện click để ẩn noidung222 khi click bất kỳ đâu trên trang
// document.addEventListener('click', function () {
//     console.log('hide');
//     if(navigation.style.display === 'flex'){
//         navigation.style.animation = 'fly-out-left .35s ease-in-out forwards';
//         shadow.style.animation = 'shadow-out .35s ease-in-out forwards';
//         setTimeout(function() {
//             navigation.style.display = 'none';
//             btshow.innerHTML = '<i class="fa-solid fa-bars"></i>';
//             shadow.style.display = 'none';
//         }, 500);
//     }
// });


const bttrash = document.querySelector('.more-option i');
const displaytrash = document.querySelector('.message__user__box__affter');
const displaylist = document.querySelector('.message__user__box__affter__list');

bttrash.addEventListener('click', function(){
    if (displaytrash.style.display === 'none' || displaytrash.style.display === ''){
        console.log('show trash1')
        displaytrash.style.display = 'flex';
        displaytrash.style.animation = 'showtrash .35s ease-in-out forwards';
        setTimeout(function(){
            displaylist.style.animation = 'showlist .1s ease-in-out forwards';
        }, 250)
    }else{
        console.log('hide trash2')
        displaylist.style.animation = 'hidelist .1s ease-in-out forwards';
        setTimeout(function(){
            displaytrash.style.animation = 'hidetrash .35s ease-in-out forwards';
            setTimeout(function(){
                displaytrash.style.display = 'none';
            }, 350)
        }, 50)
    }
})