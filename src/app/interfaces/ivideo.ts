export interface IVideo {
    name: string;
    description: string;
    type: string;
    duration: number;
    width: number;
    height: number;
    embed: Embed;
    pictures: Picture[];
    tags: Tag[];
}

export interface Embed {
    html: string;
}

export interface Picture {
    sizes: Size[];
}

export interface Size {
    width: number;
    height: number;
    link: string;
    link_with_play_button: string;
}

export interface Tag {
    canonical: string;
}
