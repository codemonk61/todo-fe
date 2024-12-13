import React from 'react'
import Pagination from './Pagination'
import { completedTodo, deleteTodo } from '../fetch/todo';

const styles = `
    .arrow__up {
     transform: rotate(90deg);
     cursor: pointer
    }

     .arrow__down {
     transform: rotate(270deg);
      cursor: pointer
    }

`

const TodoList = ({ handleTab, fetchAndSetTodos, todosData = {}, setTodoId, setValue }) => {

    const [arrowStatus, setArrowStatus] = React.useState("")
    const [toggle, setToggle] = React.useState(false)
    const handleComplete = async (e, todo) => {
        e.stopPropagation();
        await completedTodo({ id: todo._id, title: todo.title, is_completed: !todo.is_completed, is_editable: todo.is_editable });
        fetchAndSetTodos();
    };

    const handleClose = async (todo) => {
        await deleteTodo(todo);
        fetchAndSetTodos();
    };

    const handleEdit = (todo) => {
        setTodoId(todo._id);
        setValue(todo);
        handleTab("create_todo")
    };

    const handleDropDown = (id) => {
        setToggle(!toggle)
        setArrowStatus(id)
    }

    return (
        <>
            <style>
                {styles}
            </style>
            <h4 style={{ textAlign: "center" }}>TODO LIST</h4>
            <div >
            {todosData.todos.map((todo, index) => (
                todo.title && (
                    <React.Fragment  key={todo._id}>
                        <div
                            style={{
                                borderBottom: "1px solid black",
                                padding: "8px",
                                display: "flex",
                                gap: "8px",
                                alignItems: "center",
                                justifyContent: "space-between",
                                cursor: "pointer",
                               
                            }}
                            onClick={() => handleDropDown(todo._id)}
                        >
                            <div style={{ display: "flex"}}>
                                <label htmlFor={`check__${index}`}>
                                    <span
                                        style={{
                                            cursor: "pointer",
                                            color: todo.is_completed ? "white" : "black",
                                            background: todo.is_completed ? "black" : "white",
                                            borderRadius: "2px",
                                            display: "block",
                                            height: "16px",
                                            width: "16px",
                                            border: "2px solid black",
                                        }}
                                    >
                                        {todo.is_completed && (
                                            <span style={{ lineHeight: "16px", textAlign: "center", display: "block" }}>
                                                &#10003;
                                            </span>
                                        )}
                                    </span>
                                </label>
                                <input
                                    id={`check__${index}`}
                                    style={{ appearance: "none" }}
                                    type="checkbox"
                                    onClick={(e) => handleComplete(e, todo)}
                                />
                                <span style={todo.is_completed ? { textDecoration: "line-through" } : null}>{todo.title}</span>
                            </div>
                            <div className={(todo._id === arrowStatus && toggle) ? 'arrow__up' : "arrow__down"}>
                                &#10094;
                            </div>
                        </div>
                        {(todo._id === arrowStatus && toggle) && <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px", transition: "width 2s, height 2s,",}}>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <div>
                                {todo.description}
                            </div>
                                        <div>
                            <span
                                style={{
                                    borderRadius: "4px",
                                
                                    padding: "2px",
                                    border: "2px solid black",
                                    cursor: "pointer",
                                    
                                }}
                                onClick={() => handleEdit(todo)}
                            >
                                &#9998;
                            </span>
                            <span
                                style={{
                                    borderRadius: "4px",
                                     marginLeft: "12px",
                                    padding: "2px",
                                    color: "red",
                                    border: "2px solid red",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleClose(todo)}
                            >
                                &#10006;
                            </span>
                          </div>
                        </div>
                             <p style={{color: "lightgray", alignSelf:"flex-end"}}>Created By: {todo.created_by}</p>
                        </div>
                        }
                    </React.Fragment>
                )
            ))}
            </div>
            {todosData.totalPages > 1 && <Pagination
                length={todosData.totalPages}
                pageNo={todosData.currentPage}
                totalPage={todosData.totalPages}
                onClick={fetchAndSetTodos}
            />}
        </>
    )
}

export default TodoList