import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {verifyOtp} from '../../Auth';

export const VerifyOtp = (props: any) => {
  const userEmail = props?.route?.params?.email;
  const [otp, setOtp] = useState('');
  const {navigate} = useNavigation();

  const handleVerifyOto = async () => {
    const res = await verifyOtp({email: userEmail, otp});
    if (res) {
      navigate('SignIn', {message: 'Please sign in using credentials'});
    }
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
    marginVertical: 4,
    borderRadius: 0,
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
  label: {color: 'blue'},
});
