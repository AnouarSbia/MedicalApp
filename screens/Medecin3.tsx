import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Medecin3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.medecin3}>
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
        <Text style={[styles.text, styles.nomFlexBox]}>9:41</Text>
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
        style={[styles.medecin3Child, styles.medecin3ShadowBox]}
        onPress={() => navigation.navigate("PriseRdv")}
      />
      <Text style={[styles.nomEtPrnom, styles.nomTypo]}>Nom et Prénom</Text>
      <Text style={[styles.dateDeNaissnace, styles.nomTypo]}>
        Date de Naissnace
      </Text>
      <Text style={[styles.examenClinique, styles.examenTypo]}>
        Examen clinique
      </Text>
      <Text style={[styles.examenComplmentaire, styles.examenTypo]}>
        Examen complémentaire à demander
      </Text>
      <Text style={[styles.sousTraitement, styles.examenTypo]}>
        Sous traitement
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>-</Text>
      <Text style={[styles.text2, styles.textTypo]}>-</Text>
      <Text style={[styles.text3, styles.textTypo]}>-</Text>
      <Text style={[styles.text4, styles.textTypo]}>-</Text>
      <Text style={[styles.text5, styles.textTypo]}>-</Text>
      <Text style={[styles.text6, styles.textTypo]}>-</Text>
      <Text style={[styles.text7, styles.textTypo]}>-</Text>
      <Text style={[styles.text8, styles.textTypo]}>-</Text>
      <Text style={[styles.text9, styles.textTypo]}>-</Text>
      <Text style={[styles.text10, styles.textTypo]}>-</Text>
      <Text style={[styles.dateDeConsultation, styles.nomTypo]}>
        Date de consultation
      </Text>
      <Text style={[styles.observationMedicale, styles.examenTypo]}>
        Observation medicale
      </Text>
      <Text style={[styles.lundi10042023, styles.jjmmaaaaTypo]}>
        Lundi 10/04/2023
      </Text>
      <Text style={[styles.gharbiSamia, styles.jjmmaaaaTypo]}>
        Gharbi Samia
      </Text>
      <Text style={[styles.jjmmaaaa, styles.jjmmaaaaTypo]}>JJ/MM/AAAA</Text>
      <View style={styles.medecin3Item} />
      <Text style={[styles.modifier, styles.jjmmaaaaTypo]}>Modifier</Text>
      <Pressable
        style={[styles.medecin3Inner, styles.medecin3ShadowBox]}
        onPress={() => navigation.navigate("Medecin2")}
      />
      <Text style={[styles.nom, styles.nomTypo]}>{`Nom `}</Text>
      <Text style={[styles.dossierMalade, styles.textTypo]}>
        Dossier malade
      </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
  nomFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  fa6SolidlungsLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  medecin3ShadowBox: {
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
  nomTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  examenTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 68,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
  },
  jjmmaaaaTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
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
    fontWeight: "500",
    textAlign: "left",
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
  medecin3Child: {
    top: 148,
    left: 37,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "#d7d7d7",
    borderWidth: 1,
    width: 353,
    height: 556,
  },
  nomEtPrnom: {
    top: 236,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
  },
  dateDeNaissnace: {
    top: 267,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
  },
  examenClinique: {
    top: 305,
    fontSize: FontSize.size_mini,
  },
  examenComplmentaire: {
    top: 379,
    fontSize: FontSize.size_mini,
  },
  sousTraitement: {
    top: 503,
    fontSize: FontSize.size_mini,
  },
  text1: {
    top: 332,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
  },
  text2: {
    top: 402,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
  },
  text3: {
    top: 534,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
  },
  text4: {
    top: 451,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
  },
  text5: {
    top: 583,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
  },
  text6: {
    top: 355,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
  },
  text7: {
    top: 425,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
  },
  text8: {
    top: 557,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
  },
  text9: {
    top: 474,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
  },
  text10: {
    top: 606,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
  },
  dateDeConsultation: {
    top: 206,
    fontSize: FontSize.size_mini,
    left: 68,
    textAlign: "left",
    position: "absolute",
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
  },
  observationMedicale: {
    top: 171,
    fontSize: FontSize.size_base,
  },
  lundi10042023: {
    top: 210,
    left: 242,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
  },
  gharbiSamia: {
    top: 239,
    left: 205,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
  },
  jjmmaaaa: {
    top: 270,
    left: 229,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
  },
  medecin3Item: {
    top: 649,
    left: 244,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.darkturquoise,
    width: 121,
    height: 31,
    position: "absolute",
  },
  modifier: {
    top: 655,
    left: 279,
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  medecin3Inner: {
    top: 47,
    height: 58,
    width: 428,
    left: 0,
  },
  nom: {
    top: 214,
    left: 550,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  dossierMalade: {
    top: 63,
    fontSize: FontSize.size_lg,
    left: 68,
    textAlign: "left",
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
  medecin3: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Medecin3;
