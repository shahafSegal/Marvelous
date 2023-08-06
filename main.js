const stylesheet = document.getElementById('stylesheet');

let isStylesheet1Active = true;
$(function() {
    //load the header into the document
    $.get('common-parts/header.html', function(data) {
        $('#common-header').html(data);
        
        var pageTitle = document.title;
        $('#header-paragraph').text(pageTitle);


        //dark/ light mode button
        var switchButton = document.getElementById('themeSwButton');
        if (switchButton){

            switchButton.addEventListener('click', () => {
                if (isStylesheet1Active) {
                    stylesheet.href = 'css/lightStyle.css';
                    switchButton.textContent="switch to dark mode"
                } else {
                    stylesheet.href = 'css/darkStyle.css';
                    switchButton.textContent="switch to light mode"
                }
                isStylesheet1Active = !isStylesheet1Active;
            });            
        }

        //activate the navPage you are in
        const anchors = document.getElementsByClassName("navPage");
        const currentPage = window.location.pathname;
        //incase the page has no /index.html
        if( "/Marvelous"=== currentPage && anchors[0].getAttribute('href') === "index.html" ){
            anchors[0].id ='active'; 
        }
        else{
            for( var i=0; i < anchors.length; i++ ) {
            
                if ( '/Marvelous/'+anchors[i].getAttribute('href') === currentPage ){
                    anchors[i].id ='active';
                    break;
                }
            
            }
        }


    });


        


        


    //load the footer into the document
    $.get('common-parts/footer.html', function(data) {
        $('#common-footer').html(data);
    });
    
});
