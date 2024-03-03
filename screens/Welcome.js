import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar
} from './../components/styles';

const Welcome =({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  return(
    <>
      <StatusBar style="dark"/>
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/img/expo-bg1.png')}/>
        <WelcomeContainer>
            <PageTitle welcome={true}>Welcome!</PageTitle>
            <SubTitle welcome={true}>Cao Viet Hoang</SubTitle>
            <SubTitle welcome={true}>viethoangb0410@gmail.com</SubTitle>
            <StyledFormArea>
                <Avatar resizeMode="cover" source={require('./../assets/img/expo-bg2.png')}/>
                <Line/>
                <StyledButton onPress={()=>{navigation.navigate("Login")}}>
                    <ButtonText>Logout</ButtonText>
                </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
}


export default Welcome;