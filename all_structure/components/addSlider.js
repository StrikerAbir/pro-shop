
import { toast } from "react-hot-toast";
import { useAddSliderMutation } from "../redux/features/sliderSlice";

const AddSlider = () => {
    const [addSlider, response] = useAddSliderMutation();
//    if (response.isSuccess) {
//      toast.success("Slider added successfully");
//    }
    const handleSlide = (event)=>{
        event.preventDefault();
        const form = event.target
        const title = form.title.value;
        const image = form.imageUrl.value;
        const data = { title, image };
        addSlider(data);
        form.reset();
        
         
    }
  return (
    <div className="mt-16 mb-10 ">
      <div className="text-center">
        <p className="text-2xl font-bold text-primary">Add Slider</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-5/6 ">
          <form onSubmit={handleSlide} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                className="input input-bordered"
                name="title"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                name="imageUrl"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-green-500 hover:bg-green-400 border-none text-white"
                type="submit"
                value="Add slider" 
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSlider;
