import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Input } from '../assets/components/input/Input';
import { Botao } from '../assets/components/botao/Botao';


export default function Index() {
  return (
    <>
      {/* Logo e imagem de fundo. */}
      <ImageBackground source={require('../assets/images/FundoMapa.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/LogoFindCep.png')} style={styles.logo}></Image>

      </ImageBackground>
      {/* Campo de consulta. */}
      <View style={styles.container}>
        {/* Título. */}
        <Text style={styles.titulo}>Consulte seu CEP</Text>


        {/* Input. */}
        <Input></Input>

        {/* Botão. */}

        <Botao tituloBotao='Consultar'/>

        {/* Card de Informações. */}
      </View>
    </>

  );
}


//Estilos dos meus componentes:
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  logo: {
    width: 100,
    height: 120
  },
  container: {
    flex: 1.5,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40
  },
  titulo: {
    fontSize: 25,


  }


})

