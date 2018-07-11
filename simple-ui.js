var elements = document.getElementsByClassName("simple-ui");
for (var i = 0, len = elements.length; i < len; i++) {
    var classList = elements[i].className.split(/\s+/);
    for (var ih = 0; ih < classList.length; ih++) {
    	var classnm = classList[ih].split("-");
    	if (classnm[0] == 'su' && classnm[1] == 'bg') {
    		elements[i].style.backgroundColor = classnm[2];
    	}
    }
}