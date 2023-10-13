import {useNavigate} from 'react-router-dom'
function Sidebar (){
    const navigate = useNavigate();
    const handle=()=>{
        navigate('/');
    }
    return (
        <div id="sidebar">
            <h3>Dashboard</h3>
            <hr></hr>
            <button class="btn btn-primary btn-lg" onClick={handle}>Home</button>
            <hr></hr>
        </div>
    );
}
export default Sidebar;