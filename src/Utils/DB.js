export const DB = {
    getTasks() {
        if (localStorage.pomodoroTasks) {
            return JSON.parse(localStorage.pomodoroTasks)
        } else {
            return []
        }
    },

    saveTasks(tasks) {
        localStorage.setItem('pomodoroTasks', JSON.stringify(tasks))
    }
}