import no_image from "../assets/icons/no-photo.svg";
import "./Today.css";

function Today({ img }: { img: string }) {
  return (
    <div className="boxData neomorphism--pressed">
      <div className="delay">
        {img ? (
          <img src={img} className="image neomorphism" alt="Image" />
        ) : (
          <img src={no_image} className="no_image neomorphism" />
        )}
      </div>
    </div>
  );
}

export default Today;
