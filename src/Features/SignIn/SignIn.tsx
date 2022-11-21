import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../Auth';
import logoIcon from '../../Assets/logo.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const SignIn = (props: any) => {
  const message = props?.route?.params?.message;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {navigate} = useNavigation();
  const handleSignIn = async () => {
    const res = await login({email, password});
    if (res) {
      navigate('Home', {userInfo: res});
    }
  };
  const navigateToSignUp = () => {
    navigate('SignUp');
  };

  return (
    <View style={styles.localContainer}>
      <View style={styles.image}>
        <Image source={logoIcon} style={styles.infoImage} />
      </View>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        overScrollMode="never"
        contentContainerStyle={styles.scrollView}
        extraHeight={150}>
        <View style={styles.contentContainer}>
          <View>
            <View>
              <Text>{message}</Text>
            </View>
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

            <View style={styles.loginButtonContainer}>
              <Button
                style={styles.loginButton}
                onPress={handleSignIn}
                textColor="#fff">
                Sign in
              </Button>
            </View>
            <View style={styles.inline}>
              <Text>No Account? </Text>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={navigateToSignUp}>
                <Text style={styles.label}> Sign Up </Text>
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
    marginVertical: height * 0.005,
    borderRadius: 0,
  },
  contentContainer: {
    marginHorizontal: width * 0.012,
    padding: 8,
    justifyContent: 'space-around',
    flexDirection: 'column',
    flex: 1,
  },
  loginButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height * 0.012,
  },
  loginButton: {
    marginBottom: height * 0.012,
    backgroundColor: '#000099',
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
    marginVertical: height * 0.012,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.008,
  },
  label: {color: '#000099'},
  image: {
    marginTop: height * 0.05,
    alignSelf: 'center',
  },
  infoImage: {
    height: height * 0.06,
    width: width * 0.7,
    alignSelf: 'center',
  },
});
