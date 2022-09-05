import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'siraCounter',
    initialState: {

        hangiSira: 0,

        veriler: [
            {
                id: 0,
                text: "Senin kollarında başlayan sabahlara biten gecelere, doyamadım hala...",
                sanatcı: "Dolu kadehi ters tut",
                color: '#16a085'

            },
            {
                id: 1,
                text: "Seni seni bir tek seni, en çok seni,seni yarimmm...",
                sanatcı: "Gülşen",
                color: '#27ae60'
            },
            {
                id: 2,
                text: "Belki nefretin büyür,varsa olan sevgin ölür,ne fark eder şimdiden sonra..",
                sanatcı: "Gökçe Kırgız",
                color: '#7d5fff'
            },
            {
                id: 3,
                text: "Artık bende istemiyorum,git dedinya işte gidiyorumm..",
                sanatcı: "Gökçe Kırgız",
                color: '#9b59b6'
            },
            {
                id: 4,
                text: "Senin kollarında başlayan sabahlara biten gecelere, doyamadım hala...",
                sanatcı: "Melek Mosso",
                color: '#472E32'
            },
            {
                id: 5,
                text: "Sana böyle uzakken seni bir daha sevdim,yanına gelebilsem bir daha dönmezdim..",
                sanatcı: "Pihanni",
                color: '#77B1A9'
            },
            {
                id: 6,
                text: "Sanki bir gün çıkıp gelecek misin? sensiz ne haldeyim bilecek misin...",
                sanatcı: "Melek Mosso",
                color: '#73A857'
            },
        ]

    },
    reducers: {
        INCREMENT: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            let yeniSira;
            if (state.hangiSira + 1 >= state.veriler.length) {
                yeniSira = 0;
            } else {
                yeniSira = state.hangiSira + 1;
            }
            return {
                ...state,
                hangiSira: yeniSira
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { INCREMENT } = counterSlice.actions

export default counterSlice.reducer