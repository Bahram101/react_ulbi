import React from "react";
import { getPagesArray } from "../../../utils/pages";

export const Pagination = ({ totalPages, changePage, page }) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="page__wrapper">
            {pagesArray?.map((p) => (
                <span
                    onClick={() => changePage(p)}
                    className={page === p ? " page__current" : "page"}
                    key={p}
                >
                    {p}
                </span>
            ))} 
        </div>
    );
};
