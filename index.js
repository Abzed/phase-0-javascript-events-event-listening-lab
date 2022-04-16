function addingEventListener() {
    let input = document.querySelector('input')
    input.addEventListener('blur', () => alert("i am focused"))
}
addingEventListener()