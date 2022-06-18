const checkbox = document.getElementById('checkbox');
const body = document.querySelector('body');
const sections = document.querySelectorAll('.section');
const overviews = document.querySelectorAll('.overview-section');


checkbox.addEventListener('click', ()=>{
    body.classList.toggle('dark');
    sections.forEach(section =>{
        section.classList.toggle('dark')
    });
    overviews.forEach(overview =>{
        overview.classList.toggle('dark')
    })

    // if(checkbox.checked == true){
    //     document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
    //     document.body.style.color = '#fff'
    // }
})