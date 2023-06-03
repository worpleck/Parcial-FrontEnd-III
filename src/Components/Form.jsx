import './Form.css'

const Form = ({ user, setUser, handleSubmit }) => {
  return (
    <>
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nombre</label>
        <input type='text' id='name' autoComplete='off' onChange={(e) => setUser({ ...user, name: e.target.value })} />
        <label htmlFor='apellido'>Apellido</label>
        <input type='text' id='apellido' autoComplete='off' onChange={(e) => setUser({ ...user, apellido: e.target.value })} />
        <label htmlFor='materia'>Materia</label>
        <input type='text' id='materia' autoComplete='off' onChange={(e) => setUser({ ...user, materia: e.target.value })} />
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default Form