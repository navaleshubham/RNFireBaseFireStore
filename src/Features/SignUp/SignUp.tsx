import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {navigate} = useNavigation();
  const handleSignIn = () => {};
  const navigateToSignIn = () => {
    navigate('SignIn');
  };
  return (
    <View style={styles.localContainer}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        overScrollMode="never"
        contentContainerStyle={styles.scrollView}
        extraHeight={150}>
        <View style={styles.contentContainer}>
          <View>
            <TextInput
              onChangeText={setName}
              value={name}
              placeholder="Name"
              importantForAutofill="yes"
              textContentType="username"
              autoCapitalize="none"
              style={styles.input}
            />
            <TextInput
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              placeholder="Mobile Number"
              importantForAutofill="yes"
              keyboardType="phone-pad"
              autoCapitalize="none"
              maxLength={10}
              style={styles.input}
            />
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              importantForAutofill="yes"
              textContentType="username"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />

            <TextInput
              secureTextEntry
              onChangeText={setPassword}
              value={password}
              importantForAutofill="yes"
              placeholder={'Password'}
              textContentType="password"
              style={styles.input}
            />
            <View style={styles.inline}>
              {/* <Checkbox
                status={termsAndCond ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTermsAndCond(!termsAndCond);
                }}
              /> */}
              <Text>I agree to user terms</Text>
            </View>
            <View style={styles.loginButtonContainer}>
              <Button
                style={styles.loginButton}
                onPress={handleSignIn}
                textColor="#fff">
                Sign Up
              </Button>
            </View>
            <View style={styles.inline}>
              <Text>Already have Account?</Text>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={navigateToSignIn}>
                <Text style={styles.label}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 4,
  },
  contentContainer: {
    marginHorizontal: 12,
    padding: 8,
    justifyContent: 'space-around',
    flexDirection: 'column',
    flex: 1,
  },
  loginButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  loginButton: {
    marginBottom: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    width: 300,
  },
  scrollView: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: '100%',
  },
  localContainer: {
    marginHorizontal: 4,
  },
  input: {
    backgroundColor: 'transparent',
    marginVertical: 12,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  label: {
    color: 'blue',
  },
});
