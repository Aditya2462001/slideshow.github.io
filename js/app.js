const careouselSlide = document.querySelector(".carousel-slide");

const careouselImg = document.querySelectorAll('.carouselImg');

// buttons 

const prevBtn = document.querySelector('#prevBtn') ;
const nextBtn = document.querySelector('#nextBtn') ;


// counter 

let count = 1;

const size = careouselImg[0].clientWidth;

careouselSlide.style.transform=`translateX(-${size * count }px)`;

//button 
nextBtn.addEventListener("click",() =>
{

    careouselSlide.style.transition = 'transform 0.4s ease-in-out';
    count++ ;
    careouselSlide.style.transform = `translateX(-${size * count}px)`;
});


prevBtn.addEventListener("click",() =>
{
    careouselSlide.style.transition = 'transform 0.4s ease-in-out';
    count-- ;
    console.log('count :', count );
    careouselSlide.style.transform = `translateX(-${size * count}px)`;

});


careouselSlide.addEventListener("transitionend",() =>
{
    if(count == 0)
    {
        careouselSlide.style.transition = 'none';
        count = careouselImg.length -1 ;
        careouselSlide.style.transform = `translateX(-${size * count}px)`;
    }
    else if (count == careouselImg.length - 1)
    {
        console.log("hello world");
        careouselSlide.style.transition = 'none';
        count = 0;
        careouselSlide.style.transform = `translateX(-${size * count}px)`;

    }
})

setInterval(() =>
{
    careouselSlide.style.transition = 'transform 0.4s ease-in-out';
    count++;
    careouselSlide.style.transform = `translateX(-${size * count}px)`;
},5000)


