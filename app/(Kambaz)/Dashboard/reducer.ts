import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { enrollments as dbEnrollments } from "../Database"; // if you want initial db enrollments

const initialState = {
    enrollments: dbEnrollments || [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enroll: (state, { payload: { user, course } }) => {
            const exists = state.enrollments.some(
                (e: any) => e.user === user && e.course === course
            );
            if (!exists) {
                const newEnrollment = { _id: uuidv4(), user, course };
                state.enrollments = [...state.enrollments, newEnrollment] as any;
            }
        },
        unenroll: (state, { payload: { user, course } }) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => !(e.user === user && e.course === course)
            ) as any;
        },
    },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;