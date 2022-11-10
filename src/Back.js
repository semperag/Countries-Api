import './Back.css'
import { useHistory } from "react-router-dom";

const Back = () => {
    const history = useHistory();

    const goBack = (e) => {
        history.go(-1);
    }
    return (
        <div className="back">
            <button onClick={goBack}>Back</button>
        </div>
    )
}

export default Back;