import { colors, fontSize, spacing } from "constants";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";
const ROOT_URL = !isDevelopment
  ? "https://shade-spot.herokuapp.com"
  : "http://127.0.0.1:5000";

async function sendRequest(path, options = {}) {
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
    "Access-Control-Request-Method": "POST",
    "Access-Control-Allow-Origin": "*",
  };
  const response = await fetch(
    `${ROOT_URL}${path}`,
    Object.assign({ method: "POST" }, { headers }, options)
  );
  const data = await response.json();
  if (data.error) {
    if (options.errorHandler) {
      options.errorHandler(data);
    }
  }
  return data;
}

const SignupForm = ({ returnFn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleErrorMessage = (e) => {
    setErrorMessage(e.message);
  };

  const subscribeToNewsletter = ({ email }) => {
    //TODO: FIX REQUEST HANDLERS
    setErrorMessage("");
    return sendRequest("/api/v1/lists/add", {
      body: JSON.stringify({ email }),
      mode: "cors",
      credentials: "include",
      errorHandler: handleErrorMessage,
    });
  };

  const handleSignupPress = async () => {
    const val = await subscribeToNewsletter({ email });
    if (val.status === "subscribed") {
      if (!!returnFn && typeof returnFn === "function") {
        returnFn();
      }
    }
  };

  return (
    <View style={styles.signupFormView}>
      <Text style={styles.textStyles}>
        Find the Coolest Spot at Your Next Event
      </Text>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        mode="flat"
        style={styles.textStyles}
        underlineColor={colors.slate}
        selectionColor={colors.slate}
        onChangeText={setName}
        label="Name"
        value={name}
      />
      <View style={styles.emailContainer}>
        <TextInput
          mode="flat"
          style={styles.textStyles}
          onChangeText={setEmail}
          label="Email"
          value={email}
          onSubmitEditing={() => handleSignupPress()}
        />
        <Button
          icon="send"
          style={styles.sendbutton}
          onPress={() => {
            handleSignupPress();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupFormView: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0,
    padding: spacing.smGap,
    width: "80%",
  },
  textStyles: {
    color: colors.charcoal,
    fontSize: fontSize.fontMd,
    marginVertical: spacing.mdGap,
    backgroundColor: colors.white,
    paddingLeft: 0,
    fontWeight: "800",
    font: "Default",
    width: "100%",
    textAlign: "center",
  },
  errorMessage: {
    color: colors.shadyError,
    fontSize: fontSize.fontMd,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  emailContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default SignupForm;
