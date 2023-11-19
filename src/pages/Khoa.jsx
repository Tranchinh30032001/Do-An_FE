import React from "react";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import BasicTable from "../components/BasicTable";
import { useDispatch } from "react-redux";
import { setState } from "../store/slice/stateSlice";

function Khoa() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      setState({
        isOpen: true,
        bodyType: "ADD_KHOA",
        title: "Form Thêm Khoa",
      })
    );
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={handleClick} name="Thêm Khoa" className="bg-green-500 rounded-lg my-4">
          <FaPlus />
        </Button>
      </div>
      <BasicTable />
    </div>
  );
}

export default Khoa;
