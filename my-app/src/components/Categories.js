import { useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="button" onClick={handleClick} className="status">Check Status</button>
    </>
  );
}

export default Categories;
