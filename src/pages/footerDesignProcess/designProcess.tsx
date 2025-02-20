
import "./designProcess.css";
import designProcesImg from "../../images/desingFooterImage.png";
const DesignProcess = () => {
  return (
    <div className="footer_design_process_main">
      <div className="design_process flex sm:flex-colunm">
        {/* Image for Large & Medium screens */}
        <div className="design_process_Img large-screen">
          <img src={designProcesImg} alt="design process Imag" />
        </div>
        <div className="design_process_content">
          <h1>How to design your site footer like we did</h1>
          {/* Image for Small screens (hidden by default on larger screens) */}
          <div className="design_process_Img small-screen">
            <img src={designProcesImg} alt="design proces Imag" />
          </div>

          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
