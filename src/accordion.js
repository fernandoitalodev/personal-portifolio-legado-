let accordion= document.getElementsByClassName('content-accordion');
let containerProjects= document.getElementsByClassName('container-projects')


for(let i=0; i<accordion.length;i++){
    accordion[i].addEventListener('click',   function(){
        
        this.classList.toggle('active')
       
    
    })

}