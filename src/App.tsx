import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import CenteredModal from "./components/centered-modal";

export default function App() {
    return (
        <View style={styles.container}>
            <CenteredModal visible={true} closeModal={() => undefined}>
                <Text style={styles.title}>
                    Hello world
                </Text>
            </CenteredModal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 16,
        marginTop: 30,
    },
});
