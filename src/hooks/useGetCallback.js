import { ActionTypes } from '../redux/todoReducer';
import getUniqID from '../utils/getUniqID';
import { useDispatch, useSelector } from 'react-redux';

const useGetCallback = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleAddTask = (taskText) => {
    dispatch({ type: ActionTypes.add, payload: { task: taskText, status: false, id: getUniqID() } });
  };

  const handleCleanTasks = () => {
    dispatch({ type: ActionTypes.clean, payload: [] });
  };

  const handleChangeStatus = (id) => {
    const updState = [...state];
    const currTask = updState.find((t) => t.id === id);
    currTask.status = !currTask.status;
    dispatch({ type: ActionTypes.status, payload: updState });
  };

  return { handleAddTask, handleCleanTasks, handleChangeStatus };
};

export default useGetCallback;
