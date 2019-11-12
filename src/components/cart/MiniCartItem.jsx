import React from 'react';

function MiniCartItem({ id, name, image, discountPrice, price, quantity, onDelete , onReduce, onAdd}) {
  return (
    <li>
      <div className="cart-img">
        <a href="#">
          <img src={image} alt={name} />
        </a>
      </div>
      <div className="cart-content">
        <h3>
          <a href="#">{name}</a>
        </h3>
        <div className="cart-price">
          <span className="new">${discountPrice}</span>
          <span>
            <del>${price}</del>
          </span>
          <span className="quantity">x {quantity}</span>
        </div>
      </div>
      <div className="del-icon">
        <a href="#" onClick={() => onAdd(id)}>
          <i className="fas fa-plus"/>
        </a>
        <a href="#" onClick={() => onReduce(id)}>
          <i className="fas fa-minus"/>
        </a>
        <a href="#" onClick={() => onDelete(id)}>
          <i className="far fa-trash-alt" />
        </a>
      </div>
    </li>
  );
}

export default MiniCartItem;
