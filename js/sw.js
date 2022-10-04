
self.addEventListener('fetch', event => {


   if(event.request.url.includes('styles.css')){
    
    let respuesta = new Response(`
    body{
        background-color: red !important;
        color: pink;

    }
    `, { 
        headers: {
            'Content-Type': 'test/css'
        }
   });
    
    event.respondWith( respuesta);
   }

    

});








