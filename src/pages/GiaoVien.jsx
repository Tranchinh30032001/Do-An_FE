import React from "react";
import { useDispatch } from "react-redux";
import { setState } from "../store/slice/stateSlice";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import BasicTable from "../components/BasicTable";

function GiaoVien() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      setState({
        isOpen: true,
        bodyType: "ADD_GIAOVIEN",
        title: "Form Thêm Giáo Viên",
      })
    );
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={handleClick} name="Thêm Giáo Viên" className="bg-green-500 rounded-lg my-4">
          <FaPlus />
        </Button>
      </div>
      <BasicTable />
    </div>
  );
}

export default GiaoVien;
