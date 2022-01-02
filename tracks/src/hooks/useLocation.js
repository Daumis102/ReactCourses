import { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000, // Update location either every second
            distanceInterval: 10, // or every 10 meters
          },
          callback // we might want to change what useLocation does on receivign location, so will pass the callback from other components
        );
        if (!granted) {
          throw new Error('Location permission not granted');
        }
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }
    return () => {
      if (subscriber) subscriber.remove(); // return a "cleanup" function - every time the useEffect is rerun, this will clean the previous version of it
    };
  }, [shouldTrack, callback]); // rerun only when callback is not referencing the same function anymore (we change the function with useCallback in trackcreateScreen)

  return [err]; // we are using err in TrackCreateScreen, thus  return. We might want to return more things in the future, thus array
};
