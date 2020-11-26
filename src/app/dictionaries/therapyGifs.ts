import { Muscles } from './muscles';
import { BodyParts } from './bodyParts';
import Sternocleidomastertoid from 'app/assets/images/exercises/sternocleidomastertoid.svg';

export const TherapyGifs = {
  [BodyParts.NECK]: [Muscles.STERNOCLEIDOMASTERTOID],
};

export const MuscleExerciseGifs: any = {
  [Muscles.STERNOCLEIDOMASTERTOID]: {
    gif: 'https://streamable.com/e/i2wph9?autoplay=1',
    thumbnail: Sternocleidomastertoid,
  },
};
