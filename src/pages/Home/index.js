import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from "../../context/auth";

export default function Home() {
    const { signOut } = useAuth()
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <FontAwesome name="group" size={25} color="#800080" onPress={signOut}/>
                <FontAwesome5 name="hand-holding-heart" size={25} color="#800080" />
                <Ionicons name="settings-sharp" size={25} color="#800080" />
                <View style={styles.containerInput}>
                    <FontAwesome5 name="search" size={20} color="black" style={{ marginLeft: 10 }} />
                    <TextInput style={styles.input} placeholder="Pesquisar..." />
                </View>
            </View>
            <Text style={styles.titulo}><Text style={{ color: '#800080' }}>Doe</Text> e ajude pessoas</Text>
            <Text style={styles.subtitulo}>Doar é uma prática que ajuda a suprir as necessidades, renovando a esperança e contribuindo para um mundo melhor.</Text>
            <TouchableOpacity style={styles.btnArea}>
                <Text style={styles.btnTxt}>Faça parte dessa ação!</Text>
            </TouchableOpacity>
            <Text style={{ backgroundColor: '#800080', color: '#FFF', padding: 20, marginTop: 40, fontWeight: 'bold', fontSize: 15 }}>Nosso legado é construído não pelo que acumulamos para nós mesmos, mas pelo que compartilhamos com os outros, deixando marcas eternas nas vidas que tocamo</Text>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.btnAreaContainer2}>
                    <Text style={styles.btnTxtContainer2}>Quem somos?</Text>
                </TouchableOpacity>
                <Text style={styles.TxtContainer2}> A Dose de Esperança surgiu da paixão de um grupo dedicado de estudantes, todos nós apaixonados por tecnologia e determinados a fazer a diferença em nossas comunidades. Enquanto estamos no segundo ano do ensino médio, nos especializamos em informática e encontramos uma maneira inovadora de utilizar nossas habilidades para ajudar aqueles que mais precisam. Somos movidos pelo desejo de transformar vidas e criar um impacto positivo em nossa sociedade. Nosso projeto nasceu da percepção das necessidades urgentes enfrentadas por pessoas carentes, especialmente quando se trata de acesso a medicamentos, suplementos e itens de primeiros socorros essenciais para o bem-estar. Foi então que decidimos agir e desenvolvemos um site dedicado a facilitar a doação de medicamentos usados, suprimentos de saúde e muito mais.</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
                <TouchableOpacity style={styles.btnAreaDoar}>
                    <Ionicons name="add-outline" size={20} color="#FFF" />
                    <Text style={styles.btnTxtDoar}>Doar medicamento</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        flexDirection: 'row',
        height: 70,
        borderWidth: 5,
        borderBottomColor: '#800080',
        gap: 15,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    },
    input: {
        height: 30,
        width: 100,
        borderRadius: 50
    },
    containerInput: {
        flexDirection: 'row',
        backgroundColor: '#800080',
        width: 240,
        height: 40,
        gap: 15,
        borderRadius: 50,
        padding: 5,
        alignItems: 'center'
    },
    titulo: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 35,
        paddingLeft: 20,
        marginTop: 10
    },
    subtitulo: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 20,
        marginTop: 10
    },
    btnArea: {
        backgroundColor: '#800080',
        height: 40,
        width: 200,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 20
    },
    btnTxt: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    container2: {
        marginTop: 40,
        margin: 20,
        borderRadius: 10,
        borderColor: '#800080',
        borderWidth: 3,
        padding: 20
    },
    btnAreaContainer2: {
        backgroundColor: '#800080',
        height: 40,
        width: 150,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    btnTxtContainer2: {
        color: '#FFF'
    },
    TxtContainer2: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    btnAreaDoar: {
        flexDirection: 'row',
        backgroundColor: '#800080',
        height: 60,
        width: 210,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    btnTxtDoar: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})