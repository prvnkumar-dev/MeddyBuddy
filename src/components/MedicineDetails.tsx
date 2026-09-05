import { useEffect, useState } from "react"
import Card from "./Card"
import axios from "axios"
import { useNavigate, useParams } from "react-router"
import { useSelector } from "react-redux"

const MedicineDetails = () => {
    const Navigate = useNavigate()
    const { id } = useParams()
    const [medicineData, setMedicineData] = useState({})
    const { medicines } = useSelector((state) => state.medicine)

    const getMedicineDetail = async () => {
        const result = medicines?.filter((item) => item.id == id)
        result && setMedicineData(result[0])



    }
    const atglance = medicineData && [{
        title: "Active ingredients",
        val: medicineData?.active_ingredient
    },
    {
        title: "Route",
        val: medicineData?.openfda?.route

    },
    {
        title: "Product type",
        val: medicineData?.openfda?.product_type
    }, {
        title: "Manufacturer",
        val: medicineData.openfda?.manufacturer_name
    }]
    useEffect(() => {
        getMedicineDetail()
    }, [medicines])
    return <>
        <section className="medicine-details-main flex justify-center items-center py-5 flex-col">
            <Card className="p-6 w-[900px] my-3">
                <div className="font-bold text-3xl">{medicineData?.openfda?.brand_name} </div>
                <div className="text-gray-700">{medicineData?.openfda?.generic_name}</div>
                <span className="mr-2 border-blue-200 rounded-lg text-xs border-1 bg-blue-100 p-1">{medicineData?.openfda?.route}</span>
                <span className="border-blue-200 rounded-lg text-xs border-1 bg-blue-100 p-1">{medicineData?.openfda?.product_type}</span>
                <div className="h-[1px] w-full bg-gray-300 mt-3"></div>
                <div><span>Purpose: </span>{medicineData?.purpose}</div>
            </Card>
            <Card className="p-6 w-[900px]">
                <div>At a glance</div>
                <div className="h-[1px] w-full bg-gray-300 mt-3"></div>
                {
                    atglance?.map((item) => (
                        <div className="flex my-2 border-1 border-gray-300 p-3 border-s-0 border-e-0">
                            <div className="flex-grow">
                                {item.title}
                            </div>
                            <div >
                                {item.val}
                            </div>
                        </div>
                    ))
                }
            </Card>
            <button className="bg-green-400 shadow-sm px-6 py-3 my-3 rounded-lg" onClick={() => Navigate("/")}>Go back</button>
        </section>
    </>
}
export default MedicineDetails