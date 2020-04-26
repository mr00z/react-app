import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Pagination = ({ pagesCount, onPageClick, currentPage, itemsInTheMiddleCount }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;

  const items = new Array(itemsInTheMiddleCount).fill();

  let sideItemsCount = Math.floor(itemsInTheMiddleCount / 2);

  const shouldRenderFirstEllipsis = currentPage - sideItemsCount > 1;
  const shouldRenderLastEllipsis = currentPage + sideItemsCount < pagesCount;

  if (shouldRenderFirstEllipsis) items.pop();
  if (shouldRenderLastEllipsis) items.pop();

  if (shouldRenderFirstEllipsis && shouldRenderLastEllipsis) sideItemsCount -= 1;

  return (
    <div className="pagination is-centered" role="navigation" aria-label="pagination">
      <a className="pagination-previous" onClick={() => onPageClick(currentPage - 1)} disabled={isFirstPage}>
        Previous
      </a>
      <a className="pagination-next" onClick={() => onPageClick(currentPage + 1)} disabled={isLastPage}>
        Next page
      </a>
      <ul className="pagination-list">
        {shouldRenderFirstEllipsis && (
          <>
            <li>
              <a
                className="pagination-link"
                aria-label="Goto page 1"
                onClick={() => onPageClick(1)}
                disabled={isFirstPage}
              >
                1
              </a>
            </li>
            <Ellipsis />
          </>
        )}
        {items.map((element, index) => {
          let pageIndex = currentPage - sideItemsCount + index;
          if (!shouldRenderFirstEllipsis) pageIndex = Math.max(currentPage - sideItemsCount, 1) + index;
          if (!shouldRenderLastEllipsis)
            pageIndex = Math.min(currentPage - sideItemsCount + 1, pagesCount - (items.length - 1)) + index;
          return (
            <li key={index}>
              <a
                className={clsx('pagination-link', {
                  'is-current': pageIndex === currentPage,
                })}
                aria-label="Goto page 1"
                onClick={() => onPageClick(pageIndex)}
              >
                {pageIndex}
              </a>
            </li>
          );
        })}
        {shouldRenderLastEllipsis && (
          <>
            <Ellipsis />
            <li>
              <a
                className="pagination-link"
                aria-label={`Goto page ${pagesCount}`}
                onClick={() => onPageClick(pagesCount)}
                disabled={isLastPage}
              >
                {pagesCount}
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

const Ellipsis = () => (
  <li>
    <span className="pagination-ellipsis">&hellip;</span>
  </li>
);

Pagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  onPageClick: PropTypes.func,
  currentPage: PropTypes.number.isRequired,
  itemsInTheMiddleCount: PropTypes.number,
};

export default Pagination;
