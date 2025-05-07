import React from "react";
import { BiEdit, BiSave } from "react-icons/bi";
import { FaArchive, FaEdit } from "react-icons/fa";
import TableLoading from "../../../../partials/spinners/TableLoading";
import ServerError from "../../../../partials/ServerError";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";

const SettingsCategoryList = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      <div className="relative rounded-md overflow-auto z-0">
        <FetchingSpinner />
        <div className="overflow-auto max-h-[70dvh]">
          <table>
            <thead>
              <tr>
                <th className="w-[3rem]">#</th>
                <th className="w-[]">Status</th>
                <th className="w-[]">Name</th>
                <th className="w-[]">Description</th>
                <th colSpan="100%"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td colSpan="100%">
                  <TableLoading cols={2} count={20} />
                </td>
              </tr>
              <tr className="text-center">
                <td colSpan="100%">
                  <ServerError />
                </td>
              </tr>

              <tr className="group relative">
                <td>1.</td>
                <td>
                  <span className="text-green-600">Active</span>
                </td>
                <td>Feeding Program</td>
                <td className="max-w-[6rem] truncate">
                  Weekly Development Program ipsum dolor sit amet, consectetur
                  adipisicing elit. Sequi perspiciatis eum doloribus aliquam
                  ipsa id? Eaque dicta provident aliquid libero.
                </td>
                <td colSpan="100%">
                  <div className="flex gap-x-3 items-center justify-end pr-1">
                    <button
                      type="button"
                      className=" tooltip-action-table"
                      data-tooltip="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      type="button"
                      className=" tooltip-action-table"
                      data-tooltip="Archive"
                    >
                      <FaArchive />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="group relative">
                <td>2.</td>
                <td>
                  <span className="text-green-600">Active</span>
                </td>
                <td>Feeding Program</td>
                <td className="max-w-[6rem] truncate">
                  Weekly Development Program ipsum dolor sit amet, consectetur
                  adipisicing elit. Sequi perspiciatis eum doloribus aliquam
                  ipsa id? Eaque dicta provident aliquid libero.
                </td>
                <td colSpan="100%">
                  <div className="flex gap-x-3 items-center justify-end pr-1">
                    <button
                      type="button"
                      className=" tooltip-action-table"
                      data-tooltip="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      type="button"
                      className=" tooltip-action-table"
                      data-tooltip="Archive"
                    >
                      <FaArchive />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="group relative">
                <td>3.</td>
                <td>
                  <span className="text-green-600">Active</span>
                </td>
                <td>Feeding Program</td>
                <td className="max-w-[6rem] truncate">
                  Weekly Development Program ipsum dolor sit amet, consectetur
                  adipisicing elit. Sequi perspiciatis eum doloribus aliquam
                  ipsa id? Eaque dicta provident aliquid libero.
                </td>
                <td colSpan="100%">
                  <div className="flex gap-x-3 items-center justify-end pr-1">
                    <button
                      type="button"
                      className=" tooltip-action-table"
                      data-tooltip="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      type="button"
                      className=" tooltip-action-table"
                      data-tooltip="Archive"
                    >
                      <FaArchive />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SettingsCategoryList;
