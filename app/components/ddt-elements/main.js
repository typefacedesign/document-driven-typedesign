var findIndexOfKey = function(searchKey) {
    for (var i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        if(key === searchKey)
            return i;
    }
    return -1;
}