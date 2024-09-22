export interface ICourse{
    id: number;
    description:string;
    lessonsCount:number;
    category:CategoryType;
    image:string;
}
export enum CategoryType{
    beginners=1,
    advanced=2
}