import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import LinkButton from "../../ui-kit/LinkButton";
import RoboCorner from "../../assets/RoboCorner";
import PageButtons from "../../components/PageButtons/PageButtons";
import VariantsContainer from "../../components/VariantsContainer/VariantsContainer";
import VariantFinder from "../../components/VariantFinder";

import "./VariantPage.css";

const VariantPage = () => {
    const [variants, setVariants] = useState();

    const getVariants = async () => {
        const data = await (
            await axios.get(`http://localhost:3000/variants`)
        ).data;
        setVariants(data);
    };

    useEffect(() => {
        getVariants();
    }, []);

    const location = useLocation().pathname;
    return (
        <div className="variantPageContainer">
            <div className="bankHeader">
                <RoboCorner />
                <LinkButton
                    to={"/"}
                    width={150}
                    height={40}
                    content={"На главную"}
                    location={location}
                />
            </div>
            <div className="variantsPageBody">
                <PageButtons />
                <VariantFinder />
            </div>
            {variants && (
                <div className="variantsPageContent">
                    <VariantsContainer variants={variants} />
                </div>
            )}
        </div>
    );
};

export default VariantPage;
