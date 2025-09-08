import AboutSection from "./SubComponents/AboutSection";
import FeaturesSection from "./SubComponents/FeaturesSection";
import HeroSection from "./SubComponents/HeroSection";
import RolesSection from "./SubComponents/RolesSection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <RolesSection />
        </div>
    )
}

export default Home;