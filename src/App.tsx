import { useEffect, useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Title } from './components/Title';

function App() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    if (name && lastName && email && phone && cpf) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, lastName, email, phone, cpf]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-teal-700 w-[50%] rounded-md p-4 flex flex-col items-center">
        <p className="text-teal-100 text-2xl font-bold">
          Formulário de validação
        </p>
        <p className="text-teal-100 text-xl font-bold mt-6">Dados Pessoais</p>
        <div className="flex justify-between w-[60%] mt-6">
          <div>
            <Title text={'Nome'} />
            <Input
              type={'text'}
              placeholder={'Seu nome aqui'}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <Title text={'Sobrenome'} />
            <Input
              type={'text'}
              placeholder={'Seu sobrenome aqui'}
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-between w-[60%] mt-6">
          <div>
            <Title text={'E-mail'} />
            <Input
              type={'text'}
              placeholder={'Seu e-mail aqui'}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Title text={'Telefone'} />
            <Input
              type={'number'}
              placeholder={'Seu telefone aqui'}
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center w-[100%] mt-6">
          <div>
            <Title text={'CPF'} />
            <Input
              type={'number'}
              placeholder={'Digite seu CPF'}
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-8">
          <Button disabled={buttonDisabled} text={'Enviar'} />
        </div>
      </div>
    </div>
  );
}

export default App;
