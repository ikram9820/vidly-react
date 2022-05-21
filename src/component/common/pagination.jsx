import _ from "lodash";
import Proptypes from "prop-types";

const Pagination = ({ pageSize, onPageChange, itemCount, currentPage }) => {
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a onClick={() => onPageChange(page)} className="page-link ">
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  pageSize: Proptypes.number.isRequired,
  onPageChange: Proptypes.func.isRequired,
  itemCount: Proptypes.number.isRequired,
  currentPage: Proptypes.number.isRequired,
};

export default Pagination;
