import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';


export default function Repositories() {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName !== undefined) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      navigate('/');
    }
  }, [])
  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {repositories.map((repository, id) => {
          return (
            <S.ListItem id={id = id + 1}>{id} - Repositório: {repository}</S.ListItem>
          )
        })}
      </S.List>
      <S.LinkHome to={'/'}>Voltar</S.LinkHome>
    </S.Container>
  )
}