import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Resultat from '../resultat/resultat'
import { useEffect, useState } from 'react';

const Calculadora = () => {
  const [metres, setMetres] = useState(0);
  const [pes, setPes] = useState(0);
  const [imc, setImc] = useState(0);
  const [tipo, setTipo] = useState('');
  const [color, setColor] = useState('');
  const pesValid = /^(\d+)$|^(\d*\.\d+)$/;

  useEffect(() => {
    if(imc > 0 && imc < 18.5){
      setTipo('Infrapeso')
      setColor('red')
    } else if(imc >= 18.5 && imc < 24.9){
      setTipo('Peso normal')
      setColor('green')
    } else if(imc >= 25 && imc < 29.9){
      setTipo('Sobrepes')
      setColor('orange')
    } else if(imc >= 30){
      setTipo('Obesitat')
      setColor('red')
    }
  }, [imc]);

  const handleOnPress = () => {
    const num = pes / (Math.pow(metres,2))
    setImc(num)
    console.log(imc)
    if(!pesValid.test(pes) || !pesValid.test(metres) || metres == 0){
      setImc(0)
      setTipo('Error: Introdueix valors vàlids')
      setColor('red')
    }
  }
  return (
    <View>
        <View>
    <TextInput
    mode= 'outlined'
    style={{width:200, height:50}}
      label="pes(kg)"
      value={pes}
      onChangeText={prev => setPes(prev)}
     right={<TextInput.Affix text="Kg." />}
     activeOutlineColor='green'
     outlineColor='green'
    />
    </View>

     <View>
    <TextInput
    mode= 'outlined'
    style={{width:200, height:50}}
      label="metres(m)"
      value={metres}
      onChangeText={prev => setMetres(prev)}
     right={<TextInput.Affix text="M." />}
     activeOutlineColor='blue'
     outlineColor='blue'
    />
    </View>

    <Button style={{margin:10}} icon="calculator" mode="contained" onPress={handleOnPress}>
    Calcular
  </Button>

  <Resultat textColor={color} resultImc={imc} resultDef={tipo}></Resultat>

    </View>
  );
};

export default Calculadora;