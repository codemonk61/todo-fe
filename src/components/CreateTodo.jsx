import React from 'react'
import { createTodo, updateTodo } from "../fetch/todo";
// import Toaster from './Toaster';
import Button from './Button';
import Input from './Input';
import Loader from './Loader';

const inputStyle = `
    .input__wrapper {
     display: flex;
     align-items: center;
     justify-content: space-between;
    }
    .heading {
     text-align: center
    }
`

const CreateTodo = ({ pageNo, fetchAndSetTodos, todoId, value, setValue, setTodoId, handleTab }) => {

    const [loading, setLoading] = React.useState(false)
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleClick = async () => {
        try {
            setLoading(true)
            await createTodo({ ...value, is_completed: false, is_editable: false });
            setValue("");
            fetchAndSetTodos(pageNo, 10);
            handleTab("todo_list")
            setLoading(false)
        } catch (e) {
            setLoading(false)
        }

    };

    const handleEditClick = async () => {
        try{
            setLoading(true)
            await updateTodo({ id: todoId, ...value, is_editable: true, is_completed: false });
            setValue("");
            setTodoId(null);
            fetchAndSetTodos(pageNo, 10);
            handleTab("todo_list")
            setLoading(false)
        } catch(e){
            setLoading(false)
        }
       
    };

    if(loading){
        return <Loader/>
    }

    const isDisable = Boolean(value.title && value.created_by && value.description)
    return (
        <>
            <style>
                {inputStyle}
            </style>
            <h4 className='heading'>CREATE NOTES</h4>
            <Input
                title="Enter Topic"
                value={value.title}
                onChange={handleChange}
                placeholder='Enter topic'
                name="title"

            />
            <Input
                title="Created By"
                value={value.created_by}
                onChange={handleChange}
                placeholder='Enter your name'
                name="created_by"
            />
            <Input
                title="Description"
                RenderAs='textarea'
                value={value.description}
                onChange={handleChange}
                placeholder='Description'
                rows="5"
                cols="33"
                name="description"
            />
            {todoId ? (
                <Button
                    title="EDIT"
                    onClick={handleEditClick}
                    disabled={false}
                />

            ) : (
                <Button
                    title="ADD"
                    onClick={handleClick}
                    disabled={isDisable}
                />

            )}
        </>
    )
}

export default CreateTodo