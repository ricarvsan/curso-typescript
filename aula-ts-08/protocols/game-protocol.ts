export type Game = {
    id: number;
    platform:Plataform;
    title: string;
    publisher: string;
    launch?: string | Date;
}

type Plataform = {
    id: number;
    name: string;
}