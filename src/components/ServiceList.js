import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchServicesRequest } from '../actions/actionCreators';
import spinner from '../img/Spiner-circle-red.svg';

export default function ServiceList() {
  const { items, loading, error } = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchServicesRequest());
  };

  if (loading) {
    return (
      <div className="service-list">
        <div className="service-list__spinner">
          <img src={spinner} alt="spinner" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="service-list">
        <div className="service-list__error">
          Произошла ошибка!
          <button onClick={handleRetry}>Повторить запрос</button>
        </div>
      </div>
    );
  }

  return (
    <div className="service-list">
      <ul className="service-list__list">
        {items.map((item) => (
          <Link to={`/services/${item.id}/details`} className="service-list__link" key={item.id} >
            <li className="service-list__item">
              <div className="service-list__container"> {item.name}: {item.price.toLocaleString()} руб.</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
