import React, {useState} from 'react';
import { Formik } from 'formik';
import { View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
// keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  Colors,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent
} from './../components/styles';
import { StatusBar } from 'expo-status-bar';

const {brand, darkLight, primary} = Colors;

const Signup =({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  //Actual date of birth to be sent
  const [dob, setDob] = useState();

  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  }

  const showDatePicker = () => {
    setShow(true);
  }

  return(
    <KeyboardAvoidingWrapper>
    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>
        <PageTitle>Heritage App</PageTitle>
        <SubTitle>Account Signup</SubTitle>
        {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
        )}
        <Formik
          initialValues={{fullname:'', email:'', dateOfBirth:'', password:'', confirmPassword:''}}
          onSubmit={(values)=>{
            console.log(values);
            navigation.navigate("Welcome");
          }}
        >{({handleChange,handleBlur,handleSubmit,values}) =>(
          <StyledFormArea>
            <MyTextInput
              label="Full Name"
              icon="person"
              placeholder="Nguyen Van A"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('fullname')}
              onBlur={handleBlur('fullname')}
              value={values.fullname}
            />
            <MyTextInput
              label="Email Address"
              icon="mail"
              placeholder="Name@gmail.com"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            <MyTextInput
              label="Date of Birth"
              icon="calendar"
              placeholder="YYYY-MM-DD"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('dateOfBirth')}
              onBlur={handleBlur('dateOfBirth')}
              value={dob ? dob.toDateString() : ''}
              isDate={true}
              editable={false}
              showDatePicker={showDatePicker}
            />
            <MyTextInput
              label="Password"
              icon="lock"
              placeholder="* * * * * *"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <MyTextInput
              label="Confirm Password"
              icon="lock"
              placeholder="* * * * * *"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <MsgBox>...</MsgBox>
            <StyledButton onPress={handleSubmit}>
              <ButtonText>Sign Up</ButtonText>
            </StyledButton>
            <Line/>

            <ExtraView>
              <ExtraText>Already have an account? </ExtraText>
              <TextLink onPress={()=>navigation.navigate('Login')}>
                <TextLinkContent>Login</TextLinkContent>
              </TextLink>
            </ExtraView>

          </StyledFormArea>
        )
        }
        </Formik>
      </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
}

const MyTextInput = ({label,icon,isPassword,hidePassword,setHidePassword,isDate,showDatePicker,...props}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand}/>
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props}/>}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props}/>
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'eye-off':'eye'} size={30} color={darkLight}/>
        </RightIcon>
      )}
    </View>
  )
}

export default Signup;