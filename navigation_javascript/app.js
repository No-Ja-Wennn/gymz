const btshow = document.querySelectorAll('.navigation-display-button');
const bthide = document.querySelector('.navigation-hide-button');
const navigation = document.querySelector('.container__bar');
const shadow = document.querySelector('.shadow');
const chat = document.querySelector('.chatbox');

shadow.addEventListener('click', function(event) {
    console.log('hide2');
    navigation.style.animation = 'fly-out-left .35s ease-in-out forwards';
    shadow.style.animation = 'shadow-out .35s ease-in-out forwards';
    setTimeout(function() {
        navigation.style.display = 'none';
        btshow.innerHTML = '<i class="fa-solid fa-bars"></i>';
        shadow.style.display = 'none';
    }, 500);

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
    
})


const bttrash = document.querySelectorAll('.more-option i');
const displaytrash = document.querySelector('.message__user__box__affter');
const displaylist = document.querySelector('.message__user__box__affter__list');

bttrash.forEach(button => {
    button.addEventListener('click', function(){

        event.stopPropagation();
    
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
    });
})


document.addEventListener('click', function(){
    if(displaytrash.style.display === 'flex'){
        console.log('hide click tum lum')
        displaylist.style.animation = 'hidelist .1s ease-in-out forwards';
        setTimeout(function(){
            displaytrash.style.animation = 'hidetrash .35s ease-in-out forwards';
            setTimeout(function(){
                displaytrash.style.display = 'none';
            }, 350)
        }, 50)
    }
});



const deletechat = document.querySelector('.message__user__box__affter__item');

deletechat.addEventListener('click', function(){
    const chat_active = document.querySelector('.message__user--active1');
    chat_active.style.animation = 'side-to-left .35s ease-in-out forwards';
    // chat_active.style.animation = 'de-height .5s ease-in-out forwards';
    setTimeout(function(){
        chat_active.style.animation = 'de-height .35s ease-in-out forwards';
        setTimeout(function(){
            // xoa o day nay
        }, 500)
    }, 350)
    console.log('delete');
});