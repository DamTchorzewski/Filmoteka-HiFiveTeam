import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export const setPagination = (totalItems, refs) => {
  const options = {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
  };

  const pagination = new Pagination(refs.pagination, options);

  return pagination;
};