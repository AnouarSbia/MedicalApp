import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const InfosMedecin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.infosmedecin}>
      <Image
        style={styles.infosmedecinChild}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <View style={[styles.infosmedecinItem, styles.rectangleChildShadowBox]} />
      <View
        style={[styles.infosmedecinInner, styles.rectangleChildShadowBox]}
      />
      <View style={[styles.rectangleView, styles.rectangleChildShadowBox]} />
      <View
        style={[styles.infosmedecinChild1, styles.rectangleChildShadowBox]}
      />
      <View
        style={[styles.infosmedecinChild2, styles.rectangleChildShadowBox]}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleChildShadowBox]}
        onPress={() => navigation.navigate("Medecin1")}
      />
      <Text style={[styles.nom, styles.exemplegmailcomTypo]}>Nom</Text>
      <Text style={[styles.text, styles.textPosition]}>--</Text>
      <Text style={[styles.exemplegmailcom, styles.exemplegmailcomTypo]}>
        exemple@gmail.com
      </Text>
      <Text style={[styles.exemplegmailcom1, styles.exemplegmailcomTypo]}>
        exemple@gmail.com
      </Text>
      <Text style={[styles.motDePasse, styles.exemplegmailcomTypo]}>
        mot de passe
      </Text>
      <Text style={[styles.nomEtPrnom, styles.tlphoneTypo]}>Nom et Prénom</Text>
      <Text style={[styles.spcialite, styles.tlphoneTypo]}>Spécialitée</Text>
      <Text style={[styles.tlphone, styles.tlphoneTypo]}>Téléphone</Text>
      <Text style={[styles.addreseeEmail, styles.tlphoneTypo]}>
        Addresee Email
      </Text>
      <Text style={[styles.motDePasse1, styles.tlphoneTypo]}>Mot de passe</Text>
      <Text style={[styles.sinscrire, styles.sinscrireTypo]}>S’inscrire</Text>
      <Text style={[styles.remplissezVosInformations, styles.sinscrireTypo]}>
        Remplissez vos Informations
      </Text>
      <Image
        style={styles.healthiconsdoctorMaleOutlin}
        resizeMode="cover"
        source={require("../assets/healthiconsdoctormaleoutline.png")}
      />
      <Image
        style={[styles.materialSymbolskeyboardArroIcon, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/materialsymbolskeyboardarrowdownrounded.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleChildShadowBox: {
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
    position: "absolute",
  },
  exemplegmailcomTypo: {
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  textPosition: {
    top: 538,
    position: "absolute",
  },
  tlphoneTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  sinscrireTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  infosmedecinChild: {
    top: 26,
    left: 146,
    width: 135,
    height: 129,
    position: "absolute",
  },
  infosmedecinItem: {
    top: 239,
    borderColor: "#d7d7d7",
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
    backgroundColor: Color.white,
    left: 37,
  },
  infosmedecinInner: {
    top: 520,
    borderColor: "#d7d7d7",
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
    backgroundColor: Color.white,
    left: 37,
  },
  rectangleView: {
    top: 422,
    borderColor: "#d7d7d7",
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
    backgroundColor: Color.white,
    left: 37,
  },
  infosmedecinChild1: {
    top: 327,
    left: 38,
    borderColor: "#d7d7d7",
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
    backgroundColor: Color.white,
  },
  infosmedecinChild2: {
    top: 618,
    borderColor: "#d7d7d7",
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
    backgroundColor: Color.white,
    left: 37,
  },
  rectanglePressable: {
    top: 770,
    backgroundColor: Color.midnightblue,
    borderColor: "rgba(0, 0, 0, 0.15)",
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
  },
  nom: {
    top: 257,
    left: 70,
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text: {
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: 70,
  },
  exemplegmailcom: {
    top: 440,
    left: 70,
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  exemplegmailcom1: {
    top: 345,
    left: 71,
    position: "absolute",
  },
  motDePasse: {
    top: 636,
    left: 70,
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  nomEtPrnom: {
    top: 215,
    left: 51,
    color: Color.black,
  },
  spcialite: {
    top: 496,
    left: 51,
    color: Color.black,
  },
  tlphone: {
    top: 398,
    left: 51,
    color: Color.black,
  },
  addreseeEmail: {
    top: 303,
    left: 52,
  },
  motDePasse1: {
    top: 594,
    left: 51,
    color: Color.black,
  },
  sinscrire: {
    top: 784,
    left: 166,
    color: Color.white,
  },
  remplissezVosInformations: {
    top: 162,
    left: 82,
    color: Color.midnightblue,
  },
  healthiconsdoctorMaleOutlin: {
    top: 67,
    left: 189,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  materialSymbolskeyboardArroIcon: {
    left: 352,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  infosmedecin: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default InfosMedecin;
