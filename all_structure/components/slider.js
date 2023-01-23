import { Slide } from "react-slideshow-image";
import { useGetAllSliderQuery } from "../redux/features/sliderSlice";
import "react-slideshow-image/dist/styles.css";


const Slider = () => {
    const { data: sliders, error, isError, isLoading,refetch } = useGetAllSliderQuery();
    // console.log(sliders);
    
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="slide-container">
        <Slide>
          {sliders.map((slide, index) => (
            <div key={index} className="flex justify-center items-center">
              <div
                className="w-full"
                style={{
                  backgroundSize: "cover",
                  height: "700px",
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="flex items-center justify-center h-full">
                  <p className='text-4xl text-primary font-bold bg-black bg-opacity-50 p-52'>
                    <span>{slide.title}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Slider;

