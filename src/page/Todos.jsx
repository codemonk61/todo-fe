import React from 'react'
import CreateTodo from '../components/CreateTodo';
import TodoList from '../components/TodoList';
import Loader from '../components/Loader';
import { fetchTodos } from '../fetch/todo';
import Tabs from '../components/Tabs';

const Todos = () => {

    const [todosData, setTodosData] = React.useState(null);
    const [selectedTab, setSelectedTab] = React.useState("todo_list")
    const [todoId, setTodoId] = React.useState(null);
    const [value, setValue] = React.useState({ title: "", created_by: "", description: "" });
    const [loading, setLoading] = React.useState(false)
    const [pageNo, setPageNo] = React.useState(1)

    const fetchAndSetTodos = async (pageNo) => {
        setPageNo(pageNo)
        try {
            setLoading(true)
            const data = await fetchTodos(pageNo, 10);
            setTodosData(data);
            setLoading(false)

        } catch (e) {
            console.log(e)
            setLoading(false)
        }

    };


    const handleTab = (value) => {
        setSelectedTab(value)
    }

    React.useEffect(() => {
        fetchAndSetTodos(pageNo, 10);
    }, []);

    if (!todosData || loading) {
        return <>
            <Tabs
                onChange={handleTab}
                tabData={[{ label: "Create Todo", value: "create_todo" }, { label: "Todo List", value: "todo_list" }]}
                selectedTab={selectedTab}
            />
            <Loader />
        </>
    }
    return (
        <>
            <Tabs
                onChange={handleTab}
                tabData={[{ label: "Create Todo", value: "create_todo" }, { label: "Todo List", value: "todo_list" }]}
                selectedTab={selectedTab}
            />
            {
                selectedTab === "create_todo" ? <CreateTodo pageNo={pageNo} handleTab={handleTab} setTodoId={setTodoId} value={value} setValue={setValue} todoId={todoId} fetchAndSetTodos={fetchAndSetTodos} /> : <TodoList pageNo={pageNo} handleTab={handleTab} setValue={setValue} setTodoId={setTodoId} fetchAndSetTodos={fetchAndSetTodos} todosData={todosData} />
            }
        </>
    )
}

export default Todos