import { View, StyleSheet, Text, ScrollView } from "react-native"

export const Card = () => {
    return (
        < ScrollView style={styles.card} showsHorizontalScrollIndicator={false}>
            <View style>
                <View>
                    <Text style={styles.tituloValor}>CEP:</Text>
                    <Text style={styles.valor}>Dado 01</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Logradouro:</Text>
                    <Text style={styles.valor}>Dado 02</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Bairro:</Text>
                    <Text style={styles.valor}>Dado 03</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Estado:</Text>
                    <Text style={styles.valor}>Dado 04</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Setor:</Text>
                    <Text style={styles.valor}>Dado 05</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Lote:</Text>
                    <Text style={styles.valor}>Dado 06</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Tipo:</Text>
                    <Text style={styles.valor}>Dado 07</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Endereço:</Text>
                    <Text style={styles.valor}>Dado 08</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Rua:</Text>
                    <Text style={styles.valor}>Dado 09</Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>Avenida:</Text>
                    <Text style={styles.valor}>Dado 10</Text>
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
        shadowColor: 'rgba(14, 30, 37, 0.32)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.32,
        shadowRadius: 8,
        elevation: 6,
        borderRadius: 7,
        gap: 20
    },
    tituloValor: {
        fontWeight: 600
    }
})