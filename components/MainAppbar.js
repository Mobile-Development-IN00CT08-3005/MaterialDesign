import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function MainAppbar(props) {
  return (
    <>
      <Appbar.Header
        mode="center-aligned"
        elevated={true}
        style={{ backgroundColor: '#e7d7c1' }}
      >
        <Appbar.Content
          title={props.title} />
      </Appbar.Header>
    </>
  );
}