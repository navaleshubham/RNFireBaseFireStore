import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import PushNotification from 'react-native-push-notification';
import {sendEmailToUser} from '../../Auth/verification';

export const Home = props => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const userInfo = props?.route?.params?.userInfo;
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-around',
      flexDirection: 'column',
      flex: 1,
    },
    buttonList: {
      alignSelf: 'center',
      marginHorizontal: width * 0.02,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    button: {
      backgroundColor: '#000099',
      marginVertical: height * 0.01,
      height: 100,
      justifyContent: 'space-around',
      maxWidth: 550,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
    },
  });
  const scheduleNotification = () => {
    PushNotification.localNotificationSchedule({
      message: 'My Schedule Notification Message',
      title: 'Schedule Notification',
      date: new Date(Date.now() + 60 * 1000),
    });
  };
  const localNotification = () => {
    PushNotification.localNotification({
      message: 'My Schedule Notification Message',
      title: 'Immediate Notification',
    });
  };
  const sendEmail = async () => {
    await sendEmailToUser({email: userInfo?.email});
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonList}>
        <Button style={styles.button} onPress={scheduleNotification}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>
              Generate Notification {'\n'} (15 minutes for now)
            </Text>
          </View>
        </Button>
        <Button style={styles.button} onPress={localNotification}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>
              Create Notification {'\n'} (this will display immediately)
            </Text>
          </View>
        </Button>
        <Button style={styles.button} onPress={sendEmail}>
          <Text style={styles.buttonLabel}>Send email</Text>
        </Button>
      </View>
    </View>
  );
};
