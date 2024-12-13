export const fetchTodos = async(page_no = 1, page_size = 10) => {
    const res = await fetch(`https://todo-bbfj.onrender.com/api/todo?page_no=${page_no}&page_size=${page_size}`);
    const data = await res.json();
    return data
}

export const createTodo = async(todos,) => {
    try {
        const response = await fetch(`https://todo-bbfj.onrender.com/api/todo`, {
            method: 'POST', // specify POST request
            headers: {
                'Content-Type': 'application/json', // specify JSON content
            },
            body: JSON.stringify(todos), // send the request body as JSON
        }); 
    } catch (error) {
        console.error('Error:', error);
    }
}

export const updateTodo = async(todo) => {
    try {
        const response = await fetch(`https://todo-bbfj.onrender.com/api/todo/${todo.id}`, {
            method: 'PUT', // Specify the PUT request
            headers: {
                'Content-Type': 'application/json', // Send data as JSON
            },
            body: JSON.stringify(todo), // Send the updated todo data
        });

    } catch (error) {
       console.log(error)
    }
}

export const completedTodo = async(todo) => {
   
    try {
        const response = await fetch(`https://todo-bbfj.onrender.com/api/todo/completed/${todo.id}`, {
            method: 'PUT', // Specify the PUT request
            headers: {
                'Content-Type': 'application/json', // Send data as JSON
            },
            body: JSON.stringify(todo), // Send the updated todo data
        });

    } catch (error) {
       console.log(error)
    }
}

export const deleteTodo = async(todo) => {
    try {
        const response = await fetch(`https://todo-bbfj.onrender.com/api/todo/${todo._id}`, {
            method: 'DELETE', // Specify the DELETE request
            headers: {
                'Content-Type': 'application/json', // Send data as JSON
            },
            body: JSON.stringify(todo), // Send the updated todo data
        });

      
    } catch (error) { 
        console.log(error)
    }
}