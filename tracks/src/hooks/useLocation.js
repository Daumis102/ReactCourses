import { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubsriber] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      const sub = await watchPositionAsync(
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
      setSubsriber(sub);
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubsriber(null);
    }
  }, [shouldTrack]);

  return [err]; // we are using err in TrackCreateScreen, thus  return. We might want to return more things in the future, thus array
};