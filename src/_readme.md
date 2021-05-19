# rename project name
## https://stackoverflow.com/questions/34794679/change-app-name-in-react-native/34798296



# link assets
# yarn react-native link


# build android
# android > gradlew assembleRelease

# clean cache in android
# gradlew cleanBuildCache


# Integration of custom SDK to RND App - appMain is the sdk 
# (1) Add custom sdk as a module
# (2) In the setting.gradle add the name of sdk like this include ':app', ':appMain' 
# (3) In the dependencies (build.gradle) add the sdk -- implementation project(':appMain')


<!-- android native build as react native package -->
# https://cmichel.io/how-to-create-react-native-android-library


# React native lifecycle

<!-- useMemo(() => {
    // componentWillMount events
    
  },[]);
  
  useEffect(() => {
    // componentDidMount events

    return () => {
      // componentWillUnmount events
      
    }
  }, []); -->

  

  # adb wireless issue
  # https://stackoverflow.com/questions/37267335/android-studio-wireless-adb-error-10061



  # Once installing packages to mac using npm
  # need to go to ios folder and do this command -> pod install