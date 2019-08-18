/* (Q_N0.1)
  @function shiftArrayElements rtates an array by N positions.
  @param Input Array (arr) whose elements needs to be shifted
  @param positionsToShift indicates number of positions to be shifted
  @return An array with elements shifted as per the input param
*/
function shiftArrayElements(arr, positionsToShift=0) {
  let toBeshiftedElements = arr.splice(-positionsToShift);
  arr.unshift(...toBeshiftedElements);
  return arr;
}