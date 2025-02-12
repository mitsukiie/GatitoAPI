export interface Command {
    name: string;
    description: string;
    new: boolean;
    usage: string;
    detail: string;
}

export interface Category {
    [category: string]: Command[];
}

export interface DataInterface {
    commands: Category[];
}