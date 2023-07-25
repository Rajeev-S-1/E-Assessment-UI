import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const Breadcrumb = () => {
  const navigate = useNavigate();
  const crumbsdata = useSelector(state=> state.crumbs);
  const onClickBreacCrumb = (path) => {
    navigate(path);
  };
  return (
    <div className="bg-white flex items-center justify-between text-sm text-[gray m-0 shadow-sm">
      <nav className="flex items-center p-2" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 pl-1">
          {crumbsdata?.map((list, index) => (
            <div
              onClick={() => onClickBreacCrumb(list.path)}
              className="inline-flex items-center"
              key={index}>
              <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white cursor-pointer">
                {index === 0 && (
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                )}
                <div className="pr-2">{list.name}</div>
              </div>
              {index !== crumbsdata.length - 1 && (
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              )}
            </div>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
