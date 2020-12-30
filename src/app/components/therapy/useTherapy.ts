import { useLocation } from 'react-router-dom';
import { MuscleExerciseGifs } from 'app/dictionaries/muscleExerciseGifs';
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    analytics: any;
  }
}

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
  const area: string = query.get('area')!;
  const exercises: string[] = query.get('exercises')!.split(',');
  const exerciseList = getExerciseList(exercises);
  const [selectedExercise, setSelectedExercise] = useState(exerciseList[0]);

  useEffect(() => {
    window.analytics.track('Therapy Viewed', {
      area,
      exercises,
    });
  }, [area, exercises]);

  return {
    exerciseList,
    selectedExercise,
    setSelectedExercise,
  };
};
