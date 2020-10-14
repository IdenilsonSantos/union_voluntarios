import Entity from '../models/Entities';
import imagesView from './images_view';

export default {
    render(entity: Entity) {
        return {
            id: entity.id,
            name: entity.name,
            latitude: entity.latitude,
            longitude: entity.longitude,
            about: entity.about,
            instructions: entity.instructions,
            offered_works: entity.offered_works,
            opening_hours: entity.opening_hours,
            open_on_weekends: entity.open_on_weekends,
            images: imagesView.renderMany(entity.images),
        };
    },

    renderMany(entity: Entity[]) {
        return entity.map(entity => this.render(entity));
    },
};