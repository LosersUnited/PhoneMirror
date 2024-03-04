import React from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';

const CenteredModal = ({ visible, closeModal, children }: React.PropsWithChildren<{ visible: boolean, closeModal: () => any }>) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark overlay
    },
    modalView: {
        backgroundColor: '#333', // dark background color
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        color: '#fff', // white text color
        fontSize: 18,
    },
});

export default CenteredModal;
