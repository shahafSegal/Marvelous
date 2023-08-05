const stylesheet = document.getElementById('stylesheet');

let isStylesheet1Active = true;
$(function() {
    //load the header into the document
    $.get('common-parts/header.html', function(data) {
        $('#common-header').html(data);
        
        var pageTitle = document.title;
        $('#header-paragraph').text(pageTitle);


        //dark/ ligt mode button
        var switchButton = document.getElementById('switchButton');
        if (switchButton){

            switchButton.addEventListener('click', () => {
                if (isStylesheet1Active) {
                    stylesheet.href = 'css/style2.css';
                    switchButton.textContent="switch to dark mode"
                } else {
                    stylesheet.href = 'css/style1.css';
                    switchButton.textContent="switch to light mode"
                }
                isStylesheet1Active = !isStylesheet1Active;
            });            
        }


    });

    //load the topnav into the document
    $.get('common-parts/topnav.html', function(data) {
        $('#common-nav').html(data);

        //activate the navPage you are in
        const anchors = document.getElementsByClassName("navPage");
        const currentPage = window.location.pathname;


        for( var i=0; i < anchors.length; i++ ) {
        
            if (anchors[i].getAttribute('href') === currentPage ) {
                anchors[i].classList.add('active');
                break;
            }
        }



    });
        


    //load the footer into the document
    $.get('common-parts/footer.html', function(data) {
        $('#common-footer').html(data);
    });
    
});
