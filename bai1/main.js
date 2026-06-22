// ==========================================
// 1. CALCULATOR LOGIC
// ==========================================
const display = document.getElementById('calc-display');

function appendValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // eval computes mathematical strings (e.g., "7+3*2")
        if (display.value) {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// ==========================================
// 2. TO-DO LIST LOGIC
// ==========================================
const todoInput = document.getElementById('todo-input');
const todoAddBtn = document.getElementById('todo-add-btn');
const todoList = document.getElementById('todo-list');

todoAddBtn.addEventListener('click', function() {
    const taskText = todoInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create container <li>
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button inside the <li>
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    
    // Clear the field for the next task
    todoInput.value = '';
});

// ==========================================
// 3. MODAL POPUP LOGIC
// ==========================================
const modal = document.getElementById('custom-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

// Show the modal block when clicked
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// Hide the modal when close icon is clicked
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal if the user clicks anywhere outside the white box content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});