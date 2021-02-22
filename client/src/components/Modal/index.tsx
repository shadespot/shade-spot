import { colors, fontSize, spacing } from "constants";
import React from "react";
import { Alert, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Modal, IconButton, Portal } from "react-native-paper";

interface Style {
  modalStyle: ViewStyle;
  closeButton: ViewStyle;
  closeText: TextStyle;
}

type ModalWrapperProps = {
  isOpen: boolean;
  closeFn?: () => void;
  children: React.ReactNode;
  styles: Style;
};

const ModalWrapper = (props: ModalWrapperProps) => {
  const { isOpen, closeFn, children } = props;

  return (
    <Portal>
      <Modal
        className="Modal"
        animationType="slide"
        transparent
        visible={isOpen}
        onDismiss={() => {
          closeFn();
        }}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        contentContainerStyle={styles.centeredView}
      >
        <View style={styles.modalView}>
          {children}
          <IconButton
            icon="close"
            color={colors.shadyOranje}
            size={fontSize.fontXL}
            style={styles.closeButton}
            onPress={() => closeFn()}
          />
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create<Style>({
  containerStyles: {
    width: "100%",
    height: "100%",
    position: "fixed",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 0,
    padding: spacing.lgGap,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 2,
    elevation: 5,
    width: "65vw",
    maxWidth: 400,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default ModalWrapper;
