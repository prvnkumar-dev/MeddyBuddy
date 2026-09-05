import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    medicines: [],
    loading: false,
    error: null,
};


export const fetchMedicines = createAsyncThunk(
    "medicine/fetchMedicines",

    async (searchValue, { rejectWithValue }) => {

        try {

            const url =
                `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${encodeURIComponent(searchValue)}"&limit=20`;

            const response = await axios.get(url);

            return response.data.results;

        } catch (error) {

            if (axios.isAxiosError(error)) {
                return rejectWithValue(
                    error.response?.data?.error?.message ||
                    "Failed to fetch medicines"
                );
            }

            return rejectWithValue("Something went wrong");
        }
    }
);


const medicineSlice = createSlice({

    name: "medicine",

    initialState,

    reducers: {

        clearMedicines: (state) => {
            state.medicines = [];
            state.error = null;
        },

    },

    extraReducers: (builder) => {

        builder
            .addCase(fetchMedicines.pending, (state) => {

                state.loading = true;
                state.error = null;

            })
            .addCase(fetchMedicines.fulfilled, (state, action) => {

                state.loading = false;
                state.medicines = action.payload;

            })
        // .addCase(fetchMedicines.rejected, (state, action) => {

        //     state.loading = false;
        //     state.medicines = [];

        //     state.error =
        //         action.payload || "Failed to fetch medicines";

        // });

    },
});


export const { clearMedicines } = medicineSlice.actions;

export default medicineSlice.reducer;