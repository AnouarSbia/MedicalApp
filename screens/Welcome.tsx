import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Welcome = () => {
  return (
    <View style={[styles.welcome, styles.welcomeBg]}>
      <View style={[styles.logoMed, styles.welcomeBg]}>
        <View style={[styles.logoMedChild, styles.logoChildPosition1]} />
        <View style={[styles.logoMedItem, styles.logoPosition]} />
        <View style={[styles.logoMedInner, styles.logoPosition]} />
        <View style={[styles.rectangleView, styles.logoChildBg]} />
        <View style={[styles.logoMedChild1, styles.logoChildBg]} />
        <View style={[styles.logoMedChild2, styles.logoChildPosition1]} />
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
          style={[styles.logoMedChild4, styles.logoChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-22.png")}
        />
        <Image
          style={[styles.logoMedChild5, styles.logoChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-24.png")}
        />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-73.png")}
        />
        <Text style={[styles.mySihaty, styles.mySihatyFlexBox]}>MY SIHATY</Text>
        <Text style={[styles.healthService, styles.mySihatyFlexBox]}>
          Health service
        </Text>
        <View style={[styles.logoMedChild6, styles.logoChildPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeBg: {
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  logoChildPosition1: {
    width: 11,
    backgroundColor: Color.midnightblue,
    top: 108,
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
  logoChildLayout: {
    height: 38,
    position: "absolute",
  },
  mySihatyFlexBox: {
    textAlign: "left",
    color: Color.midnightblue,
    position: "absolute",
  },
  logoMedChild: {
    height: 21,
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
    left: 118,
    backgroundColor: Color.darkturquoise,
    width: 11,
    position: "absolute",
  },
  logoMedChild1: {
    top: 163,
    height: 7,
    left: 118,
    backgroundColor: Color.darkturquoise,
    width: 11,
    position: "absolute",
  },
  logoMedChild2: {
    left: 168,
    height: 28,
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
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.russoOneRegular,
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
    top: 192,
    left: 49,
    width: 330,
    height: 368,
    position: "absolute",
  },
  welcome: {
    flex: 1,
    width: "100%",
    height: 926,
  },
});

export default Welcome;
