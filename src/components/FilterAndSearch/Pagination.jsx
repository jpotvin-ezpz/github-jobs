import React from "react";

const Paginate = ({ setCurrentPage, currentPage, maxPages }) => {

  const handleSubCurrentPage = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  }
  const handleAddCurrentPage = () => {
    if (currentPage >= maxPages - 1) return;
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="paginate--wrapper">
      <button 
        className="pag-btn"
        onClick={() => handleSubCurrentPage()}  
      >
        <span className="material-icons">chevron_left</span>
      </button>
      <button className="pag-btn">
        {currentPage + 1}
      </button>
      <button 
        className="pag-btn"
        onClick={() => handleAddCurrentPage()}  
      >
        <span className="material-icons">chevron_right</span>
      </button>
    </div>
  );
};

export default Paginate;
