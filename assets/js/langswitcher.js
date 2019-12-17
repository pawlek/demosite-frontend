$(document).ready(function () {

    /* 
     * Переключает язык пользователя (после изменения им состояния переключателя), пишет язык в куку и перезагружает страницу
     */
    $('#lang-switcher').on('change', function(){

        var lang = "";
        $("select option:selected").each(function() {
            lang = $(this).text();
        });
        
        var exp = (new Date(new Date().getTime() + (86400e3 * 365))).toUTCString();
        
        document.cookie = "lang=" + lang.toLowerCase() + "; path=/; expires=" + exp;

        location.reload();

        return true;
    });

});