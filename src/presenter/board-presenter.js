import { render } from '../render.js';
import TripListView from '../view/trip-list-view.js';
import TripItemView from '../view/trip-item.js';
import EditFormView from '../view/edit-form-view.js';
import FilterButtonsView from '../view/filter-button-view.js';
import SortButtonsView from '../view/sort-button-view.js';

export default class BoardPresenter {
  editForm = new EditFormView();
  filterButtons = new FilterButtonsView();
  sortButtons = new SortButtonsView();
  tripList = new TripListView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;
    this.boardContainer.FilterButtons = document.querySelector('.trip-controls__filters');
    this.boardContainer.sortButtons = document.querySelector('.trip-events');

    render(this.filterButtons, this.boardContainer.FilterButtons);
    render(this.sortButtons, this.boardContainer.sortButtons);
    render(this.tripList, this.boardContainer.sortButtons);

    this.boardContainer.tripList = document.querySelector('.trip-events__list');

    render(this.editForm, this.boardContainer.tripList);

    for (let i = 0; i < 3; i++) {
      render(new TripItemView(), this.boardContainer.tripList);
    }
  };
}

