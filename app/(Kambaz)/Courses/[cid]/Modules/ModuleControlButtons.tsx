import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";
import {RootState} from "../../../store";
import { useSelector, useDispatch } from "react-redux";

export default function LessonControlButtons({ moduleId, deleteModule,  editModule }: { moduleId: string; deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void } ) {
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    // @ts-ignore
    const isFaculty = currentUser?.role === "FACULTY";
    return (

        <div className="float-end">
            {isFaculty && (
                <>
                <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
                <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
                </>
            )}
            <GreenCheckmark />
            <BsPlus />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );}