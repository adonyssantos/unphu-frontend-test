import { useDispatch } from 'react-redux';
import { addUser } from '../../redux';
import { Layout, PrivateRoute } from '../../components';
import { Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const dispatch = useDispatch<Dispatch<any>>();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const user: IUser = {
      name: formData.get('name') as IUser['name'],
      surname: formData.get('surname') as IUser['surname'],
      lastName: formData.get('lastName') as IUser['lastName'],
      identification: Number(formData.get('identification')) as IUser['identification'],
      age: Number(formData.get('age')) as IUser['age'],
      gender: formData.get('gender') as IUser['gender'],
      address: formData.get('address') as IUser['address'],
      address2: formData.get('address2') as IUser['address2'],
      phone: Number(formData.get('phone')),
      email: formData.get('email') as IUser['email'],
      civilStatus: formData.get('civilStatus') as IUser['civilStatus'],
      hasChildren: formData.get('hasChildren') as IUser['hasChildren'],
      birthDate: formData.get('birthDate') as IUser['birthDate'],
    };

    dispatch(addUser(user));
    form.reset();
    navigate('/dashboard');
  };
  return (
    <PrivateRoute>
      <Layout>
        <h1 className='title'>Agregar nuevo usuario</h1>
        <form className='container form-group' onSubmit={handleSubmit}>
          {/* Name(s) */}
          <label htmlFor='name'>Nombre(s):</label>
          <input type='text' className='form-control' id='name' name='name' required />
          {/* Surname */}
          <label htmlFor='surname'>Primer Apellido:</label>
          <input type='text' className='form-control' id='surname' name='surname' required />
          {/* Last name */}
          <label htmlFor='lastName'>Segundo Apellido:</label>
          <input type='text' className='form-control' id='lastName' name='lastName' />
          {/* identification */}
          <label htmlFor='identification'>Cédula:</label>
          <input type='number' className='form-control' id='identification' name='identification' required />
          {/* Age */}
          <label htmlFor='age'>Edad:</label>
          <input type='number' className='form-control' id='age' name='age' required />
          {/* Gender */}
          <label htmlFor='gender'>Género:</label>
          <select className='form-control' id='gender' name='gender' required>
            <option>Selecciona un género</option>
            <option value='f'>Femenino</option>
            <option value='m'>Masculino</option>
            <option value='o'>Otro</option>
          </select>
          {/* Address */}
          <label htmlFor='address'>Dirección:</label>
          <input type='text' className='form-control' id='address' name='address' required />
          {/* Address 2 */}
          <label htmlFor='address2'>Dirección 2: (opcional)</label>
          <input type='text' className='form-control' id='address2' name='address2' />
          {/* Phone */}
          <label htmlFor='phone'>Teléfono:</label>
          <input type='number' className='form-control' id='phone' name='phone' required />
          {/* Email */}
          <label htmlFor='email'>Correo electrónico:</label>
          <input type='email' className='form-control' id='email' name='email' required />
          {/* Estado civil */}
          <label htmlFor='civilStatus'>Estado civil:</label>
          <select className='form-control' id='civilStatus' name='civilStatus' required>
            <option>Selecciona un estado civil</option>
            <option value='soltero'>Soltero(a)</option>
            <option value='casado'>Casado(a)</option>
            <option value='divorciado'>Divorciado(a)</option>
            <option value='viudo'>Viudo(a)</option>
          </select>
          {/* Tienes hijos */}
          <label htmlFor='hasChildren'>¿Tienes hijos?:</label>
          <select className='form-control' id='hasChildren' name='hasChildren' required>
            <option>Selecciona una opción</option>
            <option value='si'>Si</option>
            <option value='no'>No</option>
          </select>
          {/* Fecha de nacimiento */}
          <label htmlFor='birthDate'>Fecha de nacimiento:</label>
          <input type='date' className='form-control' id='birthDate' name='birthDate' required />
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
