import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Medecin1 = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.medecin1}>
      <View style={styles.component2}>
        <View style={styles.component2Child} />
        <Image
          style={[styles.materialSymbolswifiIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolswifi.png")}
        />
        <Image
          style={[styles.icbaselineNetworkCellIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icbaselinenetworkcell.png")}
        />
        <Text style={styles.text}>9:41</Text>
      </View>
      <View style={[styles.fa6Solidlungs, styles.lineIconLayout]} />
      <Text style={styles.bienvenueDrmohamed}>{`Bienvenue, Dr.Mohamed `}</Text>
      <Image
        style={[styles.materialSymbolsbatteryHorizIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/materialsymbolsbatteryhoriz075sharp.png")}
      />
      <Image
        style={[styles.mingcutenotificationLineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/mingcutenotificationline.png")}
      />
      <View style={[styles.medecin1Child, styles.medecin1Position]} />
      <View style={[styles.medecin1Item, styles.medecin1Position]} />
      <Text style={styles.demandesDeRdv}>Demandes de RDV</Text>
      <Pressable
        style={styles.dossierMalades}
        onPress={() => navigation.navigate("Medecin2")}
      >
        <Text style={styles.dossierMalades1}>Dossier malades</Text>
      </Pressable>
      <RNKTextInput
        style={[styles.medecin1Inner, styles.medecin1InnerShadowBox]}
        placeholder="Place your text"
        value={rectangleTextInput}
        onChangeText={setRectangleTextInput}
      />
      <Text style={styles.rechercherPatientPar}>
        Rechercher patient par nom
      </Text>
      <Image
        style={[styles.risearch2LineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/risearch2line.png")}
      />
      <View style={[styles.rectangleView, styles.medecin1InnerShadowBox]} />
      <Text style={[styles.lundi10042023, styles.text1Typo]}>
        Lundi 10/04/2023
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>10:00-11:00</Text>
      <Text style={[styles.gharbiSamia, styles.gharbiSamiaTypo]}>
        Gharbi Samia
      </Text>
      <Text style={[styles.gharbisamiagmailcom, styles.gharbiSamiaTypo]}>
        gharbi.Samia@gmail.com
      </Text>
      <Text style={[styles.nomEtPrnom, styles.nomEtPrnomTypo]}>
        Nom et Prénom
      </Text>
      <Text style={[styles.addresseEmail, styles.heureSuggrTypo]}>
        Addresse Email
      </Text>
      <Text style={[styles.dateDeRendzVous, styles.heureSuggrTypo]}>
        Date de rendz-vous
      </Text>
      <Text style={[styles.dateDeNaissance, styles.nomEtPrnomTypo]}>
        Date de naissance
      </Text>
      <Text style={[styles.heureSuggr, styles.heureSuggrTypo]}>
        Heure suggéré
      </Text>
      <View style={[styles.medecin1Child1, styles.medecin1ChildLayout]} />
      <View style={[styles.medecin1Child2, styles.medecin1ChildLayout]} />
      <Text style={[styles.confirmer, styles.modiferTypo]}>Confirmer</Text>
      <Text style={[styles.modifer, styles.modiferTypo]}>Modifer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "34.04%",
    top: "31.91%",
    width: "3.74%",
    height: "34.04%",
    position: "absolute",
    overflow: "hidden",
  },
  lineIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  medecin1Position: {
    height: 2,
    top: 167,
    position: "absolute",
  },
  medecin1InnerShadowBox: {
    width: 353,
    borderColor: "#d7d7d7",
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_3xs,
    left: 35,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  text1Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  gharbiSamiaTypo: {
    left: 163,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  nomEtPrnomTypo: {
    left: 58,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  heureSuggrTypo: {
    left: 57,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  medecin1ChildLayout: {
    height: 28,
    width: 97,
    borderRadius: Border.br_9xs,
    top: 434,
    position: "absolute",
  },
  modiferTypo: {
    top: 439,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  component2Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  materialSymbolswifiIcon: {
    right: "14.49%",
    left: "81.78%",
  },
  icbaselineNetworkCellIcon: {
    right: "21.03%",
    left: "75.23%",
  },
  text: {
    top: "21.28%",
    left: "5.61%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.cairoMedium,
    textAlign: "left",
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
  },
  component2: {
    top: 0,
    left: 0,
    width: 428,
    height: 47,
    position: "absolute",
  },
  fa6Solidlungs: {
    top: -34,
    left: -47,
  },
  bienvenueDrmohamed: {
    top: 75,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 24,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  materialSymbolsbatteryHorizIcon: {
    top: 12,
    left: 381,
  },
  mingcutenotificationLineIcon: {
    top: 80,
    left: 376,
  },
  medecin1Child: {
    width: 190,
    backgroundColor: Color.darkturquoise,
    left: 24,
    top: 167,
  },
  medecin1Item: {
    left: 214,
    backgroundColor: Color.gainsboro,
    width: 189,
  },
  demandesDeRdv: {
    top: 173,
    left: 41,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    position: "absolute",
  },
  dossierMalades1: {
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontWeight: "500",
  },
  dossierMalades: {
    left: 239,
    top: 170,
    position: "absolute",
  },
  medecin1Inner: {
    top: 228,
  },
  rechercherPatientPar: {
    top: 242,
    left: 63,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray_100,
    textAlign: "left",
    position: "absolute",
  },
  risearch2LineIcon: {
    top: 239,
    left: 350,
  },
  rectangleView: {
    top: 301,
    height: 179,
  },
  lundi10042023: {
    left: 194,
    top: 385,
  },
  text1: {
    left: 161,
    top: 407,
  },
  gharbiSamia: {
    top: 315,
  },
  gharbisamiagmailcom: {
    top: 359,
  },
  nomEtPrnom: {
    top: 314,
  },
  addresseEmail: {
    top: 361,
  },
  dateDeRendzVous: {
    top: 385,
  },
  dateDeNaissance: {
    top: 339,
  },
  heureSuggr: {
    top: 407,
  },
  medecin1Child1: {
    left: 273,
    backgroundColor: Color.darkturquoise,
  },
  medecin1Child2: {
    left: 168,
    borderColor: "#21b2c6",
    borderWidth: 1,
    borderStyle: "solid",
    height: 28,
    width: 97,
    borderRadius: Border.br_9xs,
    top: 434,
    backgroundColor: Color.white,
  },
  confirmer: {
    left: 293,
    color: Color.white,
  },
  modifer: {
    left: 191,
    color: Color.black,
    top: 439,
  },
  medecin1: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Medecin1;
