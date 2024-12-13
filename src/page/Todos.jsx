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
    const [value, setValue] = React.useState({title: "", created_by: "", description: ""});

    const fetchAndSetTodos = async (pageNo) => {
        try {
          
            const data = await fetchTodos(pageNo, 10);

            setTodosData(data);
          
        } catch (e) {
           console.log(e)
        }

    };


    const handleTab = (value) => {
        setSelectedTab(value)
    }

    React.useEffect(() => {
        fetchAndSetTodos();
    }, []);

    if (!todosData) {
        return <Loader />
    }
    return (
        <div style={{padding: "16px"}}>
            <Tabs
                onChange={handleTab}
                tabData={[{ label: "Create Todo", value: "create_todo" }, { label: "Todo List", value: "todo_list" }]}
                selectedTab={selectedTab}
            />
            {
              selectedTab === "create_todo" ? <CreateTodo handleTab={handleTab} setTodoId={setTodoId} value={value} setValue={setValue} todoId={todoId} fetchAndSetTodos={fetchAndSetTodos} /> : <TodoList handleTab={handleTab} setValue={setValue} setTodoId={setTodoId} fetchAndSetTodos={fetchAndSetTodos} todosData={todosData}/>
            }
        </div>
    )
}

export default Todos