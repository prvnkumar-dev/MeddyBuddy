import { useEffect, useState } from "react"
import Card from "./Card"
import axios from "axios"
import { useParams } from "react-router"
import { useSelector } from "react-redux"

const MedicineDetails = () => {
    const { id } = useParams()
    const [medicineData, setMedicineData] = useState({})
    const { medicines } = useSelector((state) => state.medicine)

    const getMedicineDetail = async () => {
        const result = medicines?.filter((item) => item.id == id)
        result && setMedicineData(result[0])



    }
    useEffect(() => {
        getMedicineDetail()
    }, [])
    return <>
        <section className="medicine-details-main flex justify-center py-5">
            <Card className="p-6">
                <div className="font-bold text-3xl">{medicineData?.openfda?.brand_name} </div>
                <div className="text-gray-700">Titanium Dioxide 6.4% Sunscreen</div>
                <span className="mr-2">Topical</span>
                <span>HUMAN OTC DRUG</span>
                <div className="h-[2px] w-100 bg-gray-600"></div>
                <div><span>Purpose: </span>Use Helps prevent sunburn. Higher SPF gives more sunburn protection.</div>
            </Card>
        </section>
    </>
}
export default MedicineDetails