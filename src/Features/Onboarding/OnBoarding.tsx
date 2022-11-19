import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

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
      image: '',
      info: 'We want to protect your privacy so we do not store any of you personal details. Instead, we store data with your unique ID so if you leave the business nothing stored can be traced back to you.',
      title: 'Unique ID',
    },
    {
      id: 'notifications',
      image: '',
      info: 'We will keep you up to date with push notifications through this application. We are moving with the times and going digital. Gone are the lengthy paper-based messages.',
      title: 'Notifications',
    },
    {
      id: 'manageYourJobs',
      image: '',
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
      backgroundColor: 'red',
      paddingHorizontal: width * 0.05,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    info: {
      color: '#000099',
      fontSize: 18,
      fontWeight: '400',
    },
    infoContainer: {
      marginHorizontal: width * 0.05,
    },
    footer: {
      color: '#000099',
      fontSize: 18,
      fontWeight: '400',
      textAlign: 'center',
      marginBottom: height * 0.03,
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
                <Text style={styles.title}>Image will go here</Text>
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
      <Text style={styles.footer}>Logo will go here</Text>
    </>
  );
};
