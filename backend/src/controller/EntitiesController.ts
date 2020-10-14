import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Entity from '../models/Entities';
import entitiesView from '../views/entities_view';
import * as Yup from 'yup';

class EntitiesController {
    public async index(req: Request, res: Response): Promise<Response> {
        const entitiesRepository = getRepository(Entity);
        const entities = await entitiesRepository.find({
            relations: ['images'],
        });

        return res.status(200).json(entitiesView.renderMany(entities));
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const entitiesRepository = getRepository(Entity);
        const entity = await entitiesRepository.findOneOrFail(id, {
            relations: ['images'],
        });

        return res.status(200).json(entitiesView.render(entity));
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            offered_works,
            opening_hours,
            open_on_weekends,
        } = req.body;

        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map(image => ({
            path: image.filename,
        }));

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            offered_works,
            opening_hours,
            open_on_weekends,
            images,
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            offered_works: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required(),
                }),
            ),
        });

        await schema.validate(data, { abortEarly: false });

        const entitiesRepository = getRepository(Entity);
        const entity = entitiesRepository.create(data);
        await entitiesRepository.save(entity);

        return res.status(201).json(entity);
    }
}

export default new EntitiesController();