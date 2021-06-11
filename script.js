let offset = 0;  
const sliderLine = document.querySelector('.slider-line');
 //смещение от правого края
document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 372;
    if (offset > 372*4){
    offset=0}
    sliderLine.style.left = -offset + 'px';

});
//смещение от левого края
document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 372;
    if (offset < 0){
    offset=372*4}
    sliderLine.style.left = -offset + 'px';

});