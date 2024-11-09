{
//
type ToDo={
    task:string;
    completed:boolean;
    dueDate:string;
}

const requiredToDo:ToDo={
    task:"Buy milk",
    completed:false,
    dueDate:"2024-03-20"
}

// mapped type
type OptionalToDo={
    [T in keyof ToDo]?: ToDo[T];
}

const task :OptionalToDo={"task":"Buy eggs"}; 






//
}