import { useDispatch, useSelector } from 'react-redux/es/exports';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((store) => store.category);
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="button" onClick={handleClick} className="status">Check Status</button>
      <h1>{status}</h1>
    </>

  );
}

export default Categories;
