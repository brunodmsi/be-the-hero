import React from 'react';
import { Image, FlatList } from 'react-native';
import { useNavigation, useNavigationBuilder } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,

  Incident,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText
} from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>0 casos</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem-vindo</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <FlatList
        style={{ marginTop: 32 }}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>APAD</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>Cadelinha atropelada</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>R$ 120,00</IncidentValue>

            <DetailsButton onPress={navigateToDetail}>
              <DetailsButtonText>Veja mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}
