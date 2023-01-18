const stars = document.querySelectorAll('.fa-star')

function rate(){
    this.classList.add('checked');
    for(i = 0; i < stars.length; i++){
        if(stars[i].classList.contains('checked')){
            break;
        }else{
            stars[i].classList.add('checked');
        }
    }
}

stars.forEach(star => {
    star.addEventListener('click', rate);
})