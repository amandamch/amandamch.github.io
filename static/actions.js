/* We're looking to create an alert when a # link is clicked on*/

document.addEventListener('DOMContentLoaded', function() {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
    }

    var nolinks = document.getElementsByClassName("noHref");
    for(var i=0; i<nolinks.length; i++) {
        nolinks[i].addEventListener('click', function() {
            alert("Sorry, this page is still cooking- come back soon!", "success")
        });
        /* now we do the on click stuff to produce an alert */
    }
});

console.log("hello! you've found my javascript- it chucks up an error when you click on an empty link :)");
