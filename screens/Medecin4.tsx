import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Medecin4 = () => {
  const [nomEtPrnomText, setNomEtPrnomText] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.medecin4}>
      <View style={[styles.component2, styles.component2Layout]}>
        <View style={[styles.component2Child, styles.iconLayout1]} />
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
      <View style={[styles.fa6Solidlungs, styles.fa6SolidlungsLayout]} />
      <Image
        style={[
          styles.materialSymbolsbatteryHorizIcon,
          styles.fa6SolidlungsLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/materialsymbolsbatteryhoriz075sharp.png")}
      />
      <Pressable
        style={[styles.medecin4Child, styles.medecin4ShadowBox]}
        onPress={() => navigation.navigate("PriseRdv")}
      />
      <Text style={[styles.examenClinique, styles.examenTypo]}>
        Examen clinique
      </Text>
      <Text style={[styles.examenComplmentaire, styles.examenTypo]}>
        Examen complémentaire à demander
      </Text>
      <Text style={[styles.sousTraitement, styles.examenTypo]}>
        Sous traitement
      </Text>
      <Text
        style={[styles.informationPersonnels, styles.observationMedicaleTypo]}
      >
        Information Personnels
      </Text>
      <Text
        style={[styles.observationMedicale, styles.observationMedicaleTypo]}
      >
        Observation Medicale
      </Text>
      <View style={styles.medecin4Item} />
      <Text style={styles.ajouter}>Ajouter</Text>
      <View style={[styles.medecin4Inner, styles.medecin4ShadowBox]} />
      <Text style={styles.ajouterUnPatient}>Ajouter un patient</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Medecin2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.medecin4ChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-64.png")}
      />
      <Image
        style={[styles.medecin4Child1, styles.medecin4ChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-64.png")}
      />
      <Image
        style={[styles.medecin4Child2, styles.medecin4ChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-64.png")}
      />
      <Image
        style={[styles.medecin4Child3, styles.medecin4ChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-67.png")}
      />
      <Image
        style={[styles.medecin4Child4, styles.medecin4ChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-67.png")}
      />
      <Image
        style={[styles.medecin4Child5, styles.medecin4ChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-67.png")}
      />
      <RNKTextInput
        style={styles.nomEtPrnom}
        placeholder="Nom et prénom"
        value={nomEtPrnomText}
        onChangeText={setNomEtPrnomText}
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
        textStyle={styles.nomEtPrnomText}
      />
      <Text style={[styles.dateDeNaissance, styles.dateTypo]}>
        Date de naissance
      </Text>
      <Text style={[styles.dateDeConsultation, styles.dateTypo]}>
        Date de consultation
      </Text>
      <Image
        style={[styles.uilcalenderIcon, styles.uilcalenderIconPosition]}
        resizeMode="cover"
        source={require("../assets/uilcalender1.png")}
      />
      <Image
        style={[styles.uilcalenderIcon1, styles.uilcalenderIconPosition]}
        resizeMode="cover"
        source={require("../assets/uilcalender1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nomEtPrnomText: {
    fontFamily: "Poppins_regular",
    color: "rgba(0, 0, 0, 0.4)",
  },
  component2Layout: {
    width: 428,
    left: 0,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fa6SolidlungsLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  medecin4ShadowBox: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    position: "absolute",
    backgroundColor: Color.white,
  },
  examenTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    left: 68,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  observationMedicaleTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 68,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  medecin4ChildLayout1: {
    height: 36,
    width: 292,
    borderRadius: Border.br_9xs,
    left: 68,
    position: "absolute",
  },
  medecin4ChildLayout: {
    height: 90,
    width: 292,
    borderRadius: Border.br_9xs,
    left: 68,
    position: "absolute",
  },
  dateTypo: {
    color: Color.gray_100,
    left: 83,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  uilcalenderIconPosition: {
    left: 328,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  component2Child: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
    height: "100%",
  },
  materialSymbolswifiIcon: {
    right: "14.49%",
    left: "81.78%",
    bottom: "34.04%",
    top: "31.91%",
    width: "3.74%",
    height: "34.04%",
    maxWidth: "100%",
    position: "absolute",
  },
  icbaselineNetworkCellIcon: {
    right: "21.03%",
    left: "75.23%",
    bottom: "34.04%",
    top: "31.91%",
    width: "3.74%",
    height: "34.04%",
    maxWidth: "100%",
    position: "absolute",
  },
  text: {
    top: "21.28%",
    left: "5.61%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.cairoMedium,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    position: "absolute",
  },
  component2: {
    top: 0,
    height: 47,
    position: "absolute",
  },
  fa6Solidlungs: {
    top: -34,
    left: -47,
  },
  materialSymbolsbatteryHorizIcon: {
    top: 12,
    left: 381,
  },
  medecin4Child: {
    top: 123,
    left: 38,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 1,
    width: 353,
    height: 728,
  },
  examenClinique: {
    top: 398,
  },
  examenComplmentaire: {
    top: 528,
  },
  sousTraitement: {
    top: 656,
  },
  informationPersonnels: {
    top: 147,
  },
  observationMedicale: {
    top: 305,
  },
  medecin4Item: {
    top: 799,
    left: 239,
    backgroundColor: Color.darkturquoise,
    width: 121,
    height: 31,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  ajouter: {
    top: 805,
    left: 278,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
    width: 55,
    height: 19,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  medecin4Inner: {
    top: 47,
    height: 58,
    width: 428,
    left: 0,
  },
  ajouterUnPatient: {
    top: 63,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    left: 68,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "7.01%",
    top: "7.45%",
    right: "90.46%",
    bottom: "90.5%",
    width: "2.54%",
    height: "2.05%",
    position: "absolute",
  },
  rectangleIcon: {
    top: 197,
  },
  medecin4Child1: {
    top: 242,
  },
  medecin4Child2: {
    top: 344,
  },
  medecin4Child3: {
    top: 427,
  },
  medecin4Child4: {
    top: 557,
  },
  medecin4Child5: {
    top: 685,
  },
  nomEtPrnom: {
    top: 206,
    left: 83,
    position: "absolute",
  },
  dateDeNaissance: {
    top: 251,
  },
  dateDeConsultation: {
    top: 353,
  },
  uilcalenderIcon: {
    top: 248,
  },
  uilcalenderIcon1: {
    top: 350,
  },
  medecin4: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Medecin4;
