import "../src/App.css";
import "../src/index.css";
const Nav = () => {
  return (
    <div className="nav">
      <div className="upperNav">
        <div className="upperNavUT">
          <p>
            <button>Home page</button>
          </p>
        </div>
        <div className="upperNavLT">
          <h2>
            Clean web design and inituitive user experience that reflect the
            club's dynamic spirit and premium feel
          </h2>
        </div>
      </div>
      <div className="midNav">
        <div className="upperPicNav">
          <div className="mid-uppernav">
            <div className="rightDs">horizon court</div>
            <div className="midDs">
              <div className="d1">about us</div>
              <div className="d2">services</div>
              <div className="d3">coaches</div>
              <div className="d4">event</div>
              <div className="d5">contacts</div>
            </div>
            <div className="leftDs">
              <button>booknow</button>
            </div>
          </div>
          <div className="PictureFD">
            <div className="mainPF">
              <div className="Fd-upper1">
                unleash your inner chanpion today .
              </div>
              <div className="Fd-upper2">all in one place</div>
              <div className="Fd-mid">
                join the ultimate tennis experience - where passion meet
                perfomance,and every swing brings you closer to the victory
              </div>
              <button>start your own journy </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
