import {api} from "../../axios";
import {ITasks} from "../../interfaces/tasks.interface";

export const getTasks = () => {
    return api.get('/tasks');
};

export const addTask = (params: ITasks) => {
    return api.post('/tasks', params);
};

export const toggleTask = (params: { id: number; done: boolean; }) => {
    return api.patch(`/tasks/${params.id}`, params.done);
};
