import {sendGridEmail} from 'react-native-sendgrid';

export const sendOtpToUser = async ({email}: {email: string}) => {
  const newOtp = Math.floor(100000 + Math.random() * 900000);
  //ES8
  try {
    await sendGridEmail(
      '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',
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

export const sendEmailToUser = async ({email}: {email: string}) => {
  //ES8
  try {
    await sendGridEmail(
      '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',
      email,
      'shubham.navale17@comp.sce.edu.in',
      'Your new email from home screen',
      `Hello Buddy`,
    );
    return;
  } catch (error) {
    console.error(error);
  }
};
