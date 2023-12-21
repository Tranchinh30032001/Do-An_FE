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
import { setClose, setState } from "../../store/slice/stateSlice";
import axios from "axios";
import DetailSinhVien from "../Detail/DetailSinhVien";
import DetailGiaoVien from "../Detail/DetailGiaoVien";
import Delete from "../Modal/Delete";

function ModalLayout() {
  const { bodyType, isOpen, title, size } = useSelector((state) => state.stateSlice);
  const isUpdate = title?.includes("Update");
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setClose());
  };

  return (
    <div
      className={cn({
        "absolute inset-0 z-20 bg-gray-400 bg-opacity-40 flex items-center justify-center transition-all duration-400":
          isOpen,
        hidden: !isOpen,
      })}
    >
      <div
        className={cn(
          "w-auto h-auto rounded-lg overflow-hidden min-w-[1200px] min-h-[200px] pb-10 bg-white text-white text-[20px] font-bold",
          {
            "min-w-[800px]": size,
          }
        )}
      >
        <div className="p-2 bg-blue-400">
          <h2>{title}</h2>
        </div>
        <div className="px-4 mt-8">
          {
            {
              [ModalType.ADD_LOP]: <AddLop />,
              [ModalType.ADD_GIAOVIEN]: <AddGiaoVien />,
              [ModalType.ADD_HOITHAO]: <AddHoiThao />,
              [ModalType.ADD_SINHVIEN]: <AddSinhVien />,
              [ModalType.ADD_KHOA]: <AddKhoa />,
              [ModalType.DETAIL_SINHVIEN]: <DetailSinhVien update={isUpdate} />,
              [ModalType.DETAIL_GIAOVIEN]: <DetailGiaoVien />,
              [ModalType.DELETE]: <Delete onClose={handleClose} />,
              [ModalType.DEFAULT]: <div></div>,
            }[bodyType]
          }
        </div>
      </div>
    </div>
  );
}

export default ModalLayout;
