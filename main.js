const stars = document.querySelectorAll('.fa-star')
const showRating = document.getElementById('user-rating_input');

function rate(){
    stars.forEach(star => star.classList.remove('checked'));
    this.classList.add('checked');
    display();
    for(i = 0; i < stars.length; i++){
        if(stars[i].classList.contains('checked')){
            break;
        }else{
            stars[i].classList.add('checked');
        }
    }
}

function display(){
    for(let i = 0; i , stars.length; i++){
        if(stars[i].classList.contains('checked')){
            showRating.innerText = i+1;
            break;
        }
    }
}

stars.forEach(star => {
    star.addEventListener('click', rate);
})