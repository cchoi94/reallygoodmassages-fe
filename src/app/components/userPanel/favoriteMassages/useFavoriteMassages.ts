import { useState } from 'react';
import axios from 'app/requests/axiosInstance';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/redux/rootReducer';
import { getUserInfo } from 'app/redux/actions/userAction';

export const useFavoriteMassages = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(true);
  const { cognitoId } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const editMassage = async (id: number) => {
    Swal.fire({
      title: 'Enter massage name',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Save',
      showLoaderOnConfirm: true,
      preConfirm: async name => {
        try {
          await axios.put(`/massages/${id}`, {
            name,
          });
          dispatch(getUserInfo(cognitoId));
        } catch (err) {
          console.log(err);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Massage name changed!', '', 'success');
        dispatch(getUserInfo(cognitoId));
      }
    });
  };

  const deleteMassage = async (id: number, name: string) => {
    Swal.fire({
      title: `Delete massage ${name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/massages/${id}`);
          dispatch(getUserInfo(cognitoId));
          Swal.fire('Deleted!', 'Massage has been deleted.', 'success');
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  return {
    isAccordionOpen,
    setIsAccordionOpen,
    editMassage,
    deleteMassage,
  };
};
