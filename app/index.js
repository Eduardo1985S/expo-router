import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, Tudo bem?</Text>
            <Text style={styles.title}>Seja bem Vindo a Home</Text>
            
            <Link href="/about" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Ir para Sobre</Text>
                </Pressable>
            </Link>

            <Link href="/termos">Termos de uso</Link>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
});