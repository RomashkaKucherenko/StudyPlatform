import AuthImage from "../../assets/AuthImage";
import AuthRobo from "../../assets/AuthRobo.svg";

import "./SignUpPage.css";

const SignUpPage = () => {
    return (
        <div className="authContainer">
            <div className="authImages">
                <AuthImage width={"57vw"} height={"100%"} />
                <img className="authRoboImage" src={AuthRobo} alt="" />
                <div className="authTitle">
                    Воплощайте свои идеи в реальность
                </div>
            </div>
            <div className="authForms">
                <div></div>
            </div>
        </div>
    );
};

export default SignUpPage;
