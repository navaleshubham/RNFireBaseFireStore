import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import onBoardingLogo from '../../Assets/onBoardingLogo.png';
import logoIcon from '../../Assets/logo.png';
export const OnBoarding = ({
  onDoneOrSkip,
}: {
  onDoneOrSkip: (newState: boolean) => void;
}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const slides = [
    {
      id: 'uniqueID',
      image: onBoardingLogo,
      info: 'We want to protect your privacy so we do not store any of you personal details. Instead, we store data with your unique ID so if you leave the business nothing stored can be traced back to you.',
      title: 'Unique ID',
    },
    {
      id: 'notifications',
      image: logoIcon,
      info: 'We will keep you up to date with push notifications through this application. We are moving with the times and going digital. Gone are the lengthy paper-based messages.',
      title: 'Notifications',
    },
    {
      id: 'manageYourJobs',
      image: onBoardingLogo,
      info: 'Manage all of your jobs one place and utilise our mobile text service to text clients via WhatsApp, Facebook Messenger and many other platform directly from this application.',
      title: 'Manage your jobs',
    },
  ];
  const styles = StyleSheet.create({
    button: {
      color: '#000099',
      fontSize: 20,
      fontWeight: '500',
    },
    title: {
      color: '#000099',
      fontSize: 22,
      fontWeight: '800',
      textAlign: 'center',
      marginVertical: height * 0.05,
    },
    image: {
      marginTop: height * 0.05,
      fontSize: 22,
      fontWeight: '700',
      alignSelf: 'center',
      height: 150,
      paddingHorizontal: width * 0.05,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    info: {
      color: '#000099',
      fontSize: 18,
      fontWeight: '400',
    },
    infoImage: {
      height: height * 0.06,
      width: width * 0.7,
      alignSelf: 'center',
    },
    infoContainer: {
      marginHorizontal: width * 0.05,
    },
    footer: {
      height: height * 0.06,
      width: width * 0.9,
      alignSelf: 'center',
    },
  });
  return (
    <>
      <AppIntroSlider
        data={slides}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.infoContainer}>
              <View style={styles.image}>
                <Image source={item.image} style={styles.infoImage} />
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.info}>{item.info}</Text>
            </View>
          );
        }}
        showNextButton
        showSkipButton
        renderNextButton={() => <Text style={styles.button}>Next</Text>}
        renderDoneButton={() => <Text style={styles.button}>Done</Text>}
        renderSkipButton={() => <Text style={styles.button}>Skip</Text>}
        onDone={() => onDoneOrSkip(false)}
        onSkip={() => onDoneOrSkip(false)}
      />
      <Image source={onBoardingLogo} style={styles.footer} />
    </>
  );
};
