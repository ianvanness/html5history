jQuery(document).ready( function() {
    var __hist5 = false;
    if(typeof history.pushState !== 'undefined') {
        __hist5 = true;
	}
	//console.log( "hist5 = " + __hist5 );
	
	var ajax_replacee = '/';
	var ajax_replacer = '/index.php?p=';
	
	var url_replacee = '';
	var url_replacer = '';
	
	var content_area = '#inserthere';

	if( __hist5 ) {
    	jQuery('.alink').live('click', function(e) {
    		page = jQuery(this).attr('href').replace(ajax_replacee,ajax_replacer);
    		oldData = jQuery(content_area).html();
    		jQuery(content_area).load(page, function(n){
    		    // initial page state, if set (ex: landed on a permalink page)
    		    if( initialParams ) {
    		        history.replaceState(initialParams, '');
                    initialParams = null; 
    		    }
    		    history.pushState(page.replace(ajax_replacer,''), document.title, page.replace(ajax_replacer,''));
    		});
		    e.preventDefault();
    		e.stopPropagation();
    		return false;
    	});
    }

    /* ONLY IF USING #!
	// backwards compat support for permalinks with #!
	if( __hist5 ) {
	    //only on initial page load?
        if( location.hash != '' ) {
            console.log( "hist5 location hash page update" );
            jQuery(content_area).load(ajax_replacer + location.hash.replace(url_replacee,url_replacer));
        } 
    }
    */


    onpopstate = function(event) {
        if( event.state ) {
            //console.log( "pop state ajax: " + event.state );
            if( event.state == '-1' ) {
                // stored 'blank'/beginning state
                jQuery(content_area).empty();
            } else {
                jQuery(content_area).load(ajax_replacer + event.state.replace(url_replacee,url_replacer));
            }
        }
    }

    /* ONLY IF USING #!
    $(function(){
        // Bind the event.
        $(window).hashchange( function( e ){
            if( __hist5 ) { return; }
            if( location.hash != '' ) {
                console.log( "hash change ajax" );
                jQuery(content_area).load(ajax_replacer + location.hash.replace(url_replacee,url_replacer));
            } else {
                console.log( "insert area hash change clear" );
                //jQuery(content_area).empty();
            }

        });

        // Trigger the event (useful on page load).
        if( !__hist5 ) {
            $(window).hashchange();
        }
    });
    */

});



/* html5 pure
hashchange = function(e) {
	jQuery(content_area).load(e);
}
*/