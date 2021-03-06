import { IMLocalized } from './Core/localization/IMLocalization';
import AppStyles from './DynamicAppStyles';
import { setI18nConfig } from './Core/localization/IMLocalization';
import { BannerAdSize } from '@react-native-firebase/admob';

setI18nConfig();

const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForPhoneNumber = /\d{9}$/;

const ListingAppConfig = {
  isSMSAuthEnabled: true,
  isDelayedLoginEnabled: false,
  appIdentifier: 'rn-ulistings-android',
  adMobConfig: {
    adBannerSize: BannerAdSize.BANNER,
    adUnitID: 'ca-app-pub-5357234145673650/6960322184',
  },

  onboardingConfig: {
    delayedLoginTitle: IMLocalized('Sign In To Your Account'),
    delayedLoginCaption: IMLocalized(
      'Sign in or sign up to access this feature.',
    ),
    welcomeTitle: IMLocalized('Welcome to RNChat'),
    welcomeCaption: IMLocalized(
      'Use this app to interact with your favourite characters',
    ),
    walkthroughScreens: [
      {
        icon: require('../assets/icons/chat.png'),
        title: IMLocalized('Chat'),
        description: IMLocalized(
          'Communicate with your virtual characters in real-time.',
        ),
      },
      {
        icon: require('../assets/icons/notification.png'),
        title: IMLocalized('Get Notified'),
        description: IMLocalized(
          'Waked up every morning by your favourite buddy!',
        ),
      },
    ],
  },

  tabIcons: {
    Home: {
      focus: AppStyles.iconSet.homefilled,
      unFocus: AppStyles.iconSet.homeUnfilled,
    },
    Categories: {
      focus: AppStyles.iconSet.collections,
      unFocus: AppStyles.iconSet.collections,
    },
    Messages: {
      focus: AppStyles.iconSet.commentFilled,
      unFocus: AppStyles.iconSet.commentUnfilled,
    },
    Search: {
      focus: AppStyles.iconSet.search,
      unFocus: AppStyles.iconSet.search,
    },
  },
  reverseGeoCodingAPIKey: 'AIzaSyCDeWXVrJxUCRQlpcWK2JJQSB-kFVjCqlM',
  tosLink: 'https://www.instamobile.io/eula-instachatty/',
  isUsernameFieldEnabled: false,
  smsSignupFields: [
    {
      displayName: IMLocalized('First Name'),
      type: 'text',
      editable: true,
      regex: regexForNames,
      key: 'firstName',
      placeholder: 'First Name',
    },
    {
      displayName: IMLocalized('Last Name'),
      type: 'text',
      editable: true,
      regex: regexForNames,
      key: 'lastName',
      placeholder: 'Last Name',
    },
    {
      displayName: IMLocalized('Username'),
      type: 'text',
      editable: true,
      regex: regexForNames,
      key: 'username',
      placeholder: 'Username',
    },
  ],
  signupFields: [
    {
      displayName: IMLocalized('First Name'),
      type: 'text',
      editable: true,
      regex: regexForNames,
      key: 'firstName',
      placeholder: 'First Name',
    },
    {
      displayName: IMLocalized('Last Name'),
      type: 'text',
      editable: true,
      regex: regexForNames,
      key: 'lastName',
      placeholder: 'Last Name',
    },
    {
      displayName: IMLocalized('Username'),
      type: 'text',
      editable: true,
      regex: regexForNames,
      key: 'username',
      placeholder: 'Username',
    },
    {
      displayName: IMLocalized('E-mail Address'),
      type: 'text',
      editable: true,
      regex: regexForNames,
      key: 'email',
      placeholder: 'E-mail Address',
      autoCapitalize: 'none',
    },
    {
      displayName: IMLocalized('Password'),
      type: 'default',
      secureTextEntry: true,
      editable: true,
      regex: regexForNames,
      key: 'password',
      placeholder: 'Password',
      autoCapitalize: 'none',
    },
  ],
  editProfileFields: {
    sections: [
      {
        title: IMLocalized('PUBLIC PROFILE'),
        fields: [
          {
            displayName: IMLocalized('First Name'),
            type: 'text',
            editable: true,
            regex: regexForNames,
            key: 'firstName',
            placeholder: 'Your first name',
          },
          {
            displayName: IMLocalized('Last Name'),
            type: 'text',
            editable: true,
            regex: regexForNames,
            key: 'lastName',
            placeholder: 'Your last name',
          },
        ],
      },
      {
        title: IMLocalized('PRIVATE DETAILS'),
        fields: [
          {
            displayName: IMLocalized('E-mail Address'),
            type: 'text',
            editable: true,
            key: 'email',
            placeholder: 'Your email address',
          },
          {
            displayName: IMLocalized('Phone Number'),
            type: 'text',
            editable: true,
            regex: regexForPhoneNumber,
            key: 'phone',
            placeholder: 'Your phone number',
          },
        ],
      },
    ],
  },
  userSettingsFields: {
    sections: [
      {
        title: IMLocalized('GENERAL'),
        fields: [
          {
            displayName: IMLocalized('Allow Push Notifications'),
            type: 'switch',
            editable: true,
            key: 'push_notifications_enabled',
            value: true,
          },
          {
            ...(Platform.OS === 'ios'
              ? {
                displayName: IMLocalized('Enable Face ID / Touch ID'),
                type: 'switch',
                editable: true,
                key: 'face_id_enabled',
                value: false,
              }
              : {}),
          },
        ],
      },
      {
        title: '',
        fields: [
          {
            displayName: IMLocalized('Save'),
            type: 'button',
            key: 'savebutton',
          },
        ],
      },
    ],
  },
  contactUsFields: {
    sections: [
      {
        title: IMLocalized('CONTACT'),
        fields: [
          {
            displayName: IMLocalized('Address'),
            type: 'text',
            editable: false,
            key: 'contacus',
            value: '74 Verdemont, Blanchardstown',
          },
          {
            displayName: IMLocalized('E-mail us'),
            value: 'linj1@tcd.ie',
            type: 'text',
            editable: false,
            key: 'email',
            placeholder: 'Your email address',
          },
        ],
      },
      {
        title: '',
        fields: [
          {
            displayName: IMLocalized('Call Us'),
            type: 'button',
            key: 'savebutton',
          },
        ],
      },
    ],
  },
  contactUsPhoneNumber: '+353-834054779',
  homeConfig: {
    mainCategoryID: 'KVO55A8tnptPnNd9NHp4',
    mainCategoryName: 'Characters',
  },

  bookingConfig: {
    buttonLabel: IMLocalized('Reserve'),
    type: 'airbnb',
  },
};

export default ListingAppConfig;
