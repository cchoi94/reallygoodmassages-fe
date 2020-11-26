import { useLocation } from 'react-router-dom';
import { MuscleExerciseGifs } from 'app/dictionaries/therapyGifs';

interface GifList {
  exercise: string;
  gif: string;
}

const useQuery = () => new URLSearchParams(useLocation().search);

const getGifList = (exercises: string[]) =>
  exercises.map<GifList>(exercise => ({
    exercise,
    gif: MuscleExerciseGifs[exercise],
  }));

export const useTherapy = () => {
  const query = useQuery();
  const exercises: string[] = query.get('exercises')!.split(',');
  const gifList = getGifList(exercises);
  return {
    gifList,
  };
};
