// Funcion para mostrar las cards ocultas

function showContent(contentId) {
    const contents = document.querySelectorAll('.areas--flex')
    contents.forEach(content=> {
        content.classList.remove('visible');
        content.classList.add('invisible');
    })

    const selectedContent= document.getElementById(contentId);
    selectedContent.classList.remove('invisible')
    selectedContent.classList.add('visible')

    const items= document.querySelectorAll('.areas--list li')
    items.forEach(item=>{
        item.classList.remove('selected')
    })

    const selecteditem = [...items].find(item=>item.getAttribute('onclick').includes(contentId))
    if (selecteditem){
        selecteditem.classList.add('selected')
    }

}

document.addEventListener('DOMContentLoaded', ()=> {
    showContent('content')
})

// Funcion para los sliders

document.addEventListener('DOMContentLoaded', ()=>{

    const carouselElement = document.querySelector('#carouselExampleCaptions')
    const carousel = new bootstrap.Carousel(carouselElement)


    function updateText(){

        const slides = [...carouselElement.querySelectorAll('.carousel-item')]
        const activeSlide = carouselElement.querySelector('.carousel-item.active')
        const index = slides.indexOf(activeSlide)
        const textCont = document.querySelector('#carouselText')

        const texts = [

            '1loremLorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laboriosam vitae quas illum minima reiciendis, enim officia, aspernatur inventore ipsum sequi pariatur asperiores nobis, saepe possimus atque ipsa quo repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique numquam inventore consectetur architecto, repudiandae, eveniet recusandae quod sed sunt, eaque assumenda vero voluptatibus quisquam! Perspiciatis ratione alias illo aliquam minima!',
            '2loremLorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laboriosam vitae quas illum minima reiciendis, enim officia, aspernatur inventore ipsum sequi pariatur asperiores nobis, saepe possimus atque ipsa quo repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique numquam inventore consectetur architecto, repudiandae, eveniet recusandae quod sed sunt, eaque assumenda vero voluptatibus quisquam! Perspiciatis ratione alias illo aliquam minima!',
            '3loremLorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laboriosam vitae quas illum minima reiciendis, enim officia, aspernatur inventore ipsum sequi pariatur asperiores nobis, saepe possimus atque ipsa quo repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique numquam inventore consectetur architecto, repudiandae, eveniet recusandae quod sed sunt, eaque assumenda vero voluptatibus quisquam! Perspiciatis ratione alias illo aliquam minima!'
        ]

        console.log('Slides:', slides);
        console.log('Active Slide:', activeSlide);
        console.log('Index:', index);

        textCont.querySelector('p').textContent = texts[index]

    }

    updateText();

    carouselElement.addEventListener('slid.bs.carousel', updateText)
})