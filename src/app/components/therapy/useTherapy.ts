import { MuscleExerciseGifs } from 'app/dictionaries/muscleExerciseGifs';
import { useState, useEffect, useCallback } from 'react';
import { useQuery } from 'app/utils/useQuery';
import { RootState } from 'app/redux/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'app/requests/axiosInstance';
import { getUserInfo } from 'app/redux/actions/userAction';
import { find } from 'lodash/fp';

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
  const location = useLocation();
  const dispatch = useDispatch();
  const area: string = query.get('area')!;
  const exercises: string[] = query.get('exercises')!.split(',');
  const exerciseList = getExerciseList(exercises);
  const [selectedExercise, setSelectedExercise] = useState(exerciseList[0]);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const { id: userId, cognitoId, favoriteMassages } = useSelector(
    (state: RootState) => state.user
  );
  const currentMassage: { name?: string; id?: number } =
    find(['link', location.search], favoriteMassages) || {};

  const favoriteMassage = () => {
    if (isFavorited) {
      Swal.fire({
        title: `Delete massage ${currentMassage.name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async result => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`/massages/${currentMassage.id}`);
            dispatch(getUserInfo(cognitoId));
            Swal.fire('Deleted!', 'Massage has been deleted.', 'success');
          } catch (err) {
            console.log(err);
          }
        }
      });
    } else {
      Swal.fire({
        title: 'Enter a name for this massage',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Save',
        showLoaderOnConfirm: true,
        preConfirm: async name => {
          const massage = {
            name: name !== '' ? name : 'no name massage',
            link: location.search,
            userId,
          };
          try {
            await axios.post(`/massages`, massage);
          } catch (err) {
            console.log(err);
          }
          dispatch(getUserInfo(cognitoId));
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then(result => {
        if (result.isConfirmed) {
          Swal.fire('Massage Saved!', '', 'success');
        }
      });
    }
  };

  const isTherapyFavourited = useCallback(() => {
    const isFavoriteMassage = favoriteMassages.map(
      ({ link }) => link === location.search
    );
    setIsFavorited(isFavoriteMassage.length > 0);
  }, [favoriteMassages, location]);

  useEffect(() => {
    window.analytics.track('Therapy Viewed', {
      area,
      exercises,
    });
    isTherapyFavourited();
  }, [area, exercises, isTherapyFavourited]);

  return {
    exerciseList,
    selectedExercise,
    setSelectedExercise,
    isFavorited,
    favoriteMassage,
  };
};
