var modal = (function() {
      
    function open(modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function close(modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }

    function init(container, btn) {
        var cont = document.querySelector(container),
            actionBtn = document.querySelector(btn),
            closeBtn = cont.querySelector('.close');

        // When the user clicks the button, open the modal 
        actionBtn.onclick = function() { 
            open(cont);
        } 

        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = function() {
            close(cont)
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == cont) {
                close(cont);
            }
        }
    }

    return {
        init: init
    }

}());