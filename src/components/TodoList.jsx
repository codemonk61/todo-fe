import React from 'react'
import Pagination from './Pagination'
import { completedTodo, deleteTodo } from '../fetch/todo';
import Loader from './Loader';

const styles = `
    .arrow__up {
     transform: rotate(90deg);
     cursor: pointer;
     color: gray
    }

     .arrow__down {
     transform: rotate(270deg);
      cursor: pointer;
      color: gray
    }
    .heading {
     text-align: center
    }
    .todo {
        border-bottom: 1px solid lightgray;
        padding: 16px;
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: space-between;
    }
    .title__wrapper{
        display: flex
    }
    .accordian__arrow{ 
      line-height: 16px;
      text-align: center;
      display: block;
    }
    .input__style{
        appearance: none;
    }
    .cut__line{
        text-decoration: line-through;
    }
    .desc__wrapper { 
     display: flex;
     flex-direction: column;
     gap: 16px;
     padding: 12px 20px;
    }
    .desc{ 
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .edit{
        cursor: pointer;
        color: #609cff;
        font-size: 18px;
    }
    .remove{
        margin-left: 12px;
        color: #609cff;
        cursor: pointer;
        fontSize: 18px;
    }
    .created__by{ 
        color: lightgray;
        align-self: flex-end;
     }
`

const TodoList = ({ pageNo, handleTab, fetchAndSetTodos, todosData = {}, setTodoId, setValue }) => {

    const [arrowStatus, setArrowStatus] = React.useState("")
    const [toggle, setToggle] = React.useState(false)
    const [isLoading, setIsloading] = React.useState(false)
    const handleComplete = async (todo) => {
        try {
            setIsloading(true)
            await completedTodo({ id: todo._id, title: todo.title, is_completed: !todo.is_completed, is_editable: todo.is_editable });
            fetchAndSetTodos(pageNo, 10);
            setIsloading(false)
        } catch (e) {
            setIsloading(false)
        }

    };

    const handleClose = async (todo) => {
        try {
            setIsloading(true)
            await deleteTodo(todo);
            fetchAndSetTodos(pageNo, 10);
            setIsloading(false)
        } catch (e) {
            setIsloading(false)
        }

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

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <style>
                {styles}
            </style>
            <h4 className='heading'>NOTES LIST</h4>
            <div >
                {todosData.todos.map((todo, index) => (
                    todo.title && (
                        <React.Fragment key={todo._id}>
                            <div className='todo'>
                                <div className='title__wrapper'>
                                    <label htmlFor={`check__${index}`}>
                                        <span
                                            style={{
                                                cursor: "pointer",
                                                color: todo.is_completed ? "white" : "black",
                                                background: todo.is_completed ? "#609cff" : "white",
                                                borderRadius: "2px",
                                                display: "block",
                                                height: "16px",
                                                width: "16px",
                                                border: "1px solid lightgray",
                                            }}
                                            className='checkbox'
                                        >
                                            {todo.is_completed && (
                                                <span className='accordian__arrow'>
                                                    &#10004;
                                                </span>
                                            )}
                                        </span>
                                    </label>
                                    <input
                                        id={`check__${index}`}
                                        type="checkbox"
                                        onClick={() => handleComplete(todo)}
                                        className='input__style'
                                    />
                                    <span className={todo.is_completed ? 'cut__line': null}>{todo.title}</span>
                                </div>
                                <div className={(todo._id === arrowStatus && toggle) ? 'arrow__up' : "arrow__down"} onClick={() => handleDropDown(todo._id)}>
                                    &#10094;
                                </div>
                            </div>
                            {(toggle && todo._id === arrowStatus) && <div className='desc__wrapper'>
                                <div className='desc'>
                                    <div>
                                        {todo.description}
                                    </div>
                                    <div>
                                        <span
                                            className='edit'
                                            onClick={() => handleEdit(todo)}
                                        >
                                            &#9998;
                                        </span>
                                        <span
                                            className='remove'
                                            onClick={() => handleClose(todo)}
                                        >
                                            &#10006;
                                        </span>
                                    </div>
                                </div>
                                <p className='created__by'>Created By: {todo.created_by}</p>
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