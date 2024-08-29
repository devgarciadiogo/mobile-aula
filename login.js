import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'Diogo' && password === '28012023') {
            Alert.alert('Usuário Logado', 'Parabéns!!!');
        } else {
            Alert.alert('Erro de Login', 'Usuário ou Senha Inválidos!!!');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome do usuário"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}  // Corrigido para 'style'
                placeholder="Senha do Usuário"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true} // Adicionado para esconder a senha
            />
            <Button title="Logar" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '25%', // Ajustado para ocupar mais espaço na tela
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,  // Corrigido para 'borderWidth'
        borderColor: '#ccc',
    },
});

export default Login;

