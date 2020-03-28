import React from 'react';
import { Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  GoBackButton,

  Incident,
  IncidentProperty,
  IncidentValue,

  ContactBox,
  HeroTitle,
  HeroDescription,
  HeroActions,
  HeroButton,
  HeroButtonText
} from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropleada" com o valor de R$ 120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Heroi do caso: Cadelinha atropelada',
      recipients: ['brunodemasi1@gmail.com'],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send:?phone=5591982369885&text=${message}`)
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <GoBackButton onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </GoBackButton>
      </Header>

      <Incident>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
        <IncidentValue>APAD</IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>Cadelinha atropelada</IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>R$ 120,00</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>
        <HeroActions>
          <HeroButton onPress={sendWhatsapp}>
            <HeroButtonText>Whatsapp</HeroButtonText>
          </HeroButton>
          <HeroButton onPress={sendMail}>
            <HeroButtonText>E-mail</HeroButtonText>
          </HeroButton>
        </HeroActions>
      </ContactBox>
    </Container>
  );
}
