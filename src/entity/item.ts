import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class item {

    @PrimaryGeneratedColumn()
    id: number;

}
