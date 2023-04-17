import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameScreen = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameLayout]} />
      <View style={[styles.frameItem, styles.frameLayout]} />
      <View style={[styles.frameInner, styles.frameLayout]} />
      <View style={[styles.rectangleView, styles.frameLayout]} />
      <Text style={[styles.suggrerHeure, styles.vousTypo]}>suggérer heure</Text>
      <Text style={[styles.priseDeRendezVous, styles.vousTypo]}>
        Prise de rendez-vous
      </Text>
      <View style={[styles.frameChild1, styles.frameChildLayout11]} />
      <View style={[styles.frameChild2, styles.frameChildLayout11]} />
      <View style={[styles.frameChild3, styles.frameChildLayout11]} />
      <View style={[styles.frameChild4, styles.frameChildLayout11]} />
      <Text style={[styles.patient, styles.patientTypo2]}>patient</Text>
      <Text style={[styles.medecin, styles.patientTypo2]}>medecin</Text>
      <Text style={[styles.etesVous, styles.vousTypo]}>Etes-vous</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.logo, styles.frameChildLayout10]}>LOGO</Text>
      <Image
        style={[styles.frameChild5, styles.frameChildPosition5]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.frameChild6, styles.frameChildPosition5]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.patient1, styles.patientTypo1]}>patient</Text>
      <Text style={[styles.patient2, styles.patientTypo1]}>patient</Text>
      <Text style={[styles.patient3, styles.vousTypo]}>patient</Text>
      <Image
        style={[styles.arrowIcon, styles.frameChildLayout9]}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={styles.frameChild7}
        resizeMode="cover"
        source={require("../assets/arrow-2.png")}
      />
      <View style={[styles.frameChild8, styles.frameChildLayout8]} />
      <View style={[styles.frameChild9, styles.frameChild9Position]} />
      <View style={[styles.frameChild10, styles.frameChildLayout7]} />
      <View style={[styles.frameChild11, styles.frameChildLayout5]} />
      <View style={[styles.frameChild12, styles.frameChildLayout5]} />
      <View style={[styles.frameChild13, styles.frameChildLayout6]} />
      <View style={[styles.frameChild14, styles.frameChildLayout6]} />
      <Text style={[styles.dossierMalades, styles.dossierTypo]}>{`dossier 
malades`}</Text>
      <Text style={[styles.dossierMalades1, styles.dossierTypo]}>{`dossier 
malades`}</Text>
      <Text
        style={[styles.listDemandesRendezVous, styles.listTypo]}
      >{`list demandes 
rendez-vous`}</Text>
      <Text
        style={[styles.listDemandesRendezVous1, styles.listTypo]}
      >{`list demandes 
rendez-vous`}</Text>
      <View style={styles.frameChild15} />
      <View style={[styles.frameChild16, styles.frameChildPosition4]} />
      <View style={[styles.frameChild17, styles.frameChildPosition4]} />
      <View style={[styles.frameChild18, styles.frameChildPosition4]} />
      <View style={[styles.frameChild19, styles.frameChildPosition4]} />
      <View style={[styles.frameChild20, styles.frameChildLayout7]} />
      <Text style={[styles.patient11, styles.vousTypo]}>{`patient 1 `}</Text>
      <Text style={[styles.patient12, styles.patientTypo]}>{`patient 1 `}</Text>
      <Text style={[styles.patient21, styles.patientTypo]}>{`patient 2 `}</Text>
      <Text style={[styles.patient31, styles.patientTypo]}>{`patient 3 `}</Text>
      <Text style={[styles.patient4, styles.patientTypo]}>{`patient 4 `}</Text>
      <Text style={[styles.patient13, styles.vousTypo]}>{`patient 1 `}</Text>
      <Text style={[styles.quelqueInformations, styles.rechercheParNomTypo]}>
        quelque informations..
      </Text>
      <Text style={[styles.quelqueInformations1, styles.quelqueTypo]}>
        quelque informations..
      </Text>
      <Text style={[styles.quelqueInformations2, styles.quelqueTypo]}>
        quelque informations..
      </Text>
      <Text style={[styles.quelqueInformations3, styles.quelqueTypo]}>
        quelque informations..
      </Text>
      <Text style={[styles.quelqueInformations4, styles.quelqueTypo]}>
        quelque informations..
      </Text>
      <Text style={[styles.quelqueInformations5, styles.frameChild9Position]}>
        quelque informations..
      </Text>
      <Text style={[styles.rechercheParNom, styles.rechercheParNomTypo]}>
        recherche par nom ou spécialité du doct
      </Text>
      <View style={[styles.frameChild21, styles.frameChildLayout8]} />
      <View style={[styles.frameChild22, styles.frameChildLayout4]} />
      <View style={[styles.frameChild23, styles.frameChildLayout4]} />
      <View style={[styles.frameChild24, styles.frameChildLayout8]} />
      <View style={[styles.frameChild25, styles.frameChildLayout8]} />
      <View style={[styles.frameChild26, styles.frameChildLayout4]} />
      <View style={[styles.frameChild27, styles.frameChildLayout4]} />
      <View style={[styles.frameChild28, styles.frameChildLayout8]} />
      <View style={[styles.frameChild29, styles.frameChildLayout8]} />
      <View style={[styles.frameChild30, styles.frameChildLayout4]} />
      <View style={[styles.frameChild31, styles.frameChildLayout4]} />
      <Text style={[styles.informationPatient, styles.vousTypo]}>
        Information patient
      </Text>
      <Text style={[styles.informationMedecin, styles.vousTypo]}>
        Information medecin
      </Text>
      <Text style={[styles.sinscrire, styles.vousTypo]}>s’inscrire</Text>
      <Text style={[styles.sinscrire1, styles.vousTypo]}>s’inscrire</Text>
      <Image
        style={[styles.frameChild32, styles.frameChildLayout9]}
        resizeMode="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Image
        style={[styles.frameChild33, styles.frameChildLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.frameChild34, styles.frameChildLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.frameChild35, styles.frameChildLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.frameChild36, styles.frameChildLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={[styles.sp1, styles.sp1Typo]}>sp1</Text>
      <Text style={[styles.sp2, styles.sp1Typo]}>sp2</Text>
      <Text style={[styles.sp3, styles.sp1Typo]}>sp3</Text>
      <Text style={[styles.sp4, styles.sp1Typo]}>sp4</Text>
      <View style={styles.frameChild37} />
      <Text style={[styles.docteur1, styles.adresseTypo]}>{`Docteur 1 
`}</Text>
      <Text style={[styles.adresse, styles.adresseTypo]}>Adresse</Text>
      <Text style={[styles.horairesDeTravail, styles.adresseTypo]}>
        horaires de travail
      </Text>
      <Text style={[styles.plusDetails, styles.adresseTypo]}>
        plus details...
      </Text>
      <Image
        style={[styles.frameChild38, styles.frameChildPosition3]}
        resizeMode="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Text style={[styles.medecin1, styles.vousTypo]}>medecin</Text>
      <Text style={[styles.medecin2, styles.medecinTypo]}>medecin</Text>
      <Text style={[styles.medecin3, styles.medecinTypo]}>medecin</Text>
      <Text style={[styles.medecin4, styles.medecinTypo]}>medecin</Text>
      <Image
        style={[styles.frameChild39, styles.frameChildLayout9]}
        resizeMode="cover"
        source={require("../assets/arrow-5.png")}
      />
      <View style={[styles.frameChild40, styles.frameChildLayout2]} />
      <Text style={[styles.informations, styles.docteur11Typo]}>{`informations
....
...
...
...`}</Text>
      <Text
        style={[styles.docteur11, styles.docteur11Typo]}
      >{`Docteur 1 `}</Text>
      <Text
        style={[styles.choisissezLaDate, styles.vousTypo]}
      >{`choisissez la date `}</Text>
      <Image
        style={[styles.frameChild41, styles.frameChildPosition3]}
        resizeMode="cover"
        source={require("../assets/arrow-6.png")}
      />
      <View style={[styles.frameChild42, styles.frameChildPosition2]} />
      <Text style={[styles.modifier, styles.frameChildPosition2]}>
        modifier
      </Text>
      <View style={[styles.frameChild43, styles.frameChildPosition2]} />
      <Text style={[styles.confirmer, styles.frameChildPosition2]}>
        confirmer
      </Text>
      <View style={[styles.frameChild44, styles.frameChildLayout1]} />
      <View style={[styles.frameChild45, styles.frameChildLayout1]} />
      <Text style={[styles.dateDeRdv, styles.dateDeRdvTypo]}>date de rdv</Text>
      <Text style={[styles.heureSugger, styles.dateDeRdvTypo]}>
        heure suggeré
      </Text>
      <View style={[styles.frameChild46, styles.frameChildLayout]} />
      <View style={[styles.frameChild47, styles.frameChildLayout]} />
      <View style={[styles.frameChild48, styles.frameChildPosition1]} />
      <View style={[styles.frameChild49, styles.frameChildPosition1]} />
      <View style={[styles.frameChild50, styles.frameChildPosition]} />
      <View style={[styles.frameChild51, styles.frameChildPosition]} />
      <Text style={[styles.text, styles.textTypo2]}>8-9</Text>
      <Text style={[styles.text1, styles.textTypo2]}>11-12</Text>
      <Text style={[styles.text2, styles.textTypo1]}>9-10</Text>
      <Text style={[styles.text3, styles.textTypo1]}>12-13</Text>
      <Text style={[styles.text4, styles.textTypo]}>10-11</Text>
      <Text style={[styles.text5, styles.textTypo]}>13-14</Text>
      <View style={[styles.frameChild52, styles.frameChildLayout2]} />
      <Text style={[styles.rechercheNomPatient, styles.vousTypo]}>
        recherche nom patient
      </Text>
      <Image
        style={[styles.frameChild53, styles.frameChildLayout9]}
        resizeMode="cover"
        source={require("../assets/arrow-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 321,
    width: 175,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  vousTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  frameChildLayout11: {
    top: 495,
    height: 321,
    width: 175,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  patientTypo2: {
    height: 17,
    top: 280,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameChildLayout10: {
    height: 21,
    position: "absolute",
  },
  frameChildPosition5: {
    height: 38,
    top: 238,
    position: "absolute",
  },
  patientTypo1: {
    top: 41,
    height: 16,
    width: 51,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameChildLayout9: {
    height: 22,
    position: "absolute",
  },
  frameChildLayout8: {
    width: 144,
    backgroundColor: Color.gainsboro,
  },
  frameChild9Position: {
    left: 819,
    position: "absolute",
  },
  frameChildLayout7: {
    width: 160,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  frameChildLayout5: {
    height: 42,
    width: 70,
    top: 511,
    position: "absolute",
  },
  frameChildLayout6: {
    width: 70,
    top: 511,
    height: 28,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  dossierTypo: {
    top: 514,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  listTypo: {
    top: 515,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameChildPosition4: {
    left: 1067,
    height: 43,
    width: 160,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  patientTypo: {
    left: 1074,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rechercheParNomTypo: {
    left: 565,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  quelqueTypo: {
    left: 1073,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameChildLayout4: {
    height: 20,
    width: 144,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  frameChildLayout3: {
    height: 25,
    width: 29,
    top: 126,
    position: "absolute",
  },
  sp1Typo: {
    top: 132,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  adresseTypo: {
    left: 569,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameChildPosition3: {
    top: 645,
    height: 22,
    position: "absolute",
  },
  medecinTypo: {
    top: 475,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameChildLayout2: {
    width: 141,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  docteur11Typo: {
    left: 835,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameChildPosition2: {
    top: 674,
    position: "absolute",
  },
  frameChildLayout1: {
    height: 24,
    width: 134,
    left: 825,
    backgroundColor: Color.gainsboro,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
  },
  dateDeRdvTypo: {
    left: 836,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameChildLayout: {
    width: 39,
    left: 823,
    backgroundColor: Color.gainsboro,
    height: 22,
    position: "absolute",
  },
  frameChildPosition1: {
    left: 871,
    width: 39,
    backgroundColor: Color.gainsboro,
    height: 22,
    position: "absolute",
  },
  frameChildPosition: {
    left: 919,
    width: 39,
    backgroundColor: Color.gainsboro,
    height: 22,
    position: "absolute",
  },
  textTypo2: {
    left: 834,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textTypo1: {
    left: 878,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textTypo: {
    left: 923,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameChild: {
    left: 28,
    top: 59,
    width: 175,
    borderRadius: Border.br_3xs,
  },
  frameItem: {
    left: 269,
    top: 59,
    width: 175,
    borderRadius: Border.br_3xs,
  },
  frameInner: {
    top: 65,
    left: 551,
  },
  rectangleView: {
    top: 61,
    left: 801,
  },
  suggrerHeure: {
    top: 256,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    left: 822,
    position: "absolute",
  },
  priseDeRendezVous: {
    top: 196,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    left: 822,
    position: "absolute",
  },
  frameChild1: {
    left: 269,
  },
  frameChild2: {
    left: 551,
  },
  frameChild3: {
    left: 1059,
  },
  frameChild4: {
    left: 805,
  },
  patient: {
    left: 49,
    width: 51,
  },
  medecin: {
    left: 119,
    width: 62,
  },
  etesVous: {
    left: 91,
    width: 54,
    height: 16,
    top: 187,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  ellipseIcon: {
    top: 92,
    left: 74,
    width: 83,
    height: 69,
    position: "absolute",
  },
  logo: {
    top: 117,
    left: 98,
    fontSize: FontSize.size_xs,
    width: 51,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  frameChild5: {
    left: 52,
    width: 46,
  },
  frameChild6: {
    left: 122,
    width: 47,
  },
  patient1: {
    left: 281,
  },
  patient2: {
    left: 562,
  },
  patient3: {
    top: 42,
    left: 816,
    height: 16,
    width: 51,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  arrowIcon: {
    top: 239,
    left: 212,
    width: 50,
  },
  frameChild7: {
    top: 394,
    left: 94,
    width: 154,
    height: 162,
    position: "absolute",
  },
  frameChild8: {
    top: 116,
    left: 286,
    height: 21,
    position: "absolute",
  },
  frameChild9: {
    top: 221,
    height: 27,
    width: 144,
    backgroundColor: Color.gainsboro,
  },
  frameChild10: {
    top: 82,
    height: 28,
    left: 559,
    width: 160,
  },
  frameChild11: {
    left: 564,
    backgroundColor: Color.gainsboro,
  },
  frameChild12: {
    left: 1072,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    backgroundColor: Color.white,
  },
  frameChild13: {
    left: 644,
    borderColor: "#000",
    width: 70,
    top: 511,
    backgroundColor: Color.white,
  },
  frameChild14: {
    left: 1152,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    borderColor: "rgba(0, 0, 0, 0.71)",
  },
  dossierMalades: {
    left: 653,
  },
  dossierMalades1: {
    left: 1161,
  },
  listDemandesRendezVous: {
    left: 567,
  },
  listDemandesRendezVous1: {
    left: 1075,
  },
  frameChild15: {
    top: 620,
    height: 43,
    width: 160,
    left: 559,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  frameChild16: {
    top: 604,
  },
  frameChild17: {
    top: 652,
  },
  frameChild18: {
    top: 700,
  },
  frameChild19: {
    top: 748,
  },
  frameChild20: {
    top: 526,
    left: 813,
    height: 168,
  },
  patient11: {
    top: 624,
    left: 566,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  patient12: {
    top: 608,
  },
  patient21: {
    top: 656,
  },
  patient31: {
    top: 704,
  },
  patient4: {
    top: 752,
  },
  patient13: {
    top: 530,
    left: 820,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  quelqueInformations: {
    top: 643,
  },
  quelqueInformations1: {
    top: 627,
  },
  quelqueInformations2: {
    top: 675,
  },
  quelqueInformations3: {
    top: 723,
  },
  quelqueInformations4: {
    top: 771,
  },
  quelqueInformations5: {
    top: 549,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  rechercheParNom: {
    width: 157,
    top: 86,
    height: 28,
  },
  frameChild21: {
    top: 556,
    left: 289,
    height: 21,
    position: "absolute",
  },
  frameChild22: {
    top: 152,
    left: 286,
  },
  frameChild23: {
    top: 592,
    left: 289,
  },
  frameChild24: {
    left: 286,
    height: 21,
    position: "absolute",
    top: 187,
  },
  frameChild25: {
    left: 289,
    top: 627,
    height: 21,
    position: "absolute",
  },
  frameChild26: {
    top: 223,
    left: 286,
  },
  frameChild27: {
    top: 663,
    left: 289,
  },
  frameChild28: {
    top: 258,
    left: 286,
    height: 21,
    position: "absolute",
  },
  frameChild29: {
    top: 698,
    left: 289,
    height: 21,
    position: "absolute",
  },
  frameChild30: {
    top: 297,
    left: 286,
  },
  frameChild31: {
    top: 737,
    left: 289,
  },
  informationPatient: {
    top: 85,
    width: 135,
    left: 286,
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  informationMedecin: {
    top: 525,
    width: 145,
    left: 286,
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  sinscrire: {
    top: 299,
    left: 333,
    width: 46,
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  sinscrire1: {
    top: 738,
    left: 328,
    width: 63,
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameChild32: {
    top: 236,
    left: 463,
    width: 75,
  },
  frameChild33: {
    left: 568,
  },
  frameChild34: {
    left: 604,
  },
  frameChild35: {
    left: 640,
  },
  frameChild36: {
    left: 676,
  },
  sp1: {
    left: 574,
  },
  sp2: {
    left: 611,
  },
  sp3: {
    left: 648,
  },
  sp4: {
    left: 682,
  },
  frameChild37: {
    top: 163,
    width: 153,
    height: 60,
    backgroundColor: Color.gainsboro,
    left: 562,
    position: "absolute",
  },
  docteur1: {
    top: 168,
    height: 15,
    width: 48,
  },
  adresse: {
    top: 179,
  },
  horairesDeTravail: {
    top: 193,
  },
  plusDetails: {
    top: 205,
  },
  frameChild38: {
    left: 452,
    width: 86,
  },
  medecin1: {
    top: 479,
    left: 283,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  medecin2: {
    left: 562,
  },
  medecin3: {
    left: 1070,
  },
  medecin4: {
    left: 816,
  },
  frameChild39: {
    top: 231,
    left: 736,
    width: 62,
  },
  frameChild40: {
    height: 97,
    top: 86,
    left: 822,
  },
  informations: {
    top: 112,
  },
  docteur11: {
    top: 93,
  },
  choisissezLaDate: {
    top: 227,
    left: 832,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameChild41: {
    left: 732,
    width: 65,
  },
  frameChild42: {
    left: 869,
    width: 48,
    backgroundColor: Color.gainsboro,
    height: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
  },
  modifier: {
    left: 873,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  frameChild43: {
    left: 921,
    width: 48,
    backgroundColor: Color.gainsboro,
    height: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
  },
  confirmer: {
    left: 922,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  frameChild44: {
    top: 581,
  },
  frameChild45: {
    top: 616,
  },
  dateDeRdv: {
    top: 587,
  },
  heureSugger: {
    top: 622,
  },
  frameChild46: {
    top: 276,
  },
  frameChild47: {
    top: 306,
  },
  frameChild48: {
    top: 276,
  },
  frameChild49: {
    top: 306,
  },
  frameChild50: {
    top: 276,
  },
  frameChild51: {
    top: 306,
  },
  text: {
    top: 281,
  },
  text1: {
    top: 311,
  },
  text2: {
    top: 281,
  },
  text3: {
    top: 311,
  },
  text4: {
    top: 281,
  },
  text5: {
    top: 311,
  },
  frameChild52: {
    top: 565,
    left: 1076,
    height: 26,
  },
  rechercheNomPatient: {
    top: 571,
    left: 1081,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameChild53: {
    top: 641,
    left: 988,
    width: 64,
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 948,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default FrameScreen;
