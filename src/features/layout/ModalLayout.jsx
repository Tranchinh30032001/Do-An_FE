import React from "react";
import { ModalType } from "../../utils/Modal";
import AddGiaoVien from "../Modal/AddGiaoVien";
import AddHoiThao from "../Modal/AddHoiThao";
import AddSinhVien from "../Modal/AddSinhVien";
import AddKhoa from "../Modal/AddKhoa";
import AddLop from "../Modal/AddLop";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "../../utils/cn";
import Button from "../../components/Button";
import { setClose } from "../../store/slice/stateSlice";
import axios from "axios";

function ModalLayout() {
  const { bodyType, isOpen, title } = useSelector((state) => state.state);

  return (
    <div
      className={cn({
        "absolute inset-0 z-20 bg-gray-400 bg-opacity-40 flex items-center justify-center transition-all duration-400":
          isOpen,
        hidden: !isOpen,
      })}
    >
      <div className="w-auto h-auto rounded-lg overflow-hidden min-w-[600px] min-h-[200px] py-4 bg-white text-white text-[20px] font-bold">
        <div className="p-2 bg-blue-400">
          <h2>{title}</h2>
        </div>
        <div className="px-4">
          {
            {
              [ModalType.ADD_LOP]: <AddLop />,
              [ModalType.ADD_GIAOVIEN]: <AddGiaoVien />,
              [ModalType.ADD_HOITHAO]: <AddHoiThao />,
              [ModalType.ADD_SINHVIEN]: <AddSinhVien />,
              [ModalType.ADD_KHOA]: <AddKhoa />,
              [ModalType.DEFAULT]: <div></div>,
            }[bodyType]
          }
        </div>
      </div>
    </div>
  );
}

export default ModalLayout;
