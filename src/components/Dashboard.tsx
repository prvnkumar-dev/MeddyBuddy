import SearchBar from "./SearchBar"

const Dashboard = () => {
    return <>
        <section className="dashboard-main flex justify-center items-center flex-col ">
            <div>Know your medicine,</div>
            <div>before you take it.</div>
            <div>search medicines by brand name or active ingredient</div>
            <SearchBar />
        </section>
    </>
}
export default Dashboard