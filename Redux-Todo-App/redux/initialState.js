const initialState = {
    filter: "all",
    value: "",
    tasks: JSON.parse(localStorage.getItem('tasks')) || [
        { title: "task 01", isDone: true },
        { title: "task 02", isDone: false },
        { title: "task 03", isDone: true },
        { title: "task 04", isDone: false }
    ]
}

export default initialState