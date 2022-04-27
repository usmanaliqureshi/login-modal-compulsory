var $ = jQuery;
window.onload = function() {

    /**
     * Cookie related functions
     */
    window.cookieMonster = window.cookieMonster || 
    {
        get: function (cookieName) {
            var b = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
            return b ? b.pop() : '';
        },

        delete: function (name) {
            document.cookie = '{0}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
                .replace('{0}', name);
        },

        set: function (name, value) {
            document.cookie =
                '{0}={1};expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Lax'
                .replace('{0}', name)
                .replace('{1}', value);
        }
    };

    /**
     * Login Form Height Adjustment function
     */
    function rhSetLoginFormHeight(){

        var heights = $("div.rh_form_modal").map(function ()
        {
            return $(this).height();
        }).get();

        var maxHeight = Math.max.apply(null, heights);
        $('.rh_wrapper_login_forms').css('height',maxHeight);

    }

    $(window).resize(rhSetLoginFormHeight);

    /**
     * Checking if the Login Modal was displayed before
     * the logic is based on the cookie set.
     */
    var ismodaldisplayed = cookieMonster.get('modaldisplayed');

    if ( ismodaldisplayed === 'yes' ) {
        
        $('.rh_login_modal_wrapper').css("display", "flex").hide().fadeIn(500);
        rhSetLoginFormHeight();
        rhLoginViz = true;
        $('.rh_login_close').remove();

    } else {

        setTimeout(function(){
            $('.rh_login_modal_wrapper').css("display", "flex").hide().fadeIn(500);
            rhSetLoginFormHeight();
            rhLoginViz = true;
            $('.rh_login_close').remove();
            cookieMonster.set('modaldisplayed', 'yes');
        }, 3000);

    }

    /**
     * Unbinding the click event and functionality which was set in RealHomes
     * and disabling the click event entirely
     */
    $('.rh_login_modal_wrapper').unbind().bind('click', function(e){
        return false;
    });

}