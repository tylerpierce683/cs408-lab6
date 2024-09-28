

function sayChoice() {
    event.preventDefault();
    alert(document.querySelector('input[name="options"]:checked').value);
}
