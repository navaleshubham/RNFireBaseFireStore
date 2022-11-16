import firestore from '@react-native-firebase/firestore';
import {v4 as uuidv4} from 'uuid';
import bcrypt from 'react-native-bcrypt';
import {sendOtpToUser} from './verification';

declare var global: any;

if (__DEV__ && typeof global.crypto !== 'object') {
  global.crypto = {
    getRandomValues: (array: any[]) =>
      array.map(() => Math.floor(Math.random() * 256)),
  };
} else {
  require('react-native-get-random-values');
}
export const createUser = async ({
  email,
  password,
  mobileNumber,
  name,
}: {
  email: string;
  password: string;
  mobileNumber: string;
  name: string;
}) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const newOtp = await sendOtpToUser({email});

  if (newOtp?.toString().length === 6) {
    await firestore()
      .collection('Users')
      .doc(uuidv4())
      .set({
        email,
        password: hash,
        mobileNumber,
        name,
        otpKey: bcrypt.hashSync(newOtp.toString(), salt),
        isVerified: false,
      });
    return true;
  }
  return false;
};

export const verifyOtp = async ({email, otp}: {email: string; otp: string}) => {
  const currentUser = await firestore()
    .collection('Users')
    .where('email', '==', email)
    .get();
  if (currentUser.docs.length > 0) {
    if (bcrypt.compareSync(otp, currentUser.docs[0].data().otpKey)) {
      await firestore().collection('Users').doc(currentUser.docs[0].id).update({
        isVerified: true,
      });
      return true;
    }
  }
  return false;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const currentUser = await firestore()
    .collection('Users')
    .where('email', '==', email)
    .get();
  if (currentUser.docs.length > 0) {
    if (bcrypt.compareSync(password, currentUser.docs[0].data().password)) {
      return currentUser.docs[0].data();
    }
  }
  return false;
};
