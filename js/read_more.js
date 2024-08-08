const readMore = document.querySelectorAll('.content__custom-button');
const firstP = document.querySelectorAll( '.content_first-text');
const secondP = document.querySelectorAll( '.content_second-text');

function hideParagraph(index){
    firstP[index].classList.add("hide");
    secondP[index].classList.remove("hide");
    readMore[index].classList.add("hide");
}

readMore.forEach((elem,index)=>{
    elem.addEventListener('click',()=>{
        hideParagraph(index);
    })
});