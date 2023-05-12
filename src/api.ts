import axios from 'axios';

const api = axios.create ({
    baseURL: 'http://localhost:3000',
    timeout: 3000,
})

export async function getAll () {
    const tasks = await api.get('tasks');
    return tasks.data
}

export async function getById (id:number) {
    const tasks = await api.get(`tasks/${id}`)
    return tasks.data
}

export async function save () {
    const tasks = await api.get(`tasks/, {
        ...task
    }`)
    return tasks.data
}

export async function update (id:number) {
    const response = await api.get(`tasks/${id}`)
    return response.data
}

export async function exclude (id:number) {
    const tasks = await api.get(`tasks/${id}`)
    return tasks.data
}

