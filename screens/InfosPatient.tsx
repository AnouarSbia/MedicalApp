import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const InfosPatient = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const [rectangleTextInput1, setRectangleTextInput1] = useState();
  const [rectangleTextInput2, setRectangleTextInput2] = useState();
  const [motDePasseText, setMotDePasseText] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.infospatient}>
      <Image
        style={styles.infospatientChild}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={styles.materialSymbolsrecentPatienIcon}
        resizeMode="cover"
        source={require("../assets/materialsymbolsrecentpatientoutlinerounded.png")}
      />
      <RNKTextInput
        style={[styles.infospatientItem, styles.infospatientShadowBox]}
        placeholder="Place your text"
        value={rectangleTextInput}
        onChangeText={setRectangleTextInput}
      />
      <RNKTextInput
        style={[styles.infospatientInner, styles.infospatientShadowBox]}
        placeholder="Place your text"
        value={rectangleTextInput1}
        onChangeText={setRectangleTextInput1}
      />
      <RNKTextInput
        style={[styles.rectangleRnktextinput, styles.infospatientShadowBox]}
        placeholder="Place your text"
        value={rectangleTextInput2}
        onChangeText={setRectangleTextInput2}
      />
      <View style={[styles.rectangleView, styles.rectangleShadowBox]} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleShadowBox]}
        onPress={() => navigation.navigate("PatientHome")}
      />
      <Text style={[styles.nom, styles.nomTypo]}>Nom</Text>
      <Text style={[styles.jjmmaaaa, styles.nomTypo]}>JJ/MM/AAAA</Text>
      <TextInput
        style={[styles.exemplegmailcom, styles.motDePassePosition]}
        placeholder="exemple@gmail.com"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
      />
      <RNKTextInput
        style={[styles.motDePasse, styles.motDePassePosition]}
        placeholder="mot de passe"
        value={motDePasseText}
        onChangeText={setMotDePasseText}
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
        textStyle={styles.motDePasseText}
      />
      <Text style={[styles.nomEtPrnom, styles.nomEtPrnomTypo]}>
        Nom et Prénom
      </Text>
      <Text style={[styles.dateDeNaissance, styles.nomEtPrnomTypo]}>
        Date de naissance
      </Text>
      <Text style={[styles.addresseEmail, styles.nomEtPrnomTypo]}>
        Addresse Email
      </Text>
      <Text style={[styles.motDePasse1, styles.nomEtPrnomTypo]}>
        Mot de passe
      </Text>
      <Pressable
        style={styles.sinscrire}
        onPress={() => navigation.navigate("PatientHome")}
      >
        <Text style={[styles.sinscrire1, styles.sinscrire1Typo]}>
          S’inscrire
        </Text>
      </Pressable>
      <Text style={[styles.remplissezVosInformations, styles.sinscrire1Typo]}>
        Remplissez vos Informations
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  motDePasseText: {
    fontFamily: "Poppins_regular",
    color: "rgba(0, 0, 0, 0.4)",
  },
  infospatientShadowBox: {
    width: 353,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_3xs,
    left: 37,
    borderColor: "#d7d7d7",
    position: "absolute",
    backgroundColor: Color.white,
  },
  rectangleShadowBox: {
    height: 60,
    width: 353,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_3xs,
    left: 37,
    position: "absolute",
  },
  nomTypo: {
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: 70,
    position: "absolute",
  },
  motDePassePosition: {
    left: 70,
    position: "absolute",
  },
  nomEtPrnomTypo: {
    color: Color.black,
    left: 51,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  sinscrire1Typo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  infospatientChild: {
    top: 26,
    left: 146,
    width: 135,
    height: 129,
    position: "absolute",
  },
  materialSymbolsrecentPatienIcon: {
    top: 72,
    left: 193,
    width: 42,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  infospatientItem: {
    top: 239,
  },
  infospatientInner: {
    top: 330,
  },
  rectangleRnktextinput: {
    top: 427,
  },
  rectangleView: {
    top: 521,
    borderColor: "#d7d7d7",
    height: 60,
    backgroundColor: Color.white,
  },
  rectanglePressable: {
    top: 657,
    backgroundColor: Color.midnightblue,
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  nom: {
    top: 257,
  },
  jjmmaaaa: {
    top: 348,
  },
  exemplegmailcom: {
    top: 445,
  },
  motDePasse: {
    top: 539,
  },
  nomEtPrnom: {
    top: 215,
  },
  dateDeNaissance: {
    top: 306,
  },
  addresseEmail: {
    top: 403,
  },
  motDePasse1: {
    top: 497,
  },
  sinscrire1: {
    color: Color.white,
  },
  sinscrire: {
    left: 166,
    top: 671,
    position: "absolute",
  },
  remplissezVosInformations: {
    top: 162,
    left: 82,
    color: Color.midnightblue,
    position: "absolute",
  },
  infospatient: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default InfosPatient;
