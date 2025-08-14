import { View, StyleSheet, Text, ScrollView } from "react-native"

export const Card = ({ cep, logradouro, bairro, estado}) => {
    return (
        < ScrollView style={styles.card} showsHorizontalScrollIndicator={false}>
            <View style>
                <View>
                    <Text style={styles.tituloValor}>CEP:</Text>
                    <Text style={styles.valor}>{cep}</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Logradouro:</Text>
                    <Text style={styles.valor}>{logradouro}</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Bairro:</Text>
                    <Text style={styles.valor}>{bairro}</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Estado:</Text>
                    <Text style={styles.valor}>{estado}</Text>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    card: {
        width: '70%',
        minHeight: '60%',
        padding: 20,
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: 7,
    },
    tituloValor: {
        fontWeight: 600
    }
})