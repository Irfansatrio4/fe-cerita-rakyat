import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination({
  currentPage,
  setCurrentPage,
  hasNext,
  hasPrev,
  totalPages,
  show,
}) {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const onNextPage = () => setCurrentPage(currentPage + 1);
  const onPrevPage = () => setCurrentPage(currentPage - 1);
  const onPageSelect = (selectedPage) => setCurrentPage(selectedPage);

  useEffect(() => {
    if (hasNext) setCanGoNext(true);
    else setCanGoNext(false);
    if (hasPrev) setCanGoBack(true);
    else setCanGoBack(false);
  }, [hasNext, hasPrev]);

  if (show)
    return (
      <div className="flex justify-between pt-4 bg-gray-100 pr-6">
        <div className="">
          Halaman <strong>{currentPage}</strong> dari{" "}
          <strong>{totalPages}</strong>
        </div>
        <div>
          <button
            className="cursor-pointer mr-3"
            onClick={() => {
              onPageSelect(1);
            }}
            disabled={!canGoBack}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
          <button
            onClick={() => onPrevPage()}
            disabled={!canGoBack}
            className="cursor-pointer"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <input
            type="number"
            className="bg-gray-100 text-center "
            value={currentPage}
            min={1}
            max={totalPages}
            onChange={(e) => {
              if (e.target.value > totalPages) {
                onPageSelect(totalPages);
              } else {
                onPageSelect(parseInt(e.target.value, 10));
              }
            }}
          />
          <button
            onClick={() => onNextPage()}
            disabled={!canGoNext}
            className="cursor-pointer "
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button
            onClick={() => {
              onPageSelect(totalPages);
            }}
            disabled={!canGoNext}
            className="cursor-pointer ml-3"
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </div>
      </div>
    );
}

Pagination.defaultProps = {
  show: true,
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  totalPages: PropTypes.number,
  show: PropTypes.bool,
};
