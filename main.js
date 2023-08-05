const stylesheet = document.getElementById('stylesheet');

let isStylesheet1Active = true;
$(function() {
    /* div with id=common-header change to be footer.html , uses title from document*/
    $.get('header.html', function(data) {
        $('#common-header').html(data);
        
        // Dynamically update the paragraph based on the page title
        var pageTitle = document.title;
        $('#header-paragraph').text(pageTitle);

        var switchButton = document.getElementById('switchButton');
        if (switchButton){

            switchButton.addEventListener('click', () => {
                if (isStylesheet1Active) {
                    stylesheet.href = 'style2.css';
                    switchButton.textContent="switch to dark mode"
                } else {
                    stylesheet.href = 'style1.css';
                    switchButton.textContent="switch to light mode"
                }
                isStylesheet1Active = !isStylesheet1Active;
            });            
        }

        var anchors = document.getElementsByClassName('navPages');
        if (anchors){
            
            for( var i=0; i < anchors.length; i++ ) {
                if ( anchors[i].getAttribute('href') === win.location.href ) {
                    anchors[i].classList.add('Active')
                }
            }
        }




    });

    /* div with id=common-footer change to be footer.html*/
    $.get('footer.html', function(data) {
        $('#common-footer').html(data);
    });
    
});
