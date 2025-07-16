"use client";

import React, { useState, useMemo } from "react";

export type RawQuickLink = {
  id: number;
  title: string;
  url: string;
  campus: string;
};

export type QuickLinksTableProps = {
  className?: string;
  rawLinks: RawQuickLink[];
};

const ITEMS_PER_PAGE = 15;

const QuickLinksTable: React.FC<QuickLinksTableProps> = ({
  className = "",
  rawLinks,
}) => {
  // State Management: Control search and pagination with React state
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Derived Data: Filter and sort the links based on state
  const filteredLinks = useMemo(() => {
    if (!rawLinks) return [];
    return rawLinks.filter(
      (link) =>
        link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.campus.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [rawLinks, searchTerm]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredLinks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedLinks = filteredLinks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className={className}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="pb-2 m-0">Internal Quick Links</h3>
        {/* Search Input Field */}
        <div className="w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search links..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on new search
            }}
          />
        </div>
      </div>

      <div className="table-responsive">
        <table id="qlinkTable" className="table table-striped table-hover">
          <thead className="bg-primary text-white">
            <tr>
              <th scope="col" className="w-60">
                Title
              </th>
              <th scope="col" className="w-25">
                Campus
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedLinks.map((link) => (
              <tr key={link.id}>
                <td className="align-top">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-bold"
                  >
                    {link.title}
                  </a>
                </td>
                <td className="align-top">{link.campus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span>
          Showing {startIndex + 1} to {startIndex + paginatedLinks.length} of{" "}
          {filteredLinks.length}
        </span>
        <nav>
          <ul className="pagination mb-0">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default QuickLinksTable;
