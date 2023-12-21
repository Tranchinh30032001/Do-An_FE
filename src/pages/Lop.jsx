import React, { useEffect, useState } from "react";
import BasicTable from "../components/BasicTable";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../store/slice/stateSlice";
import { lopData } from "../data/dataLop";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import useSelection from "antd/es/table/hooks/useSelection";
import { setActive, setAddSuccess } from "../store/slice/activeSlice";
import { instanceAxios } from "../services/axios";

const COLUMNS = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "lop_id",
    header: "Lớp ID",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "ten_lop",
    header: "Tên Lớp",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "thao_tac",
    header: "Thao Tác",
    cell: () => {
      return (
        <div className="flex items-center gap-6">
          <FaEdit className="w-6 h-6 cursor-pointer" />
          <FaTrashAlt className="w-6 h-6 cursor-pointer" />
        </div>
      );
    },
  },
];

function Lop() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { addSuccess } = useSelector((state) => state.active);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await instanceAxios.get("http://localhost:3055/api/v1/qldt/all-class");
        if (res.data.message === "OK") {
          setData(res.data.metadata.allClass);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch(setAddSuccess(false));
      }
    };
    fetch();
  }, [addSuccess]);

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
        <Button onClick={handleClick} name="Thêm Lớp" className="bg-green-500 rounded-lg my-2">
          <FaPlus />
        </Button>
      </div>
      {data?.length > 0 && <BasicTable COLUMNS={COLUMNS} DATA={data} />}
    </div>
  );
}

export default Lop;
