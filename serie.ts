export class Serie {
    id: number;
    name: string;
    distributor: string;
    seasons: number;
    description: string;
    link: string;
    image: string;
        
    constructor(id: number, name: string, distributor: string, seasons: number, description: string, link: string, image: string) {
        this.id = id;
        this.name = name;
        this.distributor = distributor;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }

  }