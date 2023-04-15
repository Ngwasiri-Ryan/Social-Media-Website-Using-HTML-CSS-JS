 //sifdebar
const menuItems = document.querySelectorAll('.menu-item');

//remove active class from menu when clicked
const changeActiveItem = ()=>{
menuItems.forEach(item => {
    item.classList.remove('active');
})
}

menuItems.forEach(item =>{ 
    item.addEventListener('click', ()=>{
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
        }
         })
});
//-------------------messages--------------------------------

//highlight messsages when message icon is clicked
const messages = document.querySelector('.messages');
const messagesnotification = document.querySelector('#message-notifications');
messagesnotification.addEventListener('click', () =>{
      messages.style.boxShadow = '0 0 1rem var(--color-primary)';
      setTimeout(()=>{
        messages.style.boxShadow = '0 0 1rem var(--color-primary)';
      },2000)
        
}); 


//search bar
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//search chat
messageSearch.addEventListener('keyup',searchMessage);
//searches chat
const searchMessage = () => {
    const val= messageSearch.value.toLowerCase();
    message.forEach(chat =>{
        let name=chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';
        }else{
            chat.style.display='none';
        }
    });
}