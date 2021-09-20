import { Tag } from "./Tag";

export interface Empresa {
    empresaId?: number;
    nombre: string;
    ruc: string;
    fecha_registro?: Date;
    tags?: Tag[];
}