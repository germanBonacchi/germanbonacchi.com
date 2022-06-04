import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../config/particlesConfig.json";

import "../css/particles.css";
export default function ParticlesBackground() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={ParticleConfig}
                className="particles"
            />
        </div>
    );
}