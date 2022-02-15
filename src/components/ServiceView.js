import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getServiceRequest } from '../actions/actionCreators';
import spinner from '../img/Spiner-circle-red.svg';

export default function ServiceView() {
  const { item, loading, error } = useSelector((state) => state.serviceView);
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(getServiceRequest(id));
  }, [dispatch, id]);

  const handleRetry = () => {
    dispatch(getServiceRequest(id));
  };

  if (loading) {
    return (
      <div className="service-view">
        <div className="service-view__spinner">
          <img src={spinner} alt="spinner" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="service-view">
        <div className="service-view__error">
          Произошла ошибка!
          <button onClick={handleRetry}>Повторить запрос</button>
        </div>
      </div>
    );
  }

  return (
    <div className="service-view">
      {item && (
        <div>
          <div className="service-view__label">Название</div>
          <div>{item.name}</div>
          <div className="service-view__label">Цена </div>
          <div>{item.price.toLocaleString()} руб.</div>
          <div className="service-view__label">Описание</div>
          <div>{item.content}</div>
          <Link to="/services" className="service-view__link">Назад</Link></div>
      )}
    </div>
  );
}
