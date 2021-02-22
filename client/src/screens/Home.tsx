import Modal from "components/Modal";
import SignupForm from "components/SignupForm";
import { colors, fontSize, spacing } from "constants";
import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import DoubleClick from "react-native-double-tap";
import { Text, Searchbar } from "react-native-paper";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShowSignupModal = () => {
    setShowModal(true);
  };

  const handleHideSignupModal = () => {
    setShowModal(false);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.mainLogo}
        source={require("../../assets/img/ShadeSpotLogoLight.png")}
      />
      <Searchbar
        style={styles.searchBar}
        inputStyle={styles.searchBarInput}
        searchAccessibilityLabel="Search for event or venue"
        icon={null}
        placeholder="Look for your event or venue"
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholderTextColor={colors.tertiaryGrey}
      />
      <DoubleClick
        doubleTap={() => {
          handleShowSignupModal();
        }}
      >
        <Text style={styles.title}>
          Find The Shadiest Spot At Your Next Event
        </Text>
      </DoubleClick>
      <Modal
        style={styles.modalStyle}
        isOpen={showModal}
        closeFn={handleHideSignupModal}
      >
        <SignupForm />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: "100%",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%",
  },
  title: {
    color: colors.darkestGrey,
    fontSize: fontSize.fontXL,
    fontWeight: "900",
    maxWidth: 240,
    lineHeight: fontSize.fontXL * 1.5,
    textAlign: "center",
    marginVertical: 16,
  },
  searchBar: {
    backgroundColor: colors.offWhite,
    shadowOpacity: 0.24,
    shadowColor: colors.darkestGrey,
    shadowRadius: spacing.mdGap,
    shadowOffset: { width: 0, height: 0 },
    fontSize: fontSize.fontMd,
    textAlign: "center",
    borderRadius: 48,
    minWidth: 320,
    maxWidth: 600,
    marginVertical: 16,
  },
  searchBarInput: {
    color: colors.darkestGrey,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },
  mainLogo: {
    width: 400,
    height: 200,
    marginVertical: 16,
  },
  modalStyle: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
