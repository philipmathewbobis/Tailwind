const btn = document.getElementById('menu-btn')
const navMenu = document.getElementById('menu');

// addEventListener is a method used to listen for an events or actions in the elements in html
// click is a type of events or actions used for buttons, when button is clicked,
// the specified function the second argument will be executed.
// () => {}, this is an arrow function. It defines the function that will be executed
// when the button is clicked.
btn.addEventListener('click', () => {
    // classlist is a property of DOM elements, It provides a DOMTokenList, 
    // which is essentially a list of all the class names that are currently applied to that element.
    // If you click the button and it does not have the open class:
    // Action: The toggle method adds the open class to the button.
    // If you click the button and it does have the open class:
    // Action: The toggle method removes the open class from the button.
    btn.classList.toggle('open'); // if there's no open class applied to the button
    // it will be add to the element, otherwise if the open toggle is there it will
    // remove it from the element
    navMenu.classList.toggle('flex'); // checks if theres flex class applied to the element
    // and adds it to the element if not exists
    navMenu.classList.toggle('hidden'); // checks if the element is apllied to the element
    // if its already there it will be removed from the element
})