export class CardModel {
    image: string;
    title: string;
    content: string;
    gits?: LinkModel[];
    link?: string;
    src?:string;
    git?: string;
    icon: string[];

}

export class LinkModel{
    title: string;
    url: string;
}