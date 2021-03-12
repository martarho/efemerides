export interface Area {
    id: number;
    name: string;
    location: string;
    area_type: string;
}

export interface AreasData {
    areas: Area[];
}