import { Tema } from "./tema";
import { Usuario } from "./usuario";

export class Postagem{
    public id: number;
    public titulo: string;
    public texto: string;
    public date: Date;
    public usuario: Usuario;
    public tema: Tema;

}