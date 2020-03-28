import styled from 'styled-components/native';
import Constants from 'expo-constants';

const statusBar = Constants.statusBarHeight + 20;

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${statusBar};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const Incident = styled.View`
  margin-top: 48px;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
  margin-top: 24px;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
`;

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const HeroActions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeroButton = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  align-items: center;
  justify-content: center;
`;

export const HeroButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const GoBackButton = styled.TouchableOpacity``;
