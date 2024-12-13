import React from 'react'
import { createTodo, updateTodo } from "../fetch/todo";
// import Toaster from './Toaster';
import Button from './Button';
import Input from './Input';

const inputStyle = `
    .input__wrapper {
     display: flex;
     align-items: center;
     justify-content: space-between;
    }
`

const CreateTodo = ({ fetchAndSetTodos, todoId, value, setValue, setTodoId, handleTab}) => {

    const handleChange = (e) => {
        setValue({...value, [e.target.name]:e.target.value});
    };

    const handleClick = async () => {
        await createTodo({...value, is_completed: false, is_editable: false });
        setValue("");
        fetchAndSetTodos();
        handleTab("todo_list")
    };

    const handleEditClick = async () => {
        await updateTodo({ id: todoId, ...value, is_editable: true, is_completed: false });
        setValue("");
        setTodoId(null);
        fetchAndSetTodos();
        handleTab("todo_list")
    };


    return (
        <>
          <style>
            {inputStyle}
          </style>
            {/* <Toaster /> */}
            <h4 style={{ textAlign: "center" }}>CREATE TODO</h4>
            {/* <div className='input__wrapper'> */}
                <Input
                    title="Enter Topic"
                    value={value.title}
                    onChange={handleChange}
                    style={{ height: "30px", display: "block" }}
                    placeholder='Enter topic'
                    name="title"

                />
                <Input
                    title="Created By"
                    value={value.created_by}
                    onChange={handleChange}
                    style={{ height: "30px", display: "block" }}
                    placeholder='Enter your name'
                    name="created_by"
                />
      
            {/* </div> */}
            <Input
                    title="Description"
                    RenderAs='textarea'
                    value={value.description}
                    onChange={handleChange}
                    placeholder='Description'
                    style={{  display: "block" }}
                    rows="5"
                    cols="33"
                    name="description"
                />
            {todoId ? (
                <Button
                    title="Edit"
                    onClick={handleEditClick}
                    disabled={false}
                />

            ) : (
                <Button
                    title="Add"
                    onClick={handleClick}
                    disabled={false}
                />

            )}
        </>
    )
}

export default CreateTodo