import {sendGridEmail} from 'react-native-sendgrid';

export const sendOtpToUser = async ({email}: {email: string}) => {
  const newOtp = Math.floor(100000 + Math.random() * 900000);
  //ES8
  try {
    await sendGridEmail(
      'api key',
      email,
      'shubham.navale17@comp.sce.edu.in',
      'Your otp for verification',
      `Your OTP is ${newOtp}`,
    );
    return newOtp;
  } catch (error) {
    console.error(error);
  }
};
