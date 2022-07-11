import {v4 as uuidV4} from "uuid";

export const todosArray = [
    {
        id: uuidV4(),
        text: "Go To The Gym",
        isCompleted : false,
        editState: false,

    },
    {
        id: uuidV4(),
        text: "Do The Laundry",
        isCompleted: false,
        editState: false,
    },
    {
        id: uuidV4(),
        text: "Go Grocery Shopping",
        isCompleted: false,
        editState: false,
    },
    {
        id: uuidV4(),
        text: "Complete React Course",
        isCompleted: false,
        editState: false,
    }
];