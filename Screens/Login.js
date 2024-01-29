import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import MainAppbar from '../components/MainAppbar';

export default function Login() {
  const [FormData, setFormData] = React.useState({
    username: '',
    password: '',
  });
  const [showError, setShowError] = React.useState(false);

  const validateAndSubmit = () => {
    setShowError(true);
    if (FormData.username.length > 0 && FormData.password.length > 8) {
      setFormData({ ...FormData, username: '', password: '' });
      setShowError(false);
    }
  };

  return (
    <>
      <MainAppbar title="Login" />
      <View style={styles.container}>
        <TextInput
          label="Username"
          style={styles.input_field}
          value={FormData.username}
          onChangeText={(text) => setFormData({ ...FormData, username: text })}
          error={FormData.username.length === 0 && showError}
          theme={{
            colors: {
              primary: '#183a37',
            },
          }}
        />
        <TextInput
          label="Password"
          style={styles.input_field}
          keyboardType="visible-password"
          value={FormData.password}
          onChangeText={(text) => setFormData({ ...FormData, password: text })}
          error={FormData.password.length < 8 && showError}
          theme={{
            colors: {
              primary: '#183a37',
            },
          }}
        />
        <Button mode="contained" style={styles.button} onPress={validateAndSubmit}>
          Login
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE0D4',
    justifyContent: 'center',
  },

  input_field: {
    margin: 10,
    marginHorizontal: 40,
    backgroundColor: '#DDB892',
  },

  button: {
    marginHorizontal: 40,
    margin: 10,
    backgroundColor: '#9C6644',
  },
});