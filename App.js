import React, {useRef, useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';
import AlbumArt from './src/components/AlbumArt';
import Control from './src/components/Control';
import SongDetails from './src/components/SongDetails';
import {TRACKS} from './src/components/tracks-data';

export default function App() {
  const [pause, setPause] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(0);

  const currentTrack = TRACKS[selectedTrack];

  function onPlay() {
    setPause(false);
  }
  function onPause() {
    setPause(true);
  }
  function onNext() {
    if (selectedTrack == TRACKS.length - 1) {
      setSelectedTrack(0);
    } else {
      setSelectedTrack(selectedTrack + 1);
    }
  }

  function onBack() {
    if (selectedTrack == 0) {
      setSelectedTrack(TRACKS.length - 1);
    } else {
      setSelectedTrack(selectedTrack - 1);
    }
  }

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <AlbumArt url={currentTrack.albumArtUrl} />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 1,
          }}>
          <SongDetails
            artistName={currentTrack.artist}
            songName={currentTrack.title}
          />
          <Control {...{pause, onPause, onPlay, onNext, onBack}} />
        </View>

        <Video
          source={{uri: currentTrack.audioUrl}}
          paused={pause}
          audioOnly
          poster={currentTrack.albumArtUrl}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111436',
    flex: 1,
  },
});
