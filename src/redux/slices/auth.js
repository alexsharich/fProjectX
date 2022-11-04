import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'


const initialState = {
 data:null,
 status:'loading'
}