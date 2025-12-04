import React, { useState } from "react";
import { Text, View } from "react-native";
import { PaperProvider, TextInput } from "react-native-paper";
import Titol from '../components/titol/titol'
import Calculadora from '../components/calculadora/calculadora'

const Index = () => {

  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 18,
        }}
      >
        <Titol></Titol>
        <Calculadora></Calculadora>

      </View>
    </PaperProvider>
  );
};

export default Index;
