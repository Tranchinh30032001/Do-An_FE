import React from "react";
import BasicTable from "../components/BasicTable";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setState } from "../store/slice/stateSlice";

function Lop() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      setState({
        isOpen: true,
        bodyType: "ADD_LOP",
        title: "Form Thêm Lớp",
      })
    );
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={handleClick} name="Thêm Lớp" className="bg-green-500 rounded-lg my-4">
          <FaPlus />
        </Button>
      </div>
      <BasicTable />
    </div>
  );
}

export default Lop;
