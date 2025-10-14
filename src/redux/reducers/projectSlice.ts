import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Project {
    id: number;
    title: string;
    desc: string;
    url: string;
    api_url: string;
    languages: string[];
    topics: string[];
    image: string | null;
}

interface ProjectState {
    items: Project[];
    loading: boolean;
    error: string | null;
}

const initialState: ProjectState = {
    items: [],
    loading: false,
    error: null,
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        reset(state) {
            state.items = [];
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to load projects';
            });
    }
})

export const fetchProjects = createAsyncThunk<Project[]>(
    'project/fetchAll',
    async () => {
        const res = await fetch('http://localhost:8000/get-all-projects');
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        return data as Project[];
    }
);

export const { reset } = projectSlice.actions;
export default projectSlice.reducer