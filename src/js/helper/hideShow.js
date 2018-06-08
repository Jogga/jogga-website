'use strict';

const hiddenClass = 'h-hide';

function show(element, depth) {
    if(element.classList.contains(hiddenClass)) {
        element.classList.remove(hiddenClass);
    } else if (depth > 0) {
        show(element.parentElement, depth - 1);
    }
}

export default { show };