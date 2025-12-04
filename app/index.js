import React from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Calculadora from '../components/calculadora/calculadora';
import Titol from '../components/titol/titol';

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
