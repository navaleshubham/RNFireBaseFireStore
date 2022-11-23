import {sendGridEmail} from 'react-native-sendgrid';

export const sendOtpToUser = async ({email}: {email: string}) => {
  const newOtp = Math.floor(100000 + Math.random() * 900000);
  return new Promise((resolve, reject) => {
    sendGridEmail(
      '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',
      email,
      'shubham.navale17@comp.sce.edu.in',
      'Your otp for verification',
      `Your OTP is ${newOtp}`,
    )
      .then(() => {
        console.warn(
          'Adding log in case sendGrid taking time to process the email. Your otp is',
          newOtp,
        );
        resolve(newOtp);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
};

export const sendEmailToUser = async ({email}: {email: string}) => {
  return new Promise((resolve, reject) => {
    sendGridEmail(
      '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',
      email,
      'shubham.navale17@comp.sce.edu.in',
      'Your new email from home screen',
      `Hello Buddy`,
    )
      .then(() => {
        resolve(true);
      })
      .catch(err => {
        reject(err);
      });
  });
};
