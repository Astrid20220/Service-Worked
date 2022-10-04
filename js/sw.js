
self.addEventListener('fetch', event => {


   if(event.request.url.includes('main.jpg')){
     
    if (event.request.url.includes('main.jpg')){
        let resp = fetch('img/main-patas-arriba-jpg');


        event.respondWith( resp );
    }
    
   }

    

});








