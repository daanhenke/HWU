///hwu_localStorage_set( name, value );
function hwu_localStorage_set(name, value) {
    localStorage.setItem(name, value);
}

///hwu_localStorage_get( name, default );
function hwu_localStorage_get(name, _default) {
    if(localStorage[name]) {
        return localStorage[name];
    } else {
        if(_default == null) {
            return "";
        } else {
            return _default;
        }
    }
}

///hwu_localStorage_rem( name );
function hwu_localStorage_rem(name) {
    localStorage.removeItem(name);
}