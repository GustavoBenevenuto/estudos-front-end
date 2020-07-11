(function main(){
    
    document.addEventListener('click', e => {
        const element = e.target;
        e.preventDefault();

        if(element.classList.contains('no-like')){
            const heart = element;
            heart.classList.remove('no-like');
            heart.classList.add('like');
            heart.src="src/img/heart-like.png";
            return;
        }

        if(element.classList.contains('like')){
            const heart = element;
            heart.classList.remove('like');
            heart.classList.add('no-like');
            heart.src="src/img/heart-black-mode.png";
            return;
        }

    });
})()