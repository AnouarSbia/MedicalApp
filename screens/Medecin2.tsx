import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Medecin2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.medecin2, styles.medecin2Layout]}>
      <View style={styles.component2}>
        <View style={[styles.component2Child, styles.medecin2Layout]} />
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
        <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
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
      <View style={[styles.medecin2Child, styles.medecin2Position]} />
      <View style={[styles.medecin2Item, styles.medecin2Position]} />
      <Text style={[styles.demandesDeRdv, styles.demandesDeRdvTypo]}>
        Demandes de RDV
      </Text>
      <Text style={[styles.dossierMalades, styles.demandesDeRdvTypo]}>
        Dossier malades
      </Text>
      <View style={[styles.medecin2Inner, styles.medecin2InnerShadowBox]} />
      <Text style={[styles.rechercherPatientPar, styles.textFlexBox]}>
        Rechercher patient par nom
      </Text>
      <Image
        style={[styles.risearch2LineIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/risearch2line.png")}
      />
      <View style={[styles.rectangleView, styles.medecin2InnerShadowBox]} />
      <Pressable
        style={[styles.gharbiSamia, styles.agePosition]}
        onPress={() => navigation.navigate("Medecin3")}
      >
        <Text style={[styles.gharbiSamia1, styles.ageTypo]}>Gharbi Samia</Text>
      </Pressable>
      <Text style={[styles.age, styles.ageTypo]}>Age</Text>
      <Image
        style={[styles.icroundArrowForwardIosIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/icroundarrowforwardios.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Medecin4")}
      />
      <Pressable
        style={[
          styles.ajouterUnPatientContainer,
          styles.ajouterUnPatientContainerPosition,
        ]}
        onPress={() => navigation.navigate("Medecin4")}
      >
        <Text style={[styles.ajouterUnPatient, styles.demandesDeRdvTypo]}>
          Ajouter un patient
        </Text>
      </Pressable>
      <Image
        style={[
          styles.icbaselineAddCircleOutlineIcon,
          styles.ajouterUnPatientContainerPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/icbaselineaddcircleoutline.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  medecin2Layout: {
    width: "100%",
    backgroundColor: Color.white,
  },
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
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  lineIconLayout: {
    height: 24,
    width: 24,
  },
  medecin2Position: {
    height: 2,
    top: 167,
    position: "absolute",
  },
  demandesDeRdvTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontWeight: "500",
  },
  medecin2InnerShadowBox: {
    width: 353,
    borderWidth: 1,
    borderColor: "#d7d7d7",
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
    left: 35,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iconPosition: {
    left: 350,
    position: "absolute",
    overflow: "hidden",
  },
  agePosition: {
    top: 332,
    position: "absolute",
  },
  ageTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  ajouterUnPatientContainerPosition: {
    top: 833,
    position: "absolute",
  },
  component2Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
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
    color: Color.black,
    fontWeight: "500",
    textAlign: "left",
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
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
    overflow: "hidden",
  },
  mingcutenotificationLineIcon: {
    top: 80,
    left: 376,
    position: "absolute",
    overflow: "hidden",
  },
  medecin2Child: {
    backgroundColor: Color.gainsboro,
    width: 190,
    left: 24,
    top: 167,
  },
  medecin2Item: {
    left: 214,
    backgroundColor: Color.darkturquoise,
    width: 189,
  },
  demandesDeRdv: {
    top: 173,
    left: 41,
    color: Color.gray_100,
    position: "absolute",
  },
  dossierMalades: {
    top: 170,
    left: 239,
    color: Color.black,
    position: "absolute",
  },
  medecin2Inner: {
    top: 238,
    height: 45,
  },
  rechercherPatientPar: {
    top: 252,
    left: 63,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray_100,
  },
  risearch2LineIcon: {
    top: 249,
    height: 24,
    width: 24,
  },
  rectangleView: {
    top: 311,
    height: 61,
  },
  gharbiSamia1: {
    color: Color.black,
  },
  gharbiSamia: {
    left: 57,
  },
  age: {
    left: 202,
    top: 332,
    position: "absolute",
    color: Color.gray_100,
  },
  icroundArrowForwardIosIcon: {
    top: 334,
    width: 22,
    height: 22,
  },
  rectanglePressable: {
    top: 822,
    left: 114,
    borderRadius: 8,
    backgroundColor: Color.midnightblue,
    width: 209,
    height: 49,
    position: "absolute",
  },
  ajouterUnPatient: {
    color: Color.white,
  },
  ajouterUnPatientContainer: {
    left: 164,
  },
  icbaselineAddCircleOutlineIcon: {
    left: 136,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  medecin2: {
    flex: 1,
    height: 926,
    overflow: "hidden",
  },
});

export default Medecin2;
