///hwu_external_create_script( source );
function hwu_external_create_script(src) {
    var elem = document.createElement('script');
    elem.src = src;
    elem.type = 'text/javascript';

    document.body.appendChild(elem);
}

///hwu_external_execute_code( code );
function hwu_external_execute_code(code) {
    var func = new Function(code);
    return(func());
}