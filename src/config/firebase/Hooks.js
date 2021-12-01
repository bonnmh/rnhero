import {useEffect} from 'react';
import notifee, {AndroidStyle} from '@notifee/react-native';

import {fcmService} from './FCM';

const useRegisterFCM = () => {
  async function onDisplayNotification(notify) {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: `<p style="color: #4caf50;"><b>${notify.title}</span></p></b></p> &#128576;`,
      subtitle: '&#129395;',
      body: `${notify.body} &#127881;!`,
      android: {
        channelId,
        smallIcon: 'ic_launcher',
        color: '#4caf50',
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture:
            'https://firebasestorage.googleapis.com/v0/b/tet2022-36aaa.appspot.com/o/%E2%80%94Pngtree%E2%80%942022%20tiger%20year%20tiger_6352921.png?alt=media&token=d694bd4e-ecc5-4d6f-979c-41a0ed36a40b',
        },
      },
    });
  }
  useEffect(() => {
    const onRegister = token => {
      console.log('[App] onRegister: ', token);
    };

    const onNotification = notify => {
      console.log('[App] onNotification: ', notify);
      onDisplayNotification({
        title: notify.title,
        body: notify.body,
      });
    };

    const onOpenNotification = notify => {
      console.log('[App] onOpenNotification: ', notify);
    };

    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);

    return () => {
      fcmService.unRegister();
    };
  }, []);
};

export {useRegisterFCM};
