import { ChevronRight, Search } from "lucide-react"
import { createContext, useState } from "react"
import Card from "./Card"
import axios from "axios"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { fetchMedicines } from "../redux/MedicineSlice"

const SearchBar = () => {
    const Navigate = useNavigate()
    const dispath = useDispatch()
    const { medicines, loading, error } = useSelector((state) => state.medicine)
    const [searchValue, setSearchValue] = useState("")
    const searchMedicines = async (val: string) => {
        setSearchValue(val)
        dispath(fetchMedicines(val))
        medicines?.localStorage.setItem(
            "medicines",
            JSON.stringify(medicines)
        )
        // console.log(medicines)
        // medicines && setMedicineResult(medicines)

    }
    return <>
        <section className="seach-main relative">
            <div className="border-1 border-blue-500 w-100 rounded-3xl flex p-4 ">
                <input type="text" value={searchValue} onChange={(event) => searchMedicines(event.target.value)}
                    className="flex-grow border-0 outline-0 text-black" />
                <div>
                    <Search />
                </div>
            </div>
            {loading && (
                <div>Loading...</div>
            )}


            {error && (
                <div>{error}</div>
            )}

            <div className="medicine-search-result absolute top-15 w-100">
                {
                    medicines?.map((item, index) => (
                        <Card className={"flex items-center py-2 px-3"}>
                            <div className="flex-grow" onClick={() => Navigate(`/medicines/${item.id}`)}>
                                <div>{item.openfda?.brand_name}</div>
                                <div>
                                    {item.openfda?.brand_name?.[0]?.length > 20
                                        ? item.openfda?.brand_name[0].slice(0, 20) + "..."
                                        : item.openfda?.brand_name?.[0]}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {item.openfda?.generic_name?.[0]?.length > 20
                                        ? item.openfda.generic_name[0].slice(0, 20) + "..."
                                        : item.openfda?.generic_name?.[0]}
                                </div>

                            </div>
                            <ChevronRight />

                        </Card>
                    ))
                }
            </div>
        </section>
    </>
}
export default SearchBar