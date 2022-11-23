import {View, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {verifyOtp} from '../../Auth';
import logoIcon from '../../Assets/logo.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const VerifyOtp = (props: any) => {
  const userEmail = props?.route?.params?.email;
  const [otp, setOtp] = useState('');
  const {navigate} = useNavigation();

  const handleVerifyOto = async () => {
    const res = await verifyOtp({email: userEmail, otp});
    if (res) {
      navigate('SignIn', {message: 'Please sign in using your credentials'});
    }
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
            <TextInput
              value={userEmail}
              placeholder="Email"
              importantForAutofill="yes"
              textContentType="username"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              disabled
            />
            <TextInput
              onChangeText={setOtp}
              value={otp}
              importantForAutofill="yes"
              placeholder={'Otp'}
              textContentType="oneTimeCode"
              style={styles.input}
              maxLength={6}
              keyboardType="number-pad"
            />

            <View style={styles.loginButtonContainer}>
              <Button
                style={styles.loginButton}
                onPress={handleVerifyOto}
                textColor="#fff">
                Verify Otp
              </Button>
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
