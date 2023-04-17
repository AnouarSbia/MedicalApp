import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PatientHome = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const [rechercherMedecinParText, setRechercherMedecinParText] = useState();
  const navigation = useNavigation();

  return (
    <View style={[styles.patientHome, styles.patientHomeLayout]}>
      <View style={[styles.patientHomeChild, styles.patientShadowBox]} />
      <Pressable
        style={[styles.patientHomeItem, styles.patientShadowBox]}
        onPress={() => navigation.navigate("PriseRdv")}
      />
      <Text style={[styles.addresse, styles.addresseClr]}>{`Addresse `}</Text>
      <Text style={[styles.cardiologue, styles.textPosition1]}>
        Cardiologue
      </Text>
      <Text style={[styles.spcialit, styles.spcialitPosition]}>Spécialité</Text>
      <Text style={[styles.tlphone, styles.textPosition]}>Téléphone</Text>
      <Text style={[styles.text, styles.textPosition]}>038 72 28 21</Text>
      <Text
        style={[styles.aout1955Batiment, styles.textPosition1]}
      >{`20 aout 1955 Batiment 22 `}</Text>
      <RNKTextInput
        style={[styles.patientHomeInner, styles.patientShadowBox]}
        placeholder="Place your text"
        value={rectangleTextInput}
        onChangeText={setRectangleTextInput}
      />
      <RNKTextInput
        style={[styles.rechercherMedecinPar, styles.zonePosition]}
        placeholder="Rechercher medecin par nom,spécialité"
        value={rechercherMedecinParText}
        onChangeText={setRechercherMedecinParText}
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
        textStyle={styles.rechercherMedecinParText}
      />
      <Text style={[styles.zone, styles.zonePosition]}>Zone</Text>
      <Image
        style={[styles.ellipseIcon, styles.patientChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.patientHomeChild1, styles.patientChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.patientHomeChild2, styles.patientChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.patientHomeChild3, styles.patientChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={[styles.patientHomeChild4, styles.patientChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={[styles.biheartPulseFillIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/biheartpulsefill.png")}
      />
      <Text style={[styles.cardiologue1, styles.gnralisteTypo]}>
        cardiologue
      </Text>
      <Text style={[styles.gnraliste, styles.gnralisteTypo]}>généraliste</Text>
      <Text style={[styles.neurologue, styles.gnralisteTypo]}>neurologue</Text>
      <Text style={[styles.pneumologue, styles.gnralisteTypo]}>
        pneumologue
      </Text>
      <Text style={[styles.ophtalmologue, styles.gnralisteTypo]}>
        ophtalmologue
      </Text>
      <Image
        style={[styles.patientHomeChild5, styles.patientHomeChild5Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-17.png")}
      />
      <Image
        style={[styles.healthiconsdoctorMale, styles.patientHomeChild5Position]}
        resizeMode="cover"
        source={require("../assets/healthiconsdoctormale.png")}
      />
      <Image
        style={[styles.materialSymbolslocationOnOIcon, styles.iconPosition3]}
        resizeMode="cover"
        source={require("../assets/materialsymbolslocationonoutline.png")}
      />
      <Image
        style={[styles.risearch2LineIcon, styles.iconPosition3]}
        resizeMode="cover"
        source={require("../assets/risearch2line.png")}
      />
      <View style={styles.component2}>
        <View style={[styles.component2Child, styles.patientHomeLayout]} />
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
        <Text style={[styles.text1, styles.text1Typo]}>9:41</Text>
      </View>
      <Text
        style={[styles.drBeddaiMohamed, styles.addresseClr]}
      >{`Dr. BEDDAI Mohamed `}</Text>
      <View style={[styles.fa6Solidlungs, styles.iconLayout2]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.toutLesSpcialits, styles.text1Typo]}>
        Tout les spécialités
      </Text>
      <Text
        style={[styles.bienvenueSamia, styles.addresseClr]}
      >{`Bienvenue, Samia `}</Text>
      <Image
        style={[styles.iconoirglasses, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/iconoirglasses.png")}
      />
      <Image
        style={[styles.lucidestethoscopeIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/lucidestethoscope.png")}
      />
      <Image
        style={[styles.materialSymbolsbatteryHorizIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/materialsymbolsbatteryhoriz075sharp.png")}
      />
      <Image
        style={[styles.mingcutenotificationLineIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/mingcutenotificationline.png")}
      />
      <Image
        style={styles.icroundArrowForwardIosIcon}
        resizeMode="cover"
        source={require("../assets/icroundarrowforwardios.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rechercherMedecinParText: {
    fontFamily: "Poppins_regular",
    color: "rgba(0, 0, 0, 0.4)",
  },
  patientHomeLayout: {
    width: "100%",
    backgroundColor: Color.white,
  },
  patientShadowBox: {
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
    left: 37,
    position: "absolute",
    backgroundColor: Color.white,
  },
  addresseClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  textPosition1: {
    left: 144,
    fontFamily: FontFamily.poppinsRegular,
  },
  spcialitPosition: {
    top: 464,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textPosition: {
    top: 488,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  zonePosition: {
    left: 65,
    position: "absolute",
  },
  patientChildLayout: {
    height: 65,
    width: 65,
    position: "absolute",
  },
  iconLayout2: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  gnralisteTypo: {
    fontSize: FontSize.size_3xs,
    top: 326,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  patientHomeChild5Position: {
    top: 275,
    position: "absolute",
  },
  iconPosition3: {
    left: 352,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  patientHomeChild: {
    top: 182,
    height: 45,
  },
  patientHomeItem: {
    top: 423,
    height: 140,
  },
  addresse: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    color: Color.black,
    left: 72,
    top: 510,
  },
  cardiologue: {
    fontFamily: FontFamily.poppinsRegular,
    top: 464,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  spcialit: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 72,
  },
  tlphone: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 72,
  },
  text: {
    fontFamily: FontFamily.poppinsRegular,
    left: 144,
  },
  aout1955Batiment: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    fontSize: FontSize.size_xs,
    top: 510,
  },
  patientHomeInner: {
    top: 124,
  },
  rechercherMedecinPar: {
    top: 196,
  },
  zone: {
    top: 139,
    fontSize: FontSize.size_2xs,
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  ellipseIcon: {
    left: 115,
    top: 255,
    height: 65,
    width: 65,
  },
  patientHomeChild1: {
    top: 256,
    left: 355,
  },
  patientHomeChild2: {
    left: 197,
    top: 255,
    height: 65,
    width: 65,
  },
  patientHomeChild3: {
    top: 255,
    height: 65,
    width: 65,
    left: 37,
  },
  patientHomeChild4: {
    left: 276,
    top: 255,
    height: 65,
    width: 65,
  },
  biheartPulseFillIcon: {
    top: 276,
    left: 136,
    position: "absolute",
  },
  cardiologue1: {
    left: 117,
  },
  gnraliste: {
    left: 43,
  },
  neurologue: {
    left: 201,
  },
  pneumologue: {
    left: 276,
  },
  ophtalmologue: {
    left: 358,
  },
  patientHomeChild5: {
    left: 217,
    width: 26,
    height: 26,
  },
  healthiconsdoctorMale: {
    left: 58,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  materialSymbolslocationOnOIcon: {
    top: 136,
  },
  risearch2LineIcon: {
    top: 193,
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
    bottom: "34.04%",
    top: "31.91%",
    width: "3.74%",
    height: "34.04%",
    maxWidth: "100%",
  },
  icbaselineNetworkCellIcon: {
    right: "21.03%",
    left: "75.23%",
    bottom: "34.04%",
    top: "31.91%",
    width: "3.74%",
    height: "34.04%",
    maxWidth: "100%",
  },
  text1: {
    top: "21.28%",
    left: "5.61%",
    fontWeight: "500",
    fontFamily: FontFamily.cairoMedium,
  },
  component2: {
    top: 0,
    left: 0,
    width: 428,
    height: 47,
    position: "absolute",
  },
  drBeddaiMohamed: {
    top: 436,
    left: 82,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.black,
  },
  fa6Solidlungs: {
    top: -34,
    left: -47,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.59%",
    width: "5.61%",
    top: "29.48%",
    right: "25%",
    bottom: "67.93%",
    left: "69.39%",
  },
  toutLesSpcialits: {
    top: 381,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 37,
  },
  bienvenueSamia: {
    top: 75,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 37,
  },
  iconoirglasses: {
    top: 277,
    left: 376,
    position: "absolute",
  },
  lucidestethoscopeIcon: {
    top: 433,
    left: 51,
    position: "absolute",
  },
  materialSymbolsbatteryHorizIcon: {
    top: 12,
    left: 381,
    position: "absolute",
  },
  mingcutenotificationLineIcon: {
    top: 80,
    left: 367,
    position: "absolute",
  },
  icroundArrowForwardIosIcon: {
    top: 523,
    left: 348,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  patientHome: {
    flex: 1,
    height: 926,
    overflow: "hidden",
  },
});

export default PatientHome;
