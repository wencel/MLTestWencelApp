import { createSelector } from 'reselect';

const itemSelectorState = state => state.item;

export const itemsSelector = createSelector(itemSelectorState, state => {
  return state.items;
});

export const selectedItemSelector = createSelector(itemSelectorState, state => {
  return state.selectedItem;
});
