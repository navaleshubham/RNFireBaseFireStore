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
        resolve(true);
      })
      .catch(err => {
        console.log(err);
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
      .then(data => {
        console.log('fdone', data);
        resolve(true);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};
