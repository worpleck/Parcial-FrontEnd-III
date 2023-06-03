import './Card.css'

const Card = ({ user }) => {
  return (
    <>
      <div className='cardContainer'>
        <h3>Hola, {user.name} {user.apellido}</h3>
        <p>✅Te incribiste correctamente a la materia <strong>{user.materia}</strong></p>
        <button onClick={() => window.location.reload()}>Volver al inicio</button>
      </div>
    </>
  )
}

export default Card