import AddSlider from "../../all_structure/components/addSlider";


const Dashboard = () => {
//     const handleClick = ()=>{
//        const data = {
//          category_name: "Table",
//          image: "https://i.ibb.co/1KRPGy7/table2.jpg",
//          category_id: "1",
//        };
//         fetch("http://localhost:1000/categories/addCategories", {
//             method: "POST",
//             headers: {
//                 "content-type":"application/json"
//             },
//             body: JSON.stringify(data)
//         });
//    }
    return (
        <div>
            <AddSlider />
            {/* <button onClick={handleClick}>add category</button> */}
        </div>
    );
};

export default Dashboard;