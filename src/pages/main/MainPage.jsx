import "./MainPage.css";

function renderNavigationMenu() {
  return (
    <div className="navigationMenu">
      <div className="leftNavigation">
        <h6>Inicio</h6>
        <h6>Info</h6>
      </div>
      <div className="rightNavigation">
        <h6>Mods</h6>
        <h6>Creditos</h6>
      </div>
    </div>
  );
}

function MainPage() {
  return (
    <div className="MainContainer">
      {renderNavigationMenu()}
      <h1 className="mainTitle">Mitsuland</h1>
    </div>
  );
}

export default MainPage;
