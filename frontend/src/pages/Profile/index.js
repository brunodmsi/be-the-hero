import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, Cases } from './styles';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile() {
  const ongName = localStorage.getItem('@BeTheHero/ong_name');
  const ongId = localStorage.getItem('@BeTheHero/ong_id');

  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const { data: response } = await api.get('profile', {
        headers: {
          Authorization: ongId
        }
      })

      setIncidents(response)
    }

    fetchData();
  }, [ongId])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar o caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.removeItem('@BeTheHero/ong_name');
    localStorage.removeItem('@BeTheHero/ong_id');

    history.push('/')
  }

  return (
    <Container>
      <header>
        <img src={logo} alt="Be The Hero"/>
        <span>Bem-vinda, {ongName}</span>

        <Link className="customButton" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={() => handleLogout()}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <Cases>
        <h1>Casos cadastrados</h1>

        <ul>
          {incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>{Intl.NumberFormat(
                    'pt-BR',
                    {
                      style: 'currency',
                      currency: 'BRL'
                    }
                  ).format(incident.value)
                }
              </p>

              <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </ul>
      </Cases>
    </Container>
  );
}
