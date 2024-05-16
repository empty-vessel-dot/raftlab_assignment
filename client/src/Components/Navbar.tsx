import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LogoutIcon from '@mui/icons-material/Logout';


function Navbar() {
  return (
    <div className=" h-[9vh] px-[40px]  w-full flex justify-between items-center  bg-cyan-500 text-white">
        <div className="flex items-center gap-2">
            <AddTaskIcon style={{ fontSize: 50 }}/>
            <h1 className="text-[30px] font-bold"> TaskBliss</h1>
        </div>
        <div className="flex gap-8 items-center font-bold">
            <Link to="/home" className=" hover:text-red-500 flex justify-center items-center"><HomeIcon/> Home</Link>
            <Link to="/task" className=" hover:text-red-500 flex justify-center items-center"><TaskAltIcon/> Task</Link>
            <Link to="/" className=" hover:text-red-500 flex justify-center items-center"><LogoutIcon/> Logout</Link>
        </div>
    </div>
  )
}

export default Navbar