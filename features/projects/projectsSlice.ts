import { createSlice } from '@reduxjs/toolkit'
import { ProjectInterface } from '../../interfaces/project.interface';


const projectsData: ProjectInterface[] = [];

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: projectsData,
  },
  reducers: {
    setProjects: (state, actions) => {
        state.projects = actions.payload
    },
  },
})

export const { setProjects } = projectsSlice.actions

export default projectsSlice.reducer;