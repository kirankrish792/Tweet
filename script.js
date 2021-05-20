const form = document.querySelector('form');
const name = document.querySelector('#name').value;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const Tweet = document.querySelector('textarea').value;
    if (name === '' || Tweet === '') {

        if (document.querySelector('h5') === null) {
            const h5 = document.createElement('h5');
            h5.append("please enter a valid input")
            form.prepend(h5);
        }
    }
    else {
        tweet();
        if (document.querySelector('h5') !== null) {
            document.querySelector('h5').remove();
        }

    }

    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('textarea').value = '';

});
function tweet() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const Tweet = document.querySelector('textarea').value;
    const timeLine = document.querySelector('.timeline');
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const h2 = document.createElement('h2');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    h2.append(name);
    h4.append(email);
    p.append(Tweet);
    div.className = 'tweet';
    div2.className = "content";
    div2.append(h2, h4, p);
    div.append(div2);
    timeLine.append(div);
};