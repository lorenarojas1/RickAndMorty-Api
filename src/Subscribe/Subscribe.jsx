import './Subscribe.css';

const SubscribePage = () => {
  return (
    <div className="subscribe-container">
      <form className="form-container">
        <div className="email-request column">
          <label>Correo Electónico</label>
          <input type="email"></input>
        </div>
        <div className="column">
          <label>Ingresa el código que recibiste</label>
          <input type="number"></input>
          <span>El código caduca en:</span>
          <span>00:01</span>
        </div>
        <button>SUSCRIBIRME</button>
      </form>
    </div>
  );
};

export default SubscribePage;
