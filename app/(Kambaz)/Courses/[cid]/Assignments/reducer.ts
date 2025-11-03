import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database"; // adjust relative path as needed
import { v4 as uuidv4 } from "uuid";

const initialState = {
    assignments: assignments,
}

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
         addAssignment: (state, { payload: assignment}) => {
             const newAssignment: any = {
                 _id: uuidv4(),
                 title: assignment.title,
                 course: assignment.course,
                 description: assignment.description || "",
                 points: assignment.points || "0",
                 due_date: assignment.due_date || null,
                 available_date: assignment.available_date || null,
             };
             state.assignments = [...state.assignments, newAssignment] as any;
         },

        deleteAssignment: (state, { payload: assignmentId}) => {
             state.assignments = state.assignments.filter(
                 (a: any) => a._id !== assignmentId
             );
        },

        updateAssignment: (state, { payload }) => {
             state.assignments = state.assignments.map(
                 (a: any) => a._id === payload._id ? {...a, ...payload } : a
             );
        },
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;