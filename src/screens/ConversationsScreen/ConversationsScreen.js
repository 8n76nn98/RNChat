import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { useSelector } from 'react-redux';
import { IMConversationListView } from '../../Core/chat';
import DynamicAppStyles from '../../DynamicAppStyles';
import { IMLocalized } from '../../Core/localization/IMLocalization';
import dynamicStyles from './styles';
import { DelayedLoginScreen } from '../../Core/onboarding';

function ConversationsScreen(props) {
  const currentUser = useSelector((state) => state.auth.user);

  const appConfig = props.route?.params?.appConfig || props.appConfig;
  const authManager = props.route?.params?.authManager || props.authManager;
  const appStyles = props.route?.params?.appStyles || props.appStyles;

  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  let currentTheme = DynamicAppStyles.navThemeConstants[colorScheme];

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: IMLocalized('Chats'),
      headerStyle: {
        backgroundColor: currentTheme.backgroundColor,
        borderBottomColor: currentTheme.hairlineColor,
      },
      headerTintColor: currentTheme.fontColor,
    });
  }, []);

  const onEmptyStatePress = () => {
    props.navigation.navigate('Categories');
  };

  const emptyStateConfig = {
    title: IMLocalized('No Chats'),
    description: IMLocalized(
      'You can contact all these characters through the message box up right. Your conversations with them will show up here.',
    ),
    buttonName: IMLocalized('Browse Characters'),
    onPress: () => {
      onEmptyStatePress();
    },
  };

  if (!currentUser?.id) {
    return  (
      <DelayedLoginScreen 
        authManager={authManager}
        appStyles={appStyles}
        appConfig={appConfig}
        navigation={props.navigation}
      />
    );
  }

  return (
    <View style={styles.container}>
      <IMConversationListView
        navigation={props.navigation}
        appStyles={DynamicAppStyles}
        emptyStateConfig={emptyStateConfig}
      />
    </View>
  );
}

export default ConversationsScreen;
