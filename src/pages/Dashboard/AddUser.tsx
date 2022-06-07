import { Layout, PrivateRoute } from '../../components';

export default function Dashboard() {
  return (
    <PrivateRoute>
      <Layout>
        <h1 className='title'>Agregar nuevo usuario</h1>
        <form className='container form-group'>
          {/* Name(s) */}
          <label htmlFor='name'>Nombre(s):</label>
          <input type='text' className='form-control' id='name' />
          {/* Surname */}
          <label htmlFor='surname'>Primer Apellido:</label>
          <input type='text' className='form-control' id='surname' />
          {/* Last name */}
          <label htmlFor='lastName'>Segundo Apellido:</label>
          <input type='text' className='form-control' id='lastName' />
          {/* identification */}
          <label htmlFor='identification'>Cédula:</label>
          <input type='number' className='form-control' id='identification' />
          {/* Age */}
          <label htmlFor='age'>Edad:</label>
          <input type='number' className='form-control' id='age' />
          {/* Gender */}
          <label htmlFor='gender'>Género:</label>
          <select className='form-control' id='gender'>
            <option>Selecciona un género</option>
            <option value='f'>Femenino</option>
            <option value='m'>Masculino</option>
            <option value='o'>Otro</option>
          </select>
          {/* Address */}
          <label htmlFor='address'>Dirección:</label>
          <input type='text' className='form-control' id='address' />
          {/* Address 2 */}
          <label htmlFor='address2'>Dirección 2: (opcional)</label>
          <input type='text' className='form-control' id='address2' />
          {/* Phone */}
          <label htmlFor='phone'>Teléfono:</label>
          <input type='number' className='form-control' id='phone' />
          {/* Email */}
          <label htmlFor='email'>Correo electrónico:</label>
          <input type='email' className='form-control' id='email' />
          {/* Estado civil */}
          <label htmlFor='civilStatus'>Estado civil:</label>
          <select className='form-control' id='civilStatus'>
            <option>Selecciona un estado civil</option>
            <option value='soltero'>Soltero(a)</option>
            <option value='casado'>Casado(a)</option>
            <option value='divorciado'>Divorciado(a)</option>
            <option value='viudo'>Viudo(a)</option>
          </select>
          {/* Tienes hijos */}
          <label htmlFor='hasChildren'>¿Tienes hijos?:</label>
          <select className='form-control' id='hasChildren'>
            <option>Selecciona una opción</option>
            <option value='si'>Si</option>
            <option value='no'>No</option>
          </select>
          {/* Fecha de nacimiento */}
          <label htmlFor='birthDate'>Fecha de nacimiento:</label>
          <input type='date' className='form-control' id='birthDate' />
          {/* Submit */}
          <br />
          <button type='submit' className='btn'>
            Agregar usuario
          </button>
        </form>
      </Layout>
    </PrivateRoute>
  );
}
