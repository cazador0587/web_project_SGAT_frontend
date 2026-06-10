import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__card">
        <div className="profile__avatar">FS</div>

        <h2 className="profile__name">Fernando Salvador</h2>

        <p className="profile__role">Administrador SGAT</p>

        <div className="profile__info">
          <div className="profile__row">
            <span>Correo:</span>
            <p>fernando@sgat.com</p>
          </div>

          <div className="profile__row">
            <span>Departamento:</span>
            <p>Sistemas</p>
          </div>

          <div className="profile__row">
            <span>Último acceso:</span>
            <p>09/06/2026</p>
          </div>
        </div>

        <div className="profile__actions">
          <button className="profile__edit">Editar Perfil</button>

          <button className="profile__logout">Cerrar Sesión</button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
