const containers = document.querySelectorAll('.bottom-container');
const buttons = document.querySelectorAll('.btn');


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('btn-open');
    })
})

// $(document).ready(function(){
//     $(".btn").click(function(){
//         $('.bottom-container').slideToggle('slow', 'swing');
//     });
// });
$(document).ready(() => {
    $('.btn').click((e) => {
        let _this = e.currentTarget;
        $(_this).parents('.card').find('.bottom-container').slideToggle(350, 'swing');
    });
});

// $(document).ready(() => {
//     $('.btn').click((e) => {
//         console.log(e.currentTarget);
//     })
// });