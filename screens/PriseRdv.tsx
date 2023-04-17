import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PriseRdv = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState();

  return (
    <View style={[styles.priseRdv, styles.priseRdvLayout]}>
      <View style={[styles.priseRdvChild, styles.priseShadowBox]} />
      <RNKTextInput
        style={[styles.priseRdvItem, styles.priseShadowBox]}
        placeholder="Place your text"
        value={rectangleTextInput}
        onChangeText={setRectangleTextInput}
      />
      <View style={[styles.priseRdvInner, styles.priseChildShadowBox1]} />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <View style={[styles.priseRdvChild1, styles.rectangleViewShadowBox]} />
      <View style={[styles.priseRdvChild2, styles.priseChildShadowBox1]} />
      <View style={[styles.priseRdvChild3, styles.priseChildShadowBox]} />
      <View style={[styles.priseRdvChild4, styles.priseChildShadowBox]} />
      <View style={[styles.priseRdvChild5, styles.priseChildShadowBox1]} />
      <View style={[styles.priseRdvChild6, styles.priseChildShadowBox1]} />
      <Text style={[styles.text, styles.textFlexBox]}>09:00 - 17:00</Text>
      <Text style={[styles.samediJeudi, styles.textFlexBox]}>
        Samedi - jeudi
      </Text>
      <Text style={[styles.lundiMardi, styles.lundiMardiPosition]}>
        Lundi - Mardi
      </Text>
      <Text style={[styles.addresse, styles.addresseTypo]}>{`Addresse `}</Text>
      <Text style={[styles.horaireDeTravail, styles.addresseTypo]}>
        Horaire de travail
      </Text>
      <Text style={[styles.cardiologue, styles.text1Position1]}>
        Cardiologue
      </Text>
      <Text style={[styles.spcialit, styles.spcialitPosition]}>Spécialité</Text>
      <Text style={[styles.tlphone, styles.text1Position]}>Téléphone</Text>
      <Text style={[styles.text1, styles.text1Position]}>038 72 28 21</Text>
      <Text
        style={[styles.aout1955Batiment, styles.text1Position1]}
      >{`20 aout 1955 Batiment 22 `}</Text>
      <View style={styles.component2}>
        <View style={[styles.component2Child, styles.priseRdvLayout]} />
        <Image
          style={[styles.materialSymbolswifiIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/materialsymbolswifi.png")}
        />
        <Image
          style={[styles.icbaselineNetworkCellIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/icbaselinenetworkcell.png")}
        />
        <Text style={[styles.text2, styles.text2Typo]}>9:41</Text>
      </View>
      <Text
        style={[styles.drBeddaiMohamed, styles.addresseTypo]}
      >{`Dr. BEDDAI Mohamed `}</Text>
      <View style={[styles.fa6Solidlungs, styles.iconLayout]} />
      <Text
        style={[styles.bienvenueSamia, styles.rendezTypo]}
      >{`Bienvenue, Samia `}</Text>
      <Image
        style={[styles.lucidestethoscopeIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/lucidestethoscope.png")}
      />
      <Image
        style={[styles.materialSymbolsbatteryHorizIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/materialsymbolsbatteryhoriz075sharp.png")}
      />
      <View style={[styles.priseRdvChild7, styles.priseChildLayout]} />
      <View style={[styles.priseRdvChild8, styles.priseChildLayout]} />
      <Text style={[styles.appeler, styles.appelerClr]}>Appeler</Text>
      <Image
        style={styles.tablermessage2Icon}
        resizeMode="cover"
        source={require("../assets/tablermessage2.png")}
      />
      <Text style={[styles.priseDeRendezVous, styles.text2Typo]}>
        Prise de rendez-vous
      </Text>
      <Text style={[styles.suggrLheure, styles.text2Typo]}>
        Suggéré l'heure
      </Text>
      <Image
        style={[styles.uilcalenderIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/uilcalender.png")}
      />
      <Text style={[styles.date, styles.textFlexBox]}>Date</Text>
      <Text style={[styles.text3, styles.textTypo2]}>09:00-10:00</Text>
      <Text style={[styles.text4, styles.textTypo1]}>12:00-13:00</Text>
      <Text style={[styles.text5, styles.textTypo]}>15:00-16:00</Text>
      <Text style={[styles.text6, styles.textTypo2]}>10:00-11:00</Text>
      <Text style={[styles.text7, styles.textTypo1]}>13:00-14:00</Text>
      <Text style={[styles.text8, styles.textTypo]}>16:00-17:00</Text>
      <Text style={[styles.text9, styles.textTypo2]}>11:00-12:00</Text>
      <Text style={[styles.text10, styles.textTypo1]}>14:00-15:00</Text>
      <View style={[styles.priseRdvChild9, styles.priseChildBorder]} />
      <Text style={[styles.prendreRendezVous, styles.appelerClr]}>
        Prendre rendez-vous
      </Text>
      <Text style={[styles.joursPourLes, styles.rendezTypo]}>
        Jours pour les personnes âgées
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  priseRdvLayout: {
    width: "100%",
    backgroundColor: Color.white,
  },
  priseShadowBox: {
    width: 352,
    borderColor: "#d7d7d7",
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
    backgroundColor: Color.white,
  },
  priseChildShadowBox1: {
    height: 40,
    width: 99,
    borderRadius: Border.br_xl,
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
    position: "absolute",
    backgroundColor: Color.white,
  },
  rectangleViewShadowBox: {
    left: 45,
    height: 40,
    width: 99,
    borderRadius: Border.br_xl,
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
    position: "absolute",
    backgroundColor: Color.white,
  },
  priseChildShadowBox: {
    left: 151,
    height: 40,
    width: 99,
    borderRadius: Border.br_xl,
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
    position: "absolute",
    backgroundColor: Color.white,
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  lundiMardiPosition: {
    top: 312,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  addresseTypo: {
    height: 18,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text1Position1: {
    left: 144,
    fontFamily: FontFamily.poppinsRegular,
  },
  spcialitPosition: {
    top: 193,
    height: 18,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text1Position: {
    height: 19,
    top: 217,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "34.04%",
    top: "31.91%",
    width: "3.74%",
    height: "34.04%",
    position: "absolute",
    overflow: "hidden",
  },
  text2Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rendezTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  priseChildLayout: {
    height: 28,
    width: 97,
    borderRadius: Border.br_9xs,
    top: 352,
    position: "absolute",
  },
  appelerClr: {
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  textTypo2: {
    top: 594,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  textTypo1: {
    top: 644,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  textTypo: {
    top: 694,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  priseChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  priseRdvChild: {
    top: 152,
    height: 250,
  },
  priseRdvItem: {
    top: 464,
  },
  priseRdvInner: {
    left: 42,
    top: 584,
    height: 40,
    width: 99,
    borderRadius: Border.br_xl,
  },
  rectangleView: {
    top: 634,
  },
  priseRdvChild1: {
    top: 684,
  },
  priseRdvChild2: {
    left: 148,
    top: 584,
    height: 40,
    width: 99,
    borderRadius: Border.br_xl,
  },
  priseRdvChild3: {
    top: 634,
  },
  priseRdvChild4: {
    top: 684,
  },
  priseRdvChild5: {
    left: 254,
    top: 584,
    height: 40,
    width: 99,
    borderRadius: Border.br_xl,
  },
  priseRdvChild6: {
    left: 257,
    top: 634,
  },
  text: {
    top: 290,
    left: 201,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
  },
  samediJeudi: {
    left: 191,
    top: 268,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
  },
  lundiMardi: {
    left: 275,
    fontFamily: FontFamily.poppinsRegular,
  },
  addresse: {
    width: 58,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 72,
    top: 240,
    height: 18,
  },
  horaireDeTravail: {
    width: 109,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 72,
    top: 268,
  },
  cardiologue: {
    width: 75,
    top: 193,
    height: 18,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  spcialit: {
    width: 61,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 72,
  },
  tlphone: {
    width: 65,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 72,
  },
  text1: {
    width: 71,
    left: 144,
    fontFamily: FontFamily.poppinsRegular,
  },
  aout1955Batiment: {
    width: 150,
    height: 18,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
    top: 240,
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
  text2: {
    top: "21.28%",
    left: "5.61%",
    fontFamily: FontFamily.cairoMedium,
    fontWeight: "500",
  },
  component2: {
    top: 0,
    left: 0,
    width: 428,
    height: 47,
    position: "absolute",
  },
  drBeddaiMohamed: {
    top: 165,
    left: 82,
    width: 126,
    fontFamily: FontFamily.poppinsRegular,
  },
  fa6Solidlungs: {
    top: -34,
    left: -47,
  },
  bienvenueSamia: {
    top: 75,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
    color: Color.black,
    left: 37,
    fontWeight: "600",
  },
  lucidestethoscopeIcon: {
    top: 162,
    left: 51,
  },
  materialSymbolsbatteryHorizIcon: {
    top: 12,
    left: 381,
  },
  priseRdvChild7: {
    backgroundColor: Color.darkturquoise,
    left: 275,
  },
  priseRdvChild8: {
    left: 170,
    borderColor: "#21b2c6",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    height: 28,
    width: 97,
    borderRadius: Border.br_9xs,
    top: 352,
  },
  appeler: {
    top: 357,
    left: 299,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  tablermessage2Icon: {
    top: 356,
    left: 208,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  priseDeRendezVous: {
    top: 426,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 37,
  },
  suggrLheure: {
    top: 540,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 37,
  },
  uilcalenderIcon: {
    top: 476,
    left: 345,
  },
  date: {
    top: 479,
    left: 58,
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
  },
  text3: {
    left: 51,
  },
  text4: {
    left: 56,
  },
  text5: {
    left: 55,
  },
  text6: {
    left: 160,
  },
  text7: {
    left: 162,
  },
  text8: {
    left: 163,
  },
  text9: {
    left: 266,
  },
  text10: {
    left: 268,
  },
  priseRdvChild9: {
    top: 771,
    left: 33,
    backgroundColor: Color.midnightblue,
    borderColor: "rgba(0, 0, 0, 0.15)",
    width: 353,
    height: 60,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  prendreRendezVous: {
    top: 786,
    left: 117,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  joursPourLes: {
    left: 71,
    top: 312,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  priseRdv: {
    flex: 1,
    height: 926,
    overflow: "hidden",
  },
});

export default PriseRdv;
