document.addEventListener('DOMContentLoaded', function() {
    buttonManager.init("burgerButton", false);
});

var buttonManager = {
    showClass: "opened",
    hideClass: "collapsed",
    rotate: "rotated",
    straight: "straight",
    init: function(buttonId, rotate) {
        var burgerButton = document.getElementById(buttonId);

        if (rotate === true) {
            burgerButton.addEventListener('click', function() {
                var sibling = this.nextSibling.className;
                var turnable = this.getElementsByClassName("turnable")[0].className;
                if (sibling.indexOf(buttonManager.showClass) >= 0)
                    sibling = sibling.replace(buttonManager.showClass, buttonManager.hideClass);
                else if (sibling.indexOf(buttonManager.hideClass) >= 0)
                    sibling = sibling.replace(buttonManager.hideClass, buttonManager.showClass);
                else
                    sibling = sibling + " " + buttonManager.hideClass;

                if (turnable.indexOf(buttonManager.rotate) >= 0)
                    turnable = turnable.replace(buttonManager.rotate, buttonManager.straight);
                else if (turnable.indexOf(buttonManager.straight) >= 0)
                    turnable = turnable.replace(buttonManager.straight, buttonManager.rotate);
                else
                    turnable = turnable + " " + buttonManager.straight;

                this.nextSibling.className = sibling;
                this.getElementsByClassName("turnable")[0].className = turnable;
            });
        } else {

            burgerButton.addEventListener('click', function() {
                var sibling = this.nextSibling.className;
                //console.log(sibling);
                if (sibling.indexOf(buttonManager.showClass) >= 0)
                    sibling = sibling.replace(buttonManager.showClass, buttonManager.hideClass);
                else if (sibling.indexOf(buttonManager.hideClass) >= 0)
                    sibling = sibling.replace(buttonManager.hideClass, buttonManager.showClass);
                else
                    sibling = sibling + " " + buttonManager.hideClass;

                this.nextSibling.className = sibling;
            });
        }
    },
};
