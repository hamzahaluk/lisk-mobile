/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 600000, // Increased for long-running tests
    },
  },
  apps: {
    ios: {
      debug: {
        name: 'Lisk',
        type: 'ios.app',
        binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/LiskQA.app',
        build: `xcodebuild -workspace ios/Lisk.xcworkspace -scheme LiskQA -sdk iphonesimulator -derivedDataPath ios/build`,
      },
    },
    android: {
      debug: {
        name: 'Lisk',
        type: 'android.apk',
        binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
        build: `cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..`,
      },
    },
  },
  devices: {
    ios: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 15 Pro',
      },
    },
    android: {
      attached: {
        type: 'android.attached',
        device: {
          adbName: '.*',
        },
      },
      emulator: {
        type: 'android.emulator',
        device: {
          avdName: 'Pixel_3a_API_30_x86',
        },
      },
    },
  },
  configurations: {
    'ios.debug': {
      device: 'ios',
      app: 'ios.debug',
    },
    'android.debug': {
      device: 'android.emulator',
      app: 'android.debug',
    },
  },
};
