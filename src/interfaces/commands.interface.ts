export interface Command {
    name: string;
    description: string;
    new: boolean;
    usage: string;
    detail: string;
}

export interface CommandCategory {
    [category: string]: Command[]; // A chave é o nome da categoria e o valor é uma lista de comandos
}

export interface CommandData {
    commands: CommandCategory[];
}