import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

export default function AddUsers() {


  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);

  const switchSkin = (skin) => {
    if (skin === 'dark') {
      const btnWhite = document.getElementsByClassName('btn-white');

      for (const btn of btnWhite) {
        btn.classList.add('btn-outline-primary');
        btn.classList.remove('btn-white');
      }
    } else {
      const btnOutlinePrimary = document.getElementsByClassName('btn-outline-primary');

      for (const btn of btnOutlinePrimary) {
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-white');
      }
    }
  };

  switchSkin(skin);
  useEffect(() => {
    switchSkin(skin);
  }, [skin]);

  return (
    <React.Fragment>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link to="#">Menú</Link></li>
              <li className="breadcrumb-item" aria-current="page">Opción Menú</li>
            </ol>
            <h4 className="main-title mb-0">Agregar usuario</h4>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
