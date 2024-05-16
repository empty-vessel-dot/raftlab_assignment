import { TypeAnimation } from 'react-type-animation';
const HeroSection: React.FC = () => {
    return (
      <div className="flex w-full h-[90vh]  bg-[#FEFAEA]">
         <div className="  text-white px-10 
          w-[40%] flex flex-col gap-4 ">
            <h1 className=" mt-40 font-serif text-black font-semibold  text-[60px]" >
            <TypeAnimation
                    sequence={[
                        
                    
                        'Welcome to TaskBliss',
                        2000,
                        ' ',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                    
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                    /></h1>
            <p className=" font-mono text-black  text-[24px] text-left">  Your ultimate tool for effortless task management and goal achievement. Streamline your day, conquer your to-do lists, and reach new heights of productivity with ease. Whether it's organizing your tasks or realizing your dreams, TaskBliss empowers you to make every moment count</p>
        </div>
        <div className="w-[60%] h-full flex items-center justify-center">
        <img src="https://avatu.in/images/ConsultingServices.png" alt="" className="w-[80%] h-[60%] object-cover"/>
        </div>
       
      </div>
    );
  };
  
  export default HeroSection;