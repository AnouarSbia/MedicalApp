import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Choosing = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.choosing, styles.iconLayout]}>
      <Text style={[styles.etesVous, styles.etesVousFlexBox]}>Etes-vous</Text>
      <Image
        style={[styles.choosingChild, styles.choosingLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.choosingItem, styles.choosingLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Pressable
        style={[styles.materialSymbolsrecentPatien, styles.logoChildLayout1]}
        onPress={() => navigation.navigate("InfosPatient")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolsrecentpatientoutlinerounded.png")}
        />
      </Pressable>
      <Pressable
        style={styles.healthiconsdoctorMaleOutlin}
        onPress={() => navigation.navigate("InfosMedecin")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/healthiconsdoctormaleoutline.png")}
        />
      </Pressable>
      <Text style={[styles.patient, styles.patientTypo]}>Patient</Text>
      <Text style={[styles.docteur, styles.patientTypo]}>Docteur</Text>
      <View style={styles.logoMed}>
        <View style={[styles.logoMedChild, styles.logoChildLayout]} />
        <View style={[styles.logoMedItem, styles.logoPosition]} />
        <View style={[styles.logoMedInner, styles.logoPosition]} />
        <View style={[styles.rectangleView, styles.logoChildBg]} />
        <View style={[styles.logoMedChild1, styles.logoChildBg]} />
        <View style={[styles.logoMedChild2, styles.logoChildLayout]} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <Image
          style={[styles.logoMedChild3, styles.logoChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-23.png")}
        />
        <Image
          style={[styles.logoMedChild4, styles.logoChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-22.png")}
        />
        <Image
          style={[styles.logoMedChild5, styles.logoChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-24.png")}
        />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-73.png")}
        />
        <Text style={[styles.mySihaty, styles.etesVousFlexBox]}>MY SIHATY</Text>
        <Text style={[styles.healthService, styles.etesVousFlexBox]}>
          Health service
        </Text>
        <View style={[styles.logoMedChild6, styles.logoChildPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  etesVousFlexBox: {
    textAlign: "left",
    color: Color.midnightblue,
    position: "absolute",
  },
  choosingLayout: {
    height: 129,
    width: 135,
    top: 425,
    position: "absolute",
  },
  logoChildLayout1: {
    height: 38,
    position: "absolute",
  },
  patientTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    top: 545,
    textAlign: "left",
    color: Color.midnightblue,
    position: "absolute",
  },
  logoChildLayout: {
    width: 11,
    position: "absolute",
  },
  logoPosition: {
    transform: [
      {
        rotate: "90.26deg",
      },
    ],
    width: 10,
    left: 201,
    backgroundColor: Color.midnightblue,
    position: "absolute",
  },
  logoChildBg: {
    backgroundColor: Color.darkturquoise,
    transform: [
      {
        rotate: "90.26deg",
      },
    ],
  },
  logoChildPosition: {
    left: 143,
    position: "absolute",
  },
  etesVous: {
    top: 283,
    left: 152,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.midnightblue,
  },
  choosingChild: {
    left: 71,
  },
  choosingItem: {
    left: 221,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  materialSymbolsrecentPatien: {
    top: 471,
    width: 42,
    left: 118,
  },
  healthiconsdoctorMaleOutlin: {
    left: 265,
    top: 463,
    width: 48,
    height: 48,
    position: "absolute",
  },
  patient: {
    left: 104,
  },
  docteur: {
    left: 249,
  },
  logoMedChild: {
    height: 21,
    backgroundColor: Color.midnightblue,
    top: 108,
    width: 11,
    left: 144,
  },
  logoMedItem: {
    height: 32,
    top: 126,
  },
  logoMedInner: {
    top: 154,
    height: 11,
  },
  rectangleView: {
    top: 137,
    height: 22,
    width: 11,
    position: "absolute",
    left: 118,
  },
  logoMedChild1: {
    top: 163,
    height: 7,
    width: 11,
    position: "absolute",
    left: 118,
  },
  logoMedChild2: {
    left: 168,
    height: 28,
    backgroundColor: Color.midnightblue,
    top: 108,
    width: 11,
  },
  ellipseIcon: {
    top: 91,
    width: 35,
    height: 35,
    left: 144,
    position: "absolute",
  },
  logoMedChild3: {
    top: 187,
    width: 39,
    height: 18,
  },
  logoMedChild4: {
    left: 200,
    width: 16,
    top: 126,
  },
  logoMedChild5: {
    top: 125,
    left: 102,
    width: 18,
  },
  rectangleIcon: {
    top: 114,
    left: 122,
    width: 86,
    height: 84,
    position: "absolute",
  },
  mySihaty: {
    top: 219,
    left: 96,
    fontFamily: FontFamily.russoOneRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.midnightblue,
  },
  healthService: {
    top: 248,
    left: 112,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gruppoRegular,
  },
  logoMedChild6: {
    top: 174,
    width: 14,
    height: 14,
    backgroundColor: Color.darkturquoise,
    transform: [
      {
        rotate: "90.26deg",
      },
    ],
  },
  logoMed: {
    top: -36,
    left: 54,
    width: 319,
    height: 285,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  choosing: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Choosing;
