import { createSelector } from 'reselect';

const newCartCount = newCartItems.reduce((pv, cv) => pv + cv.quantity, 0);

const newCartTotal = newCartItems.reduce(
  (pv, cv) => pv + cv.quantity * cv.price,
  0
);
