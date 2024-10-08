import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from 'typeorm';

import Image from './Images';

@Entity('entities')
export default class Entities {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    offered_works: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: string;

    @OneToMany(() => Image, image => image.entity, {
        cascade: ['insert', 'update'],
    })
    @JoinColumn({ name: 'entity_id' })
    images: Image[];

}