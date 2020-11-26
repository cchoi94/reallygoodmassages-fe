import { useLocation } from 'react-router-dom';
import { MuscleExerciseGifs } from 'app/dictionaries/therapyGifs';
import { useState } from 'react';

interface ExerciseList {
  name: string;
  thumbnail?: string;
  gif?: string;
}

const useQuery = () => new URLSearchParams(useLocation().search);

const getExerciseList = (exercises: string[]) =>
  exercises.map<ExerciseList>(exerciseName => {
    const muscleConfig = MuscleExerciseGifs[exerciseName];
    return {
      name: exerciseName,
      thumbnail: muscleConfig ? muscleConfig.thumbnail : '',
      gif: muscleConfig ? muscleConfig.gif : '',
    };
  });

export const useTherapy = () => {
  const query = useQuery();
  const exercises: string[] = query.get('exercises')!.split(',');
  const exerciseList = getExerciseList(exercises);
  const [selectedExercise, setSelectedExercise] = useState(exerciseList[0]);

  return {
    exerciseList,
    selectedExercise,
    setSelectedExercise,
  };
};
